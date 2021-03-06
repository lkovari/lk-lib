import { IUser } from './user.interface';

export class User implements IUser {
    userName: string;
    email: string;
    phone: number;

    public constructor(un?: string, em?: string, ph?: number) {
        this.userName = un ? un : 'lkovari';
        this.email = em ? em : 'lkovari@lkovari.com';
        this.phone = ph ? ph : 8001234567;
    }
}
