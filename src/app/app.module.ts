import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchImageComponent } from './search-image/search-image.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppInterceptorService } from './app-interceptor.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ScrollDispatchModule, ScrollingModule } from '@angular/cdk/scrolling';
import { MatGridListModule } from '@angular/material/grid-list';
import { ArtistImageComponent } from './artist-image/artist-image.component';
import { ImageViewComponent } from './image-view/image-view.component';
import { ArtistImageService } from './artist-image/artist-image.service';
import { SearchImageService } from './search-image/search-image.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchImageComponent,
    ArtistImageComponent,
    ImageViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    InfiniteScrollModule,
    MatFormFieldModule,
    MatInputModule,
    ScrollDispatchModule,
    ScrollingModule,
    MatGridListModule
  ],
  providers: [ArtistImageService, SearchImageService, { provide: HTTP_INTERCEPTORS, useClass: AppInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
