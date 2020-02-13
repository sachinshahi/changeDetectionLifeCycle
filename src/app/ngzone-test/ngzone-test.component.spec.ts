import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgzoneTestComponent } from './ngzone-test.component';

describe('NgzoneTestComponent', () => {
  let component: NgzoneTestComponent;
  let fixture: ComponentFixture<NgzoneTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgzoneTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgzoneTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
