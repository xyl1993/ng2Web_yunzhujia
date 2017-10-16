import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainComponent }   from './main.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import {mainRoutes} from './main.routes';
import { NivoSliderPipe } from './index/NivoSliderPipe.pipe';
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(mainRoutes)
    ],
    exports: [],
    declarations: [
        MainComponent,
        IndexComponent,
        FooterComponent,
        NavbarComponent,
        NivoSliderPipe
    ],
    providers: [],
})
export class MainModule { }
