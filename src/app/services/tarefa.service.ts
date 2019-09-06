import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from './pessoa';
import { Tarefa } from './tarefa';


@Injectable()
export class TarefaService {
    private baseUrlService: string = '';
    private headers: HttpHeaders;
    private options: HttpRequest<any>;

    constructor(private http: HttpClient, 
    private configService: ConfigService){

        this.baseUrlService = this.configService.getUrlService() + '/tarefa/';

            this.headers = 
            new HttpHeaders ({ 'Content-type': 'application/json;charset=UTF-8'});
            this.options = new HttpRequest<any>("HEAD", '{ headers: this.headers}');
        }

        getTarefas(codigo: number): Observable<any>{
            return this.http.get(this.baseUrlService + codigo);
        }
        getTarefa(codigo: number): Observable<any>{
            return this.http.get(this.baseUrlService + '/editar/' + codigo);
        }
        addTarefa(tarefa: Tarefa): Observable<any>{
            return this.http.post(this.baseUrlService,  tarefa);
        }
        excluirTarefa(codigo:number): Observable<any>{
            return this.http.delete(this.baseUrlService + codigo);
        }
        atualizarTarefa(tarefa: Tarefa): Observable<any>{
            return this.http.put(this.baseUrlService, tarefa);
        }
}