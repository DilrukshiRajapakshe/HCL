import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeePortalComponent } from './fee-portal.component';

describe('FeePortalComponent', () => {
  let component: FeePortalComponent;
  let fixture: ComponentFixture<FeePortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeePortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeePortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
