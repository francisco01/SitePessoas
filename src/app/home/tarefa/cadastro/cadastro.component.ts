import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/services/tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Response } from '../../../services/respnse';
import { Pessoa } from 'src/app/services/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponentT implements OnInit {

  private titulo: string;
  private tarefa: Tarefa = new Tarefa();
  private pessoas: Observable<Pessoa[]>;
  private pessoa: Pessoa;

  constructor(private tarefaService: TarefaService,
    private pessoaService: PessoaService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.pessoas = this.pessoaService.getPessoas();
    this.activatedRoute.params.subscribe(parametro => {
      if (parametro['codigo'] === undefined) {
        this.titulo = 'Novo Cadastro de Tarefa'
      } else {
        this.titulo = 'Editar Tarefa';
        this.tarefaService.getTarefa(Number(parametro['codigo']))
          .subscribe(res => {
            this.tarefa = res;

          });
      }
    });
  }
  salvar() {
    this.tarefa.pessoa = this.pessoa;
    if (this.tarefa.codigo === undefined) {
      this.tarefaService.addTarefa(this.tarefa)
        .subscribe(response => {
          this.tarefa = response;
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
      this.tarefaService.atualizarTarefa(this.tarefa)
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
      })
    }
  }

}
