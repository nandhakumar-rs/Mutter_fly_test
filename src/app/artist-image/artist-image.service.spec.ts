import { TestBed } from '@angular/core/testing';

import { ArtistImageService } from './artist-image.service';

describe('ArtistImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtistImageService = TestBed.get(ArtistImageService);
    expect(service).toBeTruthy();
  });
});
