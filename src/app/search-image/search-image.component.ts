import { Component, OnInit, HostListener, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { SearchImageService } from './search-image.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-image',
  templateUrl: './search-image.component.html',
  styleUrls: ['./search-image.component.css']
})
export class SearchImageComponent implements OnInit {


  constructor(public el: ElementRef, private service: SearchImageService) { }
  allPhotos = []
  page = 1
  term;
  tempData = [];
  onScroll() {

    if (this.tempData.length > 0) {
      this.page += 1;
    }

    this.service.searchPhotos(this.term, this.page).subscribe(data => {
      this.tempData = data.results;
      this.allPhotos = this.allPhotos.concat(data.results)
    })
  }

  ngOnInit() {
  }

  search(form: NgForm) {
    this.term = form.value.term;
    this.service.searchPhotos(this.term, this.page).subscribe(data => {
      this.tempData = data.results
      this.allPhotos = data.results
      console.log(this.allPhotos)
    })
  }

}
