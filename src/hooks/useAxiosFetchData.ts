import { useEffect, useState } from 'react';
import instance from '../apis/createAxiosInstance';
import { AxiosResponseTypes } from '../types/AxiosResponseTypes';

const fetchData = async (word: string) => {
  if (word.length > 0 && word.trim() !== '') {
    const response = await instance.get(`?q=${word}`);

    console.log('params :', response.config.params);

    return response.data;
  }
  return [];
};

const useAxiosFetchData = (keyword: string) => {
  const [dataList, setDataList] = useState<AxiosResponseTypes['data']>([]);

  useEffect(() => {
    fetchData(keyword).then((data) => setDataList(data));
  }, [keyword]);

  return dataList;
};

export default useAxiosFetchData;
