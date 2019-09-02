import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponent } from './home/pessoa/consulta/consulta.component';
import { CadastroComponent } from './home/pessoa/cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'consulta-pessoa', component: ConsultaComponent},
  {path: 'cadastro-pessoa', component: CadastroComponent},
  {path: 'cadastro-pessoa/:codigo', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
