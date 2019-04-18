import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { AsidenavbarComponent } from './asidenavbar/asidenavbar.component';
import { FooternavbarComponent } from './footernavbar/footernavbar.component';
import { SettingsnavbarComponent } from './settingsnavbar/settingsnavbar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PAGES_ROUTES } from '../pages/pages.routes';

@NgModule({
  imports: [
    CommonModule,
    PAGES_ROUTES
  ],
  declarations: [
      TopnavbarComponent,
      AsidenavbarComponent,
      FooternavbarComponent,
      SettingsnavbarComponent,
      BreadcrumbsComponent
  ],
    exports: [
        TopnavbarComponent,
        AsidenavbarComponent,
        FooternavbarComponent,
        SettingsnavbarComponent,
        BreadcrumbsComponent
    ]
})
export class LayoutModule { }
