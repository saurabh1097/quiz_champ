import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizScreenComponent } from './quiz-screen.component';

describe('QuizScreenComponent', () => {
  let component: QuizScreenComponent;
  let fixture: ComponentFixture<QuizScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizScreenComponent]
    });
    fixture = TestBed.createComponent(QuizScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
