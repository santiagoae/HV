import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentSkillsComponent } from './development-skills.component';

describe('DevelopmentSkillsComponent', () => {
  let component: DevelopmentSkillsComponent;
  let fixture: ComponentFixture<DevelopmentSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopmentSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopmentSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
