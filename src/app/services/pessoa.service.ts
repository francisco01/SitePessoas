import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from './pessoa';
import { Tarefa } from 'src/app/services/tarefa';


@Injectable()
export class PessoaService {
    private baseUrlService: string = '';
    private headers: HttpHeaders;
    private options: HttpRequest<any>;

    constructor(private http: HttpClient, 
    private configService: ConfigService){

        this.baseUrlService = configService.getUrlService() + '/pessoa/';

            this.headers = 
            new HttpHeaders ({ 'Content-type': 'application/json;charset=UTF-8'});
            this.options = new HttpRequest<any>("HEAD", '{ headers: this.headers}');
        }

        getPessoas(): Observable<any>{
            return this.http.get(this.baseUrlService);
        }
        addPessoa(pessoa: Pessoa): Observable<any>{
            return this.http.post(this.baseUrlService,
            (pessoa));
        }
        excluirPessoa(codigo:number): Observable<any>{
            return this.http.delete(this.baseUrlService + codigo);
        }
        getPessoa(nome:string): Observable<any>{
            return this.http.get(this.baseUrlService + nome);
        }
        atualizarPessoa(pessoa: Pessoa): Observable<any>{
            return this.http.put(this.baseUrlService, pessoa);
        }
}