import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadguyComponent } from './badguy.component';

describe('BadguyComponent', () => {
  let component: BadguyComponent;
  let fixture: ComponentFixture<BadguyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadguyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadguyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
