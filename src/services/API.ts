import axios from 'axios';
import Cookies from 'js-cookie';

interface Provider {
  client: any;
  clientUpload: any;
  apiURL: string;
  token: string | undefined;
  locale: string | undefined;
}

const providerInfo: { provider: Provider | null } = {
  provider: null,
};

const API_URL =
  process.env.REACT_APP_API_BASE_URL_LOCAL ||
  process.env.REACT_APP_API_BASE_URL_SERVER ||
  '';

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
