import { useEffect, useState } from 'react';
import instance from '../apis/createAxiosInstance';
import { AxiosResponseTypes } from '../types/AxiosResponseTypes';
import { AxiosError } from 'axios';
import { getCacheData } from '../utils/cacheStorage';
import { CACHE_KEY } from '../constants/cache';
import { isExpired } from '../utils/isExpired';
import { URL_SICK } from '../constants/apiUrl';

const fetchData = async (word: string) => {
  //최초 API 호출 방지
  if (word === '' || word.trim() === '') return [];

  const config = {
    params: {
      sickNm_like: word,
    },
  };

  try {
    //캐시된 데이터 있을 경우, api호출하지 않고 캐시스토리지에서 꺼내오기
    const cachedData = await getCacheData(config.params);

    if (cachedData) {
      if (isExpired(cachedData.expireTime)) {
        const cacheStorage = await caches.open(CACHE_KEY);
        const cacheUrl = new URLSearchParams(config.params).toString();
        cacheStorage.delete(cacheUrl);
      } else {
        return cachedData.data;
      }
    }

    //처음 검색하는 키워드일 경우, api 호출
    const response = await instance.get(`${URL_SICK}`, config);
    console.info('calling api : ', getId());
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error);
    }
  }

  return [];
};

const useAxiosFetchData = (keyword: string) => {
  const [dataList, setDataList] = useState<AxiosResponseTypes['data']>([]);

  //keyword는 디바운스처리된 값, 이것이 변함에 따라 데이터 페칭 진행
  useEffect(() => {
    fetchData(keyword).then((data) => setDataList(data));
  }, [keyword]);

  return dataList;
};

export default useAxiosFetchData;

//api호출 카운트
let id = 1;
const getId = () => id++;
