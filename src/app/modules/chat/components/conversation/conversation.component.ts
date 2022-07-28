import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chat-conversation',
  templateUrl: 'conversation.component.html',
  styleUrls: ['./conversation.component.scss'],
})
export class ConversationComponent implements OnInit {
  @Input() messages: any[] = [];

  constructor() {}

  ngOnInit() {}
}
