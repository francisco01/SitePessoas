import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/services/pessoa';
import { PessoaService } from '../../../services/pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '../../../services/respnse';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  private titulo: string;
  private pessoa: Pessoa = new Pessoa();
  constructor(private pessoaService: PessoaService,
  private router: Router,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(parametro => {
      if (parametro['codigo'] === undefined) {
        this.titulo = 'Novo Cadastro de Pessoa';
      }
      else {
        this.titulo = 'Editar Cadastro de Pessoa';
        this.pessoaService.getPessoa(String(parametro['nome']))
        .subscribe(res => {
          this.pessoa = res;
        });
      }
    });
  }

  salvar() {
    if (this.pessoa.codigo === undefined) {
      this.pessoaService.addPessoa( this.pessoa)
      .subscribe(response => {
        this.pessoa = response;
        const res: Response = <Response>response;

          if (res.codigo === 1) {
            alert(res.mensagem);
          } else {
            alert(res.mensagem);
          }
          (erro) => {
            alert(erro);
          }
        });
    }else{
      this.pessoaService.atualizarPessoa(this.pessoa)
      .subscribe(response => {
        const res: Response = <Response>response;
        if (res.codigo == 1){
          alert(res.mensagem);
          this.router.navigate(['/consulta-pessoa']);
        }else{
          alert(res.mensagem);
        }
        (erro) => {
          alert(erro);
        }
      });
    }
  }

}
