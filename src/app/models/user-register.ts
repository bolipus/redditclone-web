import { User } from './user';


export interface UserRegister extends User {
    password: string;
    confirmedPassword: string;
}
