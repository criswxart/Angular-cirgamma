import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import {LoginModule} from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { PagesModule} from './pages/pages.module';
//Servicios
import { ServiceModule } from './services/service.module';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    LoginModule,
    HttpClientModule,
    PagesModule,
    APP_ROUTES,
    ServiceModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
