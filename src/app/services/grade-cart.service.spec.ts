import { TestBed, inject } from '@angular/core/testing';

import { GradeCartService } from './grade-cart.service';

describe('GradeCartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GradeCartService]
    });
  });

  it('should be created', inject([GradeCartService], (service: GradeCartService) => {
    expect(service).toBeTruthy();
  }));
});
