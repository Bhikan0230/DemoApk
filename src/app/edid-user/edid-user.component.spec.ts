import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdidUserComponent } from './edid-user.component';

describe('EdidUserComponent', () => {
  let component: EdidUserComponent;
  let fixture: ComponentFixture<EdidUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdidUserComponent]
    });
    fixture = TestBed.createComponent(EdidUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
