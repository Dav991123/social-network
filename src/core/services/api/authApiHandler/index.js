import { API } from '../../../urls';
import { httpClient } from '../../httpClient';
import LocalStorageHelper from '../../../helpers/localStorageHelper';
import { ACCESS } from '../../../constants/util';

const END_POINTS = {
    me: 'me',
    prefix: 'user',
    login: 'login',
    logout: 'logout',
    register: 'register'
};

class AuthApiHandler {
    async login (data) {
        return await httpClient.post(`${END_POINTS.prefix}/${END_POINTS.login}`, data);
    }

    async signUp (data) {
        return await httpClient.post(`${END_POINTS.prefix}/${END_POINTS.register}`, data);
    }

    async logOut () {
        return await httpClient.post(`${END_POINTS.prefix}/${END_POINTS.logout}`);
    }

    async getUserMe () {
        return await httpClient.get(`${END_POINTS.prefix}/${END_POINTS.me}`);
    }

    async editUserData(data) {
        return await httpClient.put(`${END_POINTS.prefix}/${END_POINTS.me}`, data)
    }
}

const authApiHandler = new AuthApiHandler();
export default authApiHandler;
