import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AsidenavbarService,
  UsuarioService,
  LayoutService
 } from './service.index'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AsidenavbarService,
    UsuarioService,
    LayoutService
  ]
})
export class ServiceModule { }
