import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizOptionsComponent } from './quiz-options.component';

describe('QuizOptionsComponent', () => {
  let component: QuizOptionsComponent;
  let fixture: ComponentFixture<QuizOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizOptionsComponent]
    });
    fixture = TestBed.createComponent(QuizOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
