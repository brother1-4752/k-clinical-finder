import { useEffect, useState } from 'react';
import { validateIsKoreanWord } from '../utils/validateIsKoreanWord';

const useDebounce = (keyword: string) => {
  const [debounceValue, setDebounceValue] = useState<string>('');
  let isKoreanWord = validateIsKoreanWord(keyword);

  const delay = 200;

  useEffect(() => {
    if (isKoreanWord) {
      const timer = setTimeout(() => {
        setDebounceValue(keyword.trim());
        console.log('디바운스 실행');
      }, delay);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(() => {
      console.log('디바운스값 초기화');
      setDebounceValue('');
    }, delay);
    return () => clearTimeout(timer);
  }, [keyword, isKoreanWord]);

  return debounceValue;
};

export default useDebounce;
