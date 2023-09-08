import { useEffect, useState } from 'react';
import { validateIsKoreanWord } from '../utils/validateIsKoreanWord';

const useDebounce = (keyword: string) => {
  const [debounceValue, setDebounceValue] = useState<string>('');
  let isKoreanWord = validateIsKoreanWord(keyword);

  const delay = 300;

  useEffect(() => {
    if (isKoreanWord) {
      const timer = setTimeout(() => {
        setDebounceValue(keyword.trim());
      }, delay);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(() => {
      setDebounceValue('');
    }, delay);
    return () => clearTimeout(timer);
  }, [keyword, isKoreanWord]);

  return debounceValue;
};

export default useDebounce;
