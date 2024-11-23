import { Routes } from '@angular/router';
import { AlbumsSearchComponent } from './features/albums/components/albums-search/albums-search.component';
import { RegisterComponent } from './features/users/components/register/register.component';
import { AlbumComponent } from './features/albums/components/album/album.component';

export const routes: Routes = [
    {
        title: 'Home Page',
        path: 'home',
        component: AlbumsSearchComponent,
        pathMatch: 'full'
    },
    {
        title: 'Register User',
        path: 'register',
        component: RegisterComponent,
        pathMatch: 'full'
    },
    {
        title: 'Album',
        path: 'albums/:id',
        component: AlbumComponent,
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
