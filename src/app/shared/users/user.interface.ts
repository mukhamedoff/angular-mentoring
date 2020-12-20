export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email?: string;
    password?: string;
}
export interface RemoteUser {
    id: number;
    fakeToken: string;
    name: {
        first: string,
        last: string
    };
    login: string;
    password: string;
}
