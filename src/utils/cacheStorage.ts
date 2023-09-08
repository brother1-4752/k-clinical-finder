import { AxiosResponse } from 'axios';
import { CACHE_KEY } from '../constants/cache';

export const getCacheData = async (params: { sickNm_like: string }) => {
  const cacheStorage = await caches.open(CACHE_KEY);
  const cacheUrl = new URLSearchParams(params).toString();
  const cached = await cacheStorage.match(cacheUrl);

  if (cached) {
    const data = await cached.json();
    return data;
  }
  return;
};

export const setCacheStorage = async (response: AxiosResponse) => {
  const expireTime = new Date().toISOString();
  const customData = { data: response.data, expireTime };

  const cacheStorage = await caches.open(CACHE_KEY);
  const cacheUrl = new URLSearchParams(response.config.params).toString();
  cacheStorage.put(cacheUrl, new Response(JSON.stringify(customData)));
};

//TODO: ETag 추후 적용하여 리팩토링
// export const getRequestAxiosHeaders = async (config: AxiosRequestConfig) => {};
