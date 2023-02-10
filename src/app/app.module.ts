import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevelopmentSkillsComponent } from './components/development-skills/development-skills.component';
import { UnivesityProjectsComponent } from './components/univesity-projects/univesity-projects.component';
import { CoursesPersonalProjectsComponent } from './components/courses-personal-projects/courses-personal-projects.component';
import { StudiesHobbiesLanguagesComponent } from './components/studies-hobbies-languages/studies-hobbies-languages.component';
import { ReferencesComponent } from './components/references/references.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    DevelopmentSkillsComponent,
    UnivesityProjectsComponent,
    CoursesPersonalProjectsComponent,
    StudiesHobbiesLanguagesComponent,
    ReferencesComponent,
    WorkExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
