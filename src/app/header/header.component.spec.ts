import { Menu } from './../shared/menu/menu.interface';
import { registeredMenu, unRegisteredMenu } from './../shared/menu/menu.lists';
import { MenuService } from './../shared/menu/menu.services';
import { User } from './../shared/users/user.interface';
import { userMock } from './../shared/users/user.mocked';
import { UserService } from './../shared/users/user.services';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let userServiceStub: Partial<UserService>;
  let menuServiceStub: Partial<MenuService>;
  let userService: UserService;
  let menuService: MenuService;

  beforeEach(async () => {
    userServiceStub = {
      user: JSON.parse(JSON.stringify(userMock))
    };
    menuServiceStub = {
      registeredMenu,
      unRegisteredMenu,
      getMenu(isUserLogin: boolean): Menu[] {
        return isUserLogin ? this.registeredMenu : this.unRegisteredMenu;
      }
    };
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [
        {provide: UserService, useValue: userServiceStub},
        {provide: MenuService, useValue: menuServiceStub}
      ]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    menuService = TestBed.inject(MenuService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should equal registered menu', () => {
    fixture.detectChanges();
    expect(component.menu).toEqual(registeredMenu);
  });

  it('should equal unregistered menu', () => {
    userServiceStub.user.id = 0;
    fixture.detectChanges();
    expect(component.menu).toEqual(unRegisteredMenu);
  });
});
