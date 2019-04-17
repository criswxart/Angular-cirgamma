import { CommonModule} from '@angular/common';
import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { PAGES_ROUTES } from './pages.routes';
import { LayoutModule } from '../layout/layout.module';
import { PagesComponent } from './pages.component';


@NgModule({
    declarations: [
        DashboardComponent,
        UsuarioComponent,
        PagesComponent
    ],
    imports: [
        PAGES_ROUTES,
        LayoutModule,
        CommonModule

    ],
    exports: [
        DashboardComponent,
        UsuarioComponent

    ]
})

export class PagesModule {}