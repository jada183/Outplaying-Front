import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAccountLolComponent } from './info-account-lol.component';

describe('InfoAccountLolComponent', () => {
  let component: InfoAccountLolComponent;
  let fixture: ComponentFixture<InfoAccountLolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAccountLolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAccountLolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
