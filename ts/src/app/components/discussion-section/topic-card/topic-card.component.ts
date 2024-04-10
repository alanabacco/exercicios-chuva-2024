import { Component, Input, OnInit } from '@angular/core';
interface Topic {
  title: string;
  author: string;
  summary: string;
  likes: number;
  answers: number;
}

@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.scss'],
})
export class TopicCardComponent implements OnInit {
  @Input()
  topic!: Topic;

  constructor() {}

  ngOnInit(): void {}
}
