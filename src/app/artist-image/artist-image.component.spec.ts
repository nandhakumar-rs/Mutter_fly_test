import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistImageComponent } from './artist-image.component';

describe('ArtistImageComponent', () => {
  let component: ArtistImageComponent;
  let fixture: ComponentFixture<ArtistImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
