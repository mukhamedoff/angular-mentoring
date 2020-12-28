import { DEFAULT_USER } from './user.mocked';

export const userServiceMock = {
    user: JSON.parse(JSON.stringify(DEFAULT_USER))
};
