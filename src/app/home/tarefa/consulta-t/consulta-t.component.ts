import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService } from 'src/app/services/tarefa.service';
import { Tarefa } from '../../../services/tarefa';
import { Response } from '../../../services/respnse';
import { TokenStorageService } from '../../auth/token-storage.service';
import { Pessoa } from 'src/app/services/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Token } from '../../../services/token';

@Component({
  selector: 'app-consulta-t',
  templateUrl: './consulta-t.component.html',
  styleUrls: ['./consulta-t.component.css']
})
export class ConsultaTComponent implements OnInit {

  private titulo: string = '';
  private tarefas: Tarefa[] = new Array();
  private userName: string;
  private pessoa: Pessoa;

  constructor(private tarefaService: TarefaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private pessoaService: PessoaService, 
    private token: Token) { }

  ngOnInit() {
    this.titulo = 'Tarefas Cadastradas';
    this.userName = this.token.getUserName();
    this.pessoaService.getPessoa(this.userName)
    .subscribe(res => {
      this.pessoa = res;
      console.log("Pessoaa", this.pessoa);
    })
    
   // this.activatedRoute.params.subscribe(parametro => {
       // this.tarefaService.getTarefas(this.pessoa.codigo)
       // .subscribe(res => {
      //    this.tarefas = res;
      //    console.log("teste", this.tarefas);
        //})
       // this.tarefas
       // this.pessoa.tarefas.
    //})
  }
  excluir(codigo: number, index: number): void {
    if (confirm("Deseja realmente excluir esse registro?")) {
      this.tarefaService.excluirTarefa(codigo)
        .subscribe(response => {
          const res: Response = <Response>response;
          if (res.codigo === 1) {
            alert(res.mensagem);
            this.tarefas.splice(index, 1);
            this.reloadPage();
            this.router.navigate(['/consulta-tarefa/codigo']);
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
    this.router.navigate(['/cadastro-tarefa', codigo])
  }

  reloadPage() {
    window.location.reload();
  }

}
