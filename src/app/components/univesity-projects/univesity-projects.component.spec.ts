import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnivesityProjectsComponent } from './univesity-projects.component';

describe('UnivesityProjectsComponent', () => {
  let component: UnivesityProjectsComponent;
  let fixture: ComponentFixture<UnivesityProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnivesityProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnivesityProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
