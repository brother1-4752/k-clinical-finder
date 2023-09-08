import { CACHE_EXPIRE_TIME } from '../constants/cache';

export const isExpired = (cacheExpireTime: any) => {
  return (
    new Date().getTime() - new Date(cacheExpireTime).getTime() >
    CACHE_EXPIRE_TIME
  );
};
