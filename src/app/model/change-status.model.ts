import { User } from 'src/app/model/user.model';

export class ChangeStatus {
    public userChange: User;
    public dataAlteracao: string;
    public statusEnum: string;
}