import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchImageComponent } from './search-image/search-image.component';
import { ArtistImageComponent } from './artist-image/artist-image.component';

const routes: Routes = [
  { path: "", component: SearchImageComponent },
  { path: "photos/:artist", component: ArtistImageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
