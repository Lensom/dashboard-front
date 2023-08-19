import axios from 'axios';
import Cookies from 'js-cookie';
// import { API_URL } from 'config';

interface Provider {
  client: any; // Здесь типы клиентов axios могут быть точнее
  clientUpload: any; // То же самое здесь
  apiURL: string;
  token: string | undefined;
  locale: string | undefined;
}

const providerInfo: { provider: Provider | null } = {
  provider: null,
};

const API_URL = 'https://zany-lime-perch-cap.cyclic.cloud';

export default function ApiProvider(ssrToken?: string, locale?: string): any {
  const token = ssrToken || Cookies.get('dashboardAccessToken');

  if (
    providerInfo.provider &&
    providerInfo.provider.apiURL === API_URL &&
    providerInfo.provider.token === token &&
    token !== null &&
    providerInfo.provider.locale === locale &&
    locale !== null
  ) {
    return providerInfo.provider;
  }

  console.log(API_URL, 'test API VERCEL');

  const client = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': locale || 'uk',
    },
  });

  const clientUpload = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'multipart/form-data',
      'Content-Language': 'en-US,en;',
    },
  });

  if (token) {
    client.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });

    clientUpload.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });
  }

  providerInfo.provider = {
    client,
    clientUpload,
    apiURL: API_URL,
    token,
    locale,
  };

  return providerInfo.provider;
}
