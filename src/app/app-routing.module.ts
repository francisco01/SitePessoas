import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponent } from './home/pessoa/consulta/consulta.component';
import { CadastroComponent } from './home/pessoa/cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponentT } from './home/tarefa/cadastro/cadastro.component';
import { ConsultaTComponent} from './home/tarefa/consulta-t/consulta-t.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'consulta-pessoa', component: ConsultaComponent},
  {path: 'cadastro-pessoa', component: CadastroComponent},
  {path: 'cadastro-pessoa/:codigo', component: CadastroComponent},
  {path: 'cadastro-tarefa', component: CadastroComponentT},
  {path: 'cadastro-tarefa/editar/:codigo', component: CadastroComponentT},
  {path: 'consulta-tarefa/:codigo', component: ConsultaTComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
