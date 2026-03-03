import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component/home.component'; //static welcome page
import {AboutComponent} from './about/about.component/about.component'; //static about page
import {AlbumsComponent} from './albums/albums.component/albums.component'; //list of all allbums
import {AlbumDetailComponent} from './album-detail/album-detail.component/album-detail.component'; //single album details
import {AlbumPhotosComponent} from './album-photos/album-photos.component/album-photos.component'; //photos of selected album


export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'albums', component: AlbumsComponent},
    {path: 'albums/:id', component: AlbumDetailComponent},
    {path: 'albums/:id/photos', component: AlbumPhotosComponent},
];

