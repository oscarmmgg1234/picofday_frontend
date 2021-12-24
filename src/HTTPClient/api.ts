import axios, { AxiosResponse } from 'axios';
import { GETimage } from '../Models/fetch.interface';

const instance = axios.create({
	baseURL: 'http://35.86.132.128:5001',
	timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => instance.get(url).then(responseBody),
};

export const api = {
	getImage: (): Promise<GETimage> => requests.get('fetchImage'),
};