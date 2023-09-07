import { KeyboardEvent, useEffect, useState } from 'react';
import { AxiosResponseTypes } from '../types/AxiosResponseTypes';

type Responses = {
  keyboardIndex: number;
  onKeyHandler: (event: KeyboardEvent<HTMLInputElement>) => void;
};

const useKeydown = (dataList: AxiosResponseTypes['data']): Responses => {
  const [keyboardIndex, setKeyboardIndex] = useState(-1);

  const onKeyHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!event.nativeEvent.isComposing) {
      if (event.key === 'ArrowUp' && keyboardIndex > 0) {
        setKeyboardIndex((prev) => prev - 1);
      }

      if (event.key === 'ArrowDown' && keyboardIndex < dataList.length - 1) {
        setKeyboardIndex((prev) => prev + 1);
      }
    }
  };

  const callback = () => {
    setKeyboardIndex(-1);
  };

  useEffect(() => {
    callback();
  }, [dataList]);

  return { keyboardIndex, onKeyHandler };
};

export default useKeydown;
