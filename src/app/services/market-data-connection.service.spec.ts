import { TestBed } from '@angular/core/testing';

import { MarketDataConnectionService } from './market-data-connection.service';

describe('MarketDataConnectionService', () => {
  let service: MarketDataConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketDataConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
