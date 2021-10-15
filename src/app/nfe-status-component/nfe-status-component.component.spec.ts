import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NfeStatusComponentComponent } from './nfe-status-component.component';

describe('NfeStatusComponentComponent', () => {
  let component: NfeStatusComponentComponent;
  let fixture: ComponentFixture<NfeStatusComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NfeStatusComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NfeStatusComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
