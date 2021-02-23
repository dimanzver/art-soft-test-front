import { Component, OnInit } from '@angular/core';
import Topic from '../../types/Topic';

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss']
})
export class TopicsListComponent implements OnInit {

  topics : Topic[] = [];

  constructor() {
    let topics = [];
    for (let i = 1; i <= 30; i++) {
      topics.push({
        id: i,
        title: 'Топик #' + i,
      });
    }
    this.topics = topics;
  }

  ngOnInit(): void {
  }

}
