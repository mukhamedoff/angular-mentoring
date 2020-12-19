import { USERS } from './user.mocked';
import { Injectable } from '@angular/core';
import { User } from './user.interface';

@Injectable({ providedIn: 'root' })
export class UserService {
    user: User;

    getUser(): User {
        return this.user;
    }

    setUser(user: User): void {
        this.user = user;
    }

    findUserInLogin(email: string, password: string): User | null {
        return USERS.find(({ email: userEmail , password: userPass  }: User) => userEmail === email && userPass === password);
    }
}
