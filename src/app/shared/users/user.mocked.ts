import { User } from './user.interface';

export const DEFAULT_USER: User = {
    id: 1,
    firstName: 'Jack',
    lastName: 'Developer',
    email: 'jack@email.ua',
    password: 'qwe123'
};

export const ADMIN_USER: User = {
    id: 1,
    firstName: 'admin',
    lastName: 'admin',
    email: 'admin@email.ua',
    password: 'qwe123'
};

export const COMMON_USER: User = {
    id: 1,
    firstName: 'common',
    lastName: 'common',
    email: 'common@email.ua',
    password: 'qwe123'
};

export const USERS: Array<User> = [
    DEFAULT_USER,
    ADMIN_USER,
    COMMON_USER
];
