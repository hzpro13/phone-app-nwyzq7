import { Component, OnInit } from '@angular/core';
import { MessageGroup } from '../story.interface';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  public messageGroup: MessageGroup;
  constructor() { }

  ngOnInit() {
    this.messageGroup = {
      from: 'Person A',
      messages: [
        'sample text',
        'sample text',
        'sample text',
      ],
    }
  }

}