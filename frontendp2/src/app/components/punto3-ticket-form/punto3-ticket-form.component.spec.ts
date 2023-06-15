import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto3TicketFormComponent } from './punto3-ticket-form.component';

describe('Punto3TicketFormComponent', () => {
  let component: Punto3TicketFormComponent;
  let fixture: ComponentFixture<Punto3TicketFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Punto3TicketFormComponent]
    });
    fixture = TestBed.createComponent(Punto3TicketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
