import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesHobbiesLanguagesComponent } from './studies-hobbies-languages.component';

describe('StudiesHobbiesLanguagesComponent', () => {
  let component: StudiesHobbiesLanguagesComponent;
  let fixture: ComponentFixture<StudiesHobbiesLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudiesHobbiesLanguagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudiesHobbiesLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
