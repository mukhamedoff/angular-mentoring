import { TestBed } from '@angular/core/testing';
import { MenuService } from './menu.services';
import { registeredMenu, unRegisteredMenu } from './menu.lists';

describe('MenuService', () => {
    let menuService: MenuService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ MenuService ]
        });
        menuService = TestBed.inject(MenuService);
    });

    it('#getMenu should return menu for login user', () => {
        expect(menuService.getMenu(true)).toEqual(registeredMenu);
    });

    it('#getMenu should return menu for logout user', () => {
        expect(menuService.getMenu(false)).toEqual(unRegisteredMenu);
    });
});
