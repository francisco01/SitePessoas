import { Pessoa } from './pessoa';

export class Tarefa {
    codigo: number;
    nome: string;
    descricao: string;
    dtInicio: Date;
    dtTermino: Date;
    concluido: boolean;
    pessoa: Pessoa;

}