import {Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { DefinicionComponent } from './definicion/definicion.component';
import { HistoriaComponent } from './historia/historia.component';
import { CreacionComponent } from './creacion/creacion.component';
import { AsptecnicosComponent } from './asptecnicos/asptecnicos.component';
import { FooterComponent } from './footer/footer.component';

export const routes =   [   {path: 'header', component: HeaderComponent},
                            {path: 'intro', component: IntroComponent},
                            {path: 'definicion', component: DefinicionComponent},
                            {path: 'historia', component: HistoriaComponent},
                            {path: 'creacion', component: CreacionComponent},
                            {path: 'asptecnicos', component: AsptecnicosComponent},
                            {path: 'footer', component: FooterComponent},
                        ];

