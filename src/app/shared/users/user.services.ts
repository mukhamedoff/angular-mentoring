import { userMock } from './user.mocked';
import { Injectable } from '@angular/core';
import { User } from './user.interface';

@Injectable({ providedIn: 'root' })
export class UserService {
    user: User = userMock;

    getUser(): User {
        return this.user;
    }
}
