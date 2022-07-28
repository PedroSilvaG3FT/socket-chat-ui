import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'chat-form-message',
  templateUrl: 'form-message.component.html',
  styleUrls: ['./form-message.component.scss'],
})
export class FormMessageComponent implements OnInit {
  public message: string = '';
  @Output() onSubmit = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  handleSubmit() {
    this.onSubmit.emit(this.message);
  }
}
