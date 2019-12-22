import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedlifecycleComponent } from './nestedlifecycle.component';

describe('NestedlifecycleComponent', () => {
  let component: NestedlifecycleComponent;
  let fixture: ComponentFixture<NestedlifecycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedlifecycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedlifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
