import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssignProjectsComponent } from './view-assign-projects.component';

describe('ViewAssignProjectsComponent', () => {
  let component: ViewAssignProjectsComponent;
  let fixture: ComponentFixture<ViewAssignProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAssignProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAssignProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
