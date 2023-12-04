import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterOutlet, provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { DefinicionComponent } from './definicion/definicion.component';
import { HistoriaComponent } from './historia/historia.component';
import { CreacionComponent } from './creacion/creacion.component';
import { AsptecnicosComponent } from './asptecnicos/asptecnicos.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    DefinicionComponent,
    HistoriaComponent,
    CreacionComponent,
    AsptecnicosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, RouterOutlet
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
