import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import {APP_ROUTING} from './app.routes';

//servicios

import {HeroesService} from './servicios/heroes.service';

//componetes
import { AppComponent } from './app.component';
import { NavbarComponent } from './componets/shared/navbar/navbar.component';
import { HomeComponent } from './componets/home/home.component';
import { AboutComponent } from './componets/about/about.component';
import { HeroesComponent } from './componets/heroes/heroes.component';
import { HeroeComponent } from './componets/heroe/heroe.component';
import { BuscadorComponent } from './componets/buscador/buscador.component';

//prueba
import { FormsModule } from '@angular/forms';
import { HeroeTarjetasComponent } from './componets/heroe-tarjetas/heroe-tarjetas.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent,
    HeroeTarjetasComponent
  ],
  imports: [
    BrowserModule,   
    APP_ROUTING,   
    FormsModule 
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
