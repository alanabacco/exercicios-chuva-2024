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

  isFormShowing = false;
  isSubmitSucessShowing = false;
  isCreateTopicCallShowing = true;

  showForm(): void {
    this.isFormShowing = true;
    this.isCreateTopicCallShowing = false;
    this.isSubmitSucessShowing = false;
  }

  submitForm(form: NgForm): void {
    this.isSubmitSucessShowing = true;
    this.isCreateTopicCallShowing = false;
    this.isFormShowing = false;
  }
}
