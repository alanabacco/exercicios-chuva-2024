import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-discussion-section',
  templateUrl: './discussion-section.component.html',
  styleUrls: ['./discussion-section.component.scss'],
})
export class DiscussionSectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  showForm = false;
  topicSent = false;
  showCreateTopic = true;
  toggleForm(): void {
    this.showForm = !this.showForm;
    this.showCreateTopic = !this.showCreateTopic;
  }

  sendTopic(form: NgForm): void {
    this.topicSent = true;
    this.showForm = !this.showForm;
    // form.resetForm();
  }
}
