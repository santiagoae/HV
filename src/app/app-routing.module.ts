import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
// import { CoursesPersonalProjectsComponent } from './components/courses-personal-projects/courses-personal-projects.component';
// import { DevelopmentSkillsComponent } from './components/development-skills/development-skills.component';
// import { ReferencesComponent } from './components/references/references.component';
// import { StudiesHobbiesLanguagesComponent } from './components/studies-hobbies-languages/studies-hobbies-languages.component';
// import { UnivesityProjectsComponent } from './components/univesity-projects/univesity-projects.component';

const routes: Routes = [
  // {path: 'coursesPersonalProject', component: CoursesPersonalProjectsComponent},
  // {path: 'skills', component: DevelopmentSkillsComponent},
  // {path: 'references', component: ReferencesComponent},
  // {path: 'personalThings', component: StudiesHobbiesLanguagesComponent},
  // {path: 'universityProjects', component: UnivesityProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
