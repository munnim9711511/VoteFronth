import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseVoteComponent } from './raise-vote.component';

describe('RaiseVoteComponent', () => {
  let component: RaiseVoteComponent;
  let fixture: ComponentFixture<RaiseVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaiseVoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaiseVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
