import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import {LoginModule} from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import {UsuarioService} from './services/usuario.service';
import { PagesModule} from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    HttpClientModule,
    PagesModule,
    APP_ROUTES
  ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
