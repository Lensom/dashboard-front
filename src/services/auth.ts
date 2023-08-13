import { AxiosResponse, AxiosError } from 'axios';
import ApiProvider from './API';
import { IRequestInterface } from 'interfaces';

export const userRegistration = ({ params, token }: IRequestInterface) => {
  return ApiProvider(token)
    .client.post(`/user/registration`, params)
    .then((response: AxiosResponse) => response)
    .catch((error: AxiosError) => error.response);
};

export const userInformation = ({ params, token }: IRequestInterface) => {
  console.log(params, token);
  return ApiProvider(token)
    .client.get(`/user/get-info`, params)
    .then((response: AxiosResponse) => response)
    .catch((error: AxiosError) => error.response);
};
