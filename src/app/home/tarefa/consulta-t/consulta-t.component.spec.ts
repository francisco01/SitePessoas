import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaTComponent } from './consulta-t.component';

describe('ConsultaTComponent', () => {
  let component: ConsultaTComponent;
  let fixture: ComponentFixture<ConsultaTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
