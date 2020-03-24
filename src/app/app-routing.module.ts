import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './pages/home/home.component'
import { ExploreComponent} from './pages/explore/explore.component'
import { MusicComponent } from './pages/music/music.component'
import { VideoComponent } from './pages/video/video.component'
import { MyLibraryComponent } from './pages/my-library/my-library.component'

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'explore',
    component: ExploreComponent,
  },
  {
    path:'music',
    component: MusicComponent,
  },
  {
    path:'video',
    component: VideoComponent,
  },
  {
    path:'library',
    component: MyLibraryComponent,
  }      
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
