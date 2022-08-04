import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPersonalProjectsComponent } from './courses-personal-projects.component';

describe('CoursesPersonalProjectsComponent', () => {
  let component: CoursesPersonalProjectsComponent;
  let fixture: ComponentFixture<CoursesPersonalProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesPersonalProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesPersonalProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
