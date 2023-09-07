import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

export type InputReturnTypes<T> = [
  T,
  Dispatch<SetStateAction<T>>,
  boolean,
  (e: ChangeEvent<HTMLInputElement>) => void,
  (e: ChangeEvent<HTMLInputElement>) => void,
  (e: ChangeEvent<HTMLInputElement>) => void
];

const useInput = <T>(initialValue: T): InputReturnTypes<T> => {
  const [value, setValue] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value as T);
  };

  const onFocusHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setIsFocused(true);
  };

  const onBlurHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setIsFocused(false);
  };

  return [
    value,
    setValue,
    isFocused,
    onChangeHandler,
    onFocusHandler,
    onBlurHandler,
  ];
};

export default useInput;
