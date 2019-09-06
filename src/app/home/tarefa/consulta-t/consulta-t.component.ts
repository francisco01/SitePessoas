import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService } from 'src/app/services/tarefa.service';
import { Tarefa } from '../../../services/tarefa';
import { Response } from '../../../services/respnse';

@Component({
  selector: 'app-consulta-t',
  templateUrl: './consulta-t.component.html',
  styleUrls: ['./consulta-t.component.css']
})
export class ConsultaTComponent implements OnInit {

  private titulo: string = '';
  private tarefas: Tarefa[] = new Array();

  constructor(private tarefaService: TarefaService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.titulo = 'Tarefas Cadastradas';
    this.activatedRoute.params.subscribe(parametro => {
        this.tarefaService.getTarefas(Number(parametro['codigo']))
        .subscribe(res => {
          this.tarefas = res;
          console.log("teste", this.tarefas);
        })
    })
  }
  excluir(codigo: number, index: number): void {
    if (confirm("Deseja realmente excluir esse registro?")) {
      this.tarefaService.excluirTarefa(codigo)
        .subscribe(response => {
          const res: Response = <Response>response;
          if (res.codigo === 1) {
            alert(res.mensagem);
            this.tarefas.splice(index, 1);
            this.router.navigate(['/consulta-pessoa']);
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
    this.router.navigate(['/cadastro-tarefa/editar', codigo])
  }

}
