import { TestBed } from '@angular/core/testing';

import { NgxEvolutionComponentsService } from './ngx-evolution-components.service';

describe('NgxEvolutionComponentsService', () => {
  let service: NgxEvolutionComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxEvolutionComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
