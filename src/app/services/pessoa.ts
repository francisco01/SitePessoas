import { Tarefa } from './tarefa';
import { TokenStorageService } from '../home/auth/token-storage.service';

export class Pessoa {
    codigo: number;
    userName: string;
    ativo: boolean;
    tarefas: Array <Tarefa[]>;
}