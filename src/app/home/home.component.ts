import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './auth/token-storage.service';
import { Pessoa } from '../services/pessoa';
import { PessoaService } from '../services/pessoa.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private mensagem = "Pagina Inicial";
  private info: any;
  private pessoa: Observable <Pessoa>;
  constructor(private token: TokenStorageService, 
    private pessoaService: PessoaService,
    private router: Router ) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      userName: this.token.getUserName()
    };
    this.pessoaService.getPessoa(this.info.userName)
    .subscribe(res => {
      this.pessoa = res;
      console.log('pessoa', this.pessoa);
    });
    
    console.log(this.info);
  }

  logout() {
    
    this.token.signOut();
    window.location.reload();
    
  }

}
