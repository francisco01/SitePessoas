import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaService } from '../../../services/pessoa.service';
import { Pessoa } from '../../../services/pessoa';
import { Response } from '../../../services/respnse';
import { from } from 'rxjs';
import { Tarefa } from 'src/app/services/tarefa';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  private pessoas: Pessoa[] = new Array();
  private titulo: string;
  constructor(private pessoaService: PessoaService,
    private router: Router) { }

  ngOnInit() {
    this.titulo = 'Registro Cadastrados';
    this.pessoaService.getPessoas()
      .subscribe(res => {
        this.pessoas = res;
        console.log(this.pessoas);
      });
  }

  excluir(codigo: number, index: number): void {
    if (confirm("Deseja realmente excluir esse registro?")) {
      this.pessoaService.excluirPessoa(codigo)
        .subscribe(response => {
          const res: Response = <Response>response;
          if (res.codigo === 1) {
            alert(res.mensagem);
            this.pessoas.splice(index, 1);
          } else {
            alert(res.mensagem);
          }
          (erro) => {
            alert(erro);
          }
        })
    }
  }
  editar(codigo: number): void {
    this.router.navigate(['/cadastro-pessoa', codigo])
  }
  consultarTarefa(codigo: number) {
    this.router.navigate(['/consulta-tarefa', codigo]);
  }

}
