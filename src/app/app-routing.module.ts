import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'gerencia',
    loadChildren: () => import('./gerencia/gerencia.module').then( m => m.GerenciaModule )
  },
  {
    path: '**',
    redirectTo: 'gerencia'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
