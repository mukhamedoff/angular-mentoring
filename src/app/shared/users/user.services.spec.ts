import { User } from './user.interface';
import { TestBed } from '@angular/core/testing';
import { UserService } from './user.services';

describe('UserServices', () => {
    let userService: UserService;
    const user: User = {
        id: 1,
        firstName: 'Jack',
        lastName: 'Developer'
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ UserService ]
        });
        userService = TestBed.inject(UserService);
    });

    it('#getValue should return stubbed user', () => {
        expect(userService.getUser()).toEqual(user, 'service returned stub user');
    });
});
