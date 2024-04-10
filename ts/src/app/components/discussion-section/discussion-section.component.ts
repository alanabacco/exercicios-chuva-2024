import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-discussion-section',
  templateUrl: './discussion-section.component.html',
  styleUrls: ['./discussion-section.component.scss'],
})
export class DiscussionSectionComponent implements OnInit {
  constructor() {}

  topicList = [
    {
      title: 'Assunto da pergunta aparece aqui',
      author: 'Carlos Henrique Santos',
      summary:
        'Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...',
      likes: 1,
      answers: 1,
    },
    {
      title: 'Assunto da pergunta aparece aqui',
      author: 'Carlos Henrique Santos',
      summary:
        'Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...',
      likes: 2,
      answers: 2,
    },
  ];

  ngOnInit(): void {}

  isFormShowing = false;
  isSubmitSucessShowing = false;
  isCreateTopicCallShowing = true;
  isNewTopicCardShowing = false;

  showForm(): void {
    this.isFormShowing = true;
    this.isCreateTopicCallShowing = false;
    this.isSubmitSucessShowing = false;
  }

  submitForm(form: NgForm): void {
    this.isSubmitSucessShowing = true;
    this.isCreateTopicCallShowing = false;
    this.isFormShowing = false;
    this.isNewTopicCardShowing = true;
  }
}
