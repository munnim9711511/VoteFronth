import { TestBed } from '@angular/core/testing';

import { AjendaService } from './ajenda.service';

describe('AjendaService', () => {
  let service: AjendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
