import axios from 'axios';
import { API } from '../urls';
import LocalStorageHelper from '../helpers/localStorageHelper';
import { ACCESS, BEARER } from '../constants/util';
import { HEADERS } from '../constants/headers';

class HttpClient {
    token = LocalStorageHelper.getItem(ACCESS);

    constructor ({ api, httpConfig }) {
        this.api = api;
        this.httpConfig = httpConfig;
    };

    get (url, option) {
        return this.httpConfig.get(`${this.api}/${url}`, {
            ...option,
            headers: {
                [HEADERS.Authorization]: `${BEARER} ${this.token}`
            }
        });
    }

    post (url, data) {
        return this.httpConfig.post(`${this.api}/${url}`, data);
    }

    put () {

    }

    delete () {

    }
}

export const httpConfig = axios.create({
    headers: {
        [HEADERS.AccessControl]: '*',
        [HEADERS.ContentType]: [HEADERS.ApplicationJson],
    },
    paramsSerializer: (params) => {
        console.log(params, 'params');
    }
});

export const onFulfilled = res => {
    console.log(res, 'res');
    return res.data;
};

export const onRejected = error => {
    console.log(error, 'error');
    throw error.response;
};

httpConfig.interceptors.response.use(onFulfilled, onRejected);

export const httpClient = new HttpClient({
    api: API,
    httpConfig
});

console.log(httpClient, 'httpClient');
