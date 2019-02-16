import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistImageService } from './artist-image.service';

@Component({
  selector: 'app-artist-image',
  templateUrl: './artist-image.component.html',
  styleUrls: ['./artist-image.component.css']
})
export class ArtistImageComponent implements OnInit {
  artist;
  allPhotos = [];
  constructor(private route: ActivatedRoute, private service: ArtistImageService) { }

  ngOnInit() {
    this.artist = this.route.snapshot.params.artist
    console.log(this.artist)

    this.service.getPhotosOfArtist(this.artist).subscribe(data => {
      this.allPhotos = data
    })

  }

}
