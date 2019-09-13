import { PessoaService } from './pessoa.service';
import { TokenStorageService } from '../home/auth/token-storage.service';
import { Pessoa } from './pessoa';
import { Injectable } from '@angular/core';

@Injectable()
export class Token {
    pessoa: Pessoa;
    userName: string;

    constructor(private pessoaService: PessoaService,
        private tokenService: TokenStorageService){
            
    }
    getUserName(){
        return this.userName = this.tokenService.getUserName();
    }

    
}