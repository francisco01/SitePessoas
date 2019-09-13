import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponent } from './home/pessoa/consulta/consulta.component';
import { CadastroComponent } from './home/pessoa/cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponentT } from './home/tarefa/cadastro/cadastro.component';
import { ConsultaTComponent} from './home/tarefa/consulta-t/consulta-t.component';
import { UserComponent } from './home/user/user.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: 'user', component: UserComponent},
  {path: 'auth/login', component: LoginComponent},
  {path: 'signup', component: RegisterComponent},
  //{path: 'consulta-pessoa', component: ConsultaComponent},
  //{path: 'cadastro-pessoa', component: CadastroComponent},
  //{path: 'cadastro-pessoa/:nome', component: CadastroComponent},
  {path: 'cadastro-tarefa', component: CadastroComponentT},
  {path: 'cadastro-tarefa/:codigo', component: CadastroComponentT},
  {path: 'consulta-tarefa/:codigo', component: ConsultaTComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
