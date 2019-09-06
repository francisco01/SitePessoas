import { Tarefa } from './tarefa';

export class Pessoa {
    codigo: number;
    nome: string;
    ativo: boolean;
    tarefas: Array <Tarefa[]>;
}