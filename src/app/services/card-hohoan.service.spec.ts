import { TestBed } from '@angular/core/testing';

import { CardHohoanService } from './card-hohoan.service';

describe('CardHohoanService', () => {
  let service: CardHohoanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardHohoanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
