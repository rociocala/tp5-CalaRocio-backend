import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto2TransaccionFormComponent } from './punto2-transaccion-form.component';

describe('Punto2TransaccionFormComponent', () => {
  let component: Punto2TransaccionFormComponent;
  let fixture: ComponentFixture<Punto2TransaccionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Punto2TransaccionFormComponent]
    });
    fixture = TestBed.createComponent(Punto2TransaccionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
