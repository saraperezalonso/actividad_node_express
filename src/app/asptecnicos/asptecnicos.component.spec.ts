import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsptecnicosComponent } from './asptecnicos.component';

describe('AsptecnicosComponent', () => {
  let component: AsptecnicosComponent;
  let fixture: ComponentFixture<AsptecnicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsptecnicosComponent]
    });
    fixture = TestBed.createComponent(AsptecnicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
