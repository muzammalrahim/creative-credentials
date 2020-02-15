import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialsTableComponent } from './credentials-table.component';

describe('CredentialsTableComponent', () => {
  let component: CredentialsTableComponent;
  let fixture: ComponentFixture<CredentialsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredentialsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredentialsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
