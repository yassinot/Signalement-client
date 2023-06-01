import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalementListComponent } from './signalement-list.component';

describe('SignalementListComponent', () => {
  let component: SignalementListComponent;
  let fixture: ComponentFixture<SignalementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalementListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
