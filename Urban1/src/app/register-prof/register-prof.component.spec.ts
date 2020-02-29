import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProfComponent } from './register-prof.component';

describe('RegisterProfComponent', () => {
  let component: RegisterProfComponent;
  let fixture: ComponentFixture<RegisterProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
