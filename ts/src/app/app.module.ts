import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PresentationSectionComponent } from './components/presentation-section/presentation-section.component';
import { ResumeSectionComponent } from './components/resume-section/resume-section.component';
import { ActionsSectionComponent } from './components/actions-section/actions-section.component';
import { DetailsSectionComponent } from './components/details-section/details-section.component';
import { DiscussionSectionComponent } from './components/discussion-section/discussion-section.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    HeaderComponent,
    FooterComponent,
    PresentationSectionComponent,
    ResumeSectionComponent,
    ActionsSectionComponent,
    DetailsSectionComponent,
    DiscussionSectionComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
