import { API } from '../../../urls';
import { httpClient } from '../../httpClient';
import LocalStorageHelper from '../../../helpers/localStorageHelper';
import { ACCESS } from '../../../constants/util';

const END_POINTS = {
    prefix: 'user',
    login: 'login',
    me: 'me',
};

class AuthApiHandler {
    async login (data) {
        return await httpClient.post(`${END_POINTS.prefix}/${END_POINTS.login}`, data);
    }

    async getUserMe () {
        return await httpClient.get(`${END_POINTS.prefix}/${END_POINTS.me}`);
    }
}

const authApiHandler = new AuthApiHandler();
export default authApiHandler;
