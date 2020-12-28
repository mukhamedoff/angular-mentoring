import { registeredMenu, unRegisteredMenu } from './../shared/menu/menu.lists';
import { MenuService } from './../shared/menu/menu.services';
import { userServiceMock } from './../shared/users/user.service.mock';
import { menuServiceMock } from './../shared/menu/menu.service.mock';
import { UserService } from './../shared/users/user.services';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const userServiceStub: Partial<UserService> = userServiceMock;
  const menuServiceStub: Partial<MenuService> = menuServiceMock;
  let userService: UserService;
  let menuService: MenuService;

  beforeEach(async () => {
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
