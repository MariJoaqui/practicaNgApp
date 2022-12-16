import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GerenciaRoutingModule } from './gerencia-routing.module';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    GerenciaRoutingModule,
    MaterialModule
  ]
})
export class GerenciaModule { }
