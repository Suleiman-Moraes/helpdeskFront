import { ChangeStatus } from './change-status.model';
import { User } from './user.model';
export class Ticket{
    constructor(
        public id: string,
        public data: string,
        public numero: number,
        public titulo: string,
        public descricao: string,
        public imagem: string,
        public statusEnum: string,
        public prioridadeEnum: string,
        public user: User,
        public assignedUser: User,
        public listaChangeStatus: Array<ChangeStatus>
    ){}
}