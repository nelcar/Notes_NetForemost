import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Pages
import { HomePageComponent } from './pages/home-page/home-page.component'
import { Error404PageComponent } from './pages/errors-pages/error404-page/error404-page.component';

const routes: Routes = [
  { path: 'home'     , component: HomePageComponent },
  { path: ''     , component: HomePageComponent },
  { path: 'not-found'     , component: Error404PageComponent },
  { path: 'notes', loadChildren: () => import('./features/modules/notes/notes.module').then(m => m.NotesModule) },
  { path: '**'                , redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
