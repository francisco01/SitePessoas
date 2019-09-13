import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigService } from './services/config.service';
import { PessoaService } from './services/pessoa.service';
import { TarefaService } from './services/tarefa.service';
import { UserService } from './services/user.service';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './home/pessoa/cadastro/cadastro.component';
import { ConsultaComponent } from './home/pessoa/consulta/consulta.component';
import { CadastroComponentT } from './home/tarefa/cadastro/cadastro.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { ConsultaTComponent } from './home/tarefa/consulta-t/consulta-t.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { UserComponent } from './home/user/user.component';
import { Token } from './services/token';

import { httpInterceptorProviders } from './home/auth/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    ConsultaComponent,
    MenuComponent,
    CadastroComponentT,
    ConsultaTComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ConfigService, PessoaService, 
    TarefaService, UserService, httpInterceptorProviders, Token],
  bootstrap: [AppComponent]
})
export class AppModule { }
