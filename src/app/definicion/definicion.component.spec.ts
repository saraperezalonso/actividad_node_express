import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinicionComponent } from './definicion.component';

describe('DefinicionComponent', () => {
  let component: DefinicionComponent;
  let fixture: ComponentFixture<DefinicionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefinicionComponent]
    });
    fixture = TestBed.createComponent(DefinicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
