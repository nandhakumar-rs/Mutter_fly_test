import { TestBed } from '@angular/core/testing';

import { SearchImageService } from './search-image.service';

describe('SearchImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchImageService = TestBed.get(SearchImageService);
    expect(service).toBeTruthy();
  });
});
