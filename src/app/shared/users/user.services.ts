import { Injectable } from '@angular/core';
import { User } from './user.interface';

@Injectable({ providedIn: 'root' })
export class UserService {
    user: User = {
        id: 1,
        firstName: 'Jack',
        lastName: 'Developer'
    };

    getUser(): User {
        return this.user;
    }
}
