import { AxiosResponse, AxiosError } from 'axios';
import ApiProvider from './API';
import { IRequestInterface } from 'interfaces';

export const userRegistration = ({ params, token }: IRequestInterface) => {
  return ApiProvider(token)
    .client.get(`/user/registration`, params)
    .then((response: AxiosResponse) => response)
    .catch((error: AxiosError) => error.response);
};
