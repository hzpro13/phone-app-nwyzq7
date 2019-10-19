import { Component, OnInit, Input } from '@angular/core';
import { MessageGroup } from '../story.interface';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() messageGroup: MessageGroup;
  private author: string;
  private messages: string[];

  constructor() { }

  ngOnInit() {
    this.author = this.messageGroup.from;
    this.messages = this.messageGroup.messages;
  }

}