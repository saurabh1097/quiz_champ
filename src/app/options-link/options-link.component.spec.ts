import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsLinkComponent } from './options-link.component';

describe('OptionsLinkComponent', () => {
  let component: OptionsLinkComponent;
  let fixture: ComponentFixture<OptionsLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptionsLinkComponent]
    });
    fixture = TestBed.createComponent(OptionsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
