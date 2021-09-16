import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteReportComponent } from './vote-report.component';

describe('VoteReportComponent', () => {
  let component: VoteReportComponent;
  let fixture: ComponentFixture<VoteReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
