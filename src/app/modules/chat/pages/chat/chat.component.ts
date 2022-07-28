import { io } from 'socket.io-client';
import { Component, OnInit } from '@angular/core';
import { AuthorEnum } from '../../enums/author.enum';
import { AuthStore } from '@/store/modules/auth/auth.store';
import { IMessage } from '../../interfaces/message.interface';
import { environment } from '../../../../../environments/environment';
@Component({
  selector: 'chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  public socket: any = null;
  public messages: IMessage[] = [];

  constructor(private authStore: AuthStore) {
    this.initSocket();
  }

  get user() {
    return this.authStore.state.user;
  }

  ngOnInit() {}

  initSocket() {
    this.socket = io(environment.SOCKET_URL);

    this.socket.on('message-broadcast', (data: IMessage) => {
      if (!data) return;

      data.authorType = AuthorEnum.receiver;
      this.messages.push(data);
    });
  }

  sendMessage(message: string) {
    const sendDTO: IMessage = {
      message,
      date: new Date(),
      nickname: this.user.nickname,
      authorType: AuthorEnum.sender,
    };

    this.socket.emit('message', sendDTO);
    this.messages.push(sendDTO);
  }
}
