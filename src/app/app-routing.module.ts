import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'recuperar-p',
    loadChildren: () => import('./recuperar-p/recuperar-p.module').then( m => m.RecuperarPPageModule)
  },
  {
    path: 'newpost',
    loadChildren: () => import('./newpost/newpost.module').then( m => m.NewpostPageModule)
  },
  {
    path: 'publicaciones',
    loadChildren: () => import('./publicaciones/publicaciones.module').then( m => m.PublicacionesPageModule)
  },
  {
    path: 'ver-publicacion',
    loadChildren: () => import('./ver-publicacion/ver-publicacion.module').then( m => m.VerPublicacionPageModule)
  },
  {
    path: 'conversacion',
    loadChildren: () => import('./conversacion/conversacion.module').then( m => m.ConversacionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
