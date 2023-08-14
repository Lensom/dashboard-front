import { AxiosResponse, AxiosError } from 'axios';
import ApiProvider from './API';
import { IRequestInterface } from 'interfaces';

export const getPortfolio = ({ token }: IRequestInterface) => {
  return ApiProvider(token)
    .client.get(`/portfolio`)
    .then((response: AxiosResponse) => response)
    .catch((error: AxiosError) => error.response);
};

export const addNewStock = ({ params, token }: IRequestInterface) => {
  return ApiProvider(token)
    .client.post(`/portfolio/add-stock`, params)
    .then((response: AxiosResponse) => response)
    .catch((error: AxiosError) => error.response);
};
