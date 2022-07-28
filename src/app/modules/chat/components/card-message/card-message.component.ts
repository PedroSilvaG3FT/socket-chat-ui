import { Component, Input, OnInit } from '@angular/core';
import { AuthorEnum } from '../../enums/author.enum';

@Component({
  selector: 'chat-card-message',
  templateUrl: 'card-message.component.html',
  styleUrls: ['./card-message.component.scss'],
})
export class CardMessageComponent implements OnInit {
  @Input() author: number = AuthorEnum.sender;
  @Input() message: string = '';

  get cardClass(): string {
    const isSender = this.author === AuthorEnum.sender;
    return isSender ? 'sender' : 'reciver';
  }

  constructor() {}

  ngOnInit() {}
}
