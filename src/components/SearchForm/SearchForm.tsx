import styled from 'styled-components';
import useInput from '../../hooks/useInput';
import useDebounce from '../../hooks/useDebounce';
import useAxiosFetchData from '../../hooks/useAxiosFetchData';
import { KeyboardEvent, MouseEvent, useEffect, useState } from 'react';
import AutoComplete from './AutoComplete';

const SearchForm = () => {
  const [
    keyword,
    setKeyword,
    isFocused,
    onChangeHandler,
    onFocusHandler,
    onBlurHandler,
  ] = useInput<string>('');
  const debounceValue = useDebounce(keyword);
  const dataList = useAxiosFetchData(debounceValue);
  const [keyboardIndex, setKeyboardIndex] = useState(-1);

  const onClickDeleteButton = (event: MouseEvent<HTMLButtonElement>) => {
    //TODO: focus를 유지하기
    event.preventDefault();
    setKeyword('');
  };

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

  return (
    <StyledForm>
      <div className="input__wrapper">
        <input
          className="input__text"
          type="text"
          placeholder={isFocused ? '' : '🔎  질환명을 입력해주세요.'}
          onChange={onChangeHandler}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          onKeyDown={onKeyHandler}
          value={keyword}
        />

        <button className="form__deletebutton" onClick={onClickDeleteButton}>
          ✕
        </button>

        <button className="form__button">검색</button>
      </div>

      {isFocused && (
        <AutoComplete
          keyboardIndex={keyboardIndex}
          keyword={keyword}
          dataList={dataList}
        />
      )}

      {/* ul + li 검색에 따른 비동기 호출 */}
    </StyledForm>
  );
};

export default SearchForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  .input__wrapper {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    margin: 15px 0;
    font-size: 16px;
    position: relative;

    .input__text {
      width: 50%;
      padding: 0 15px;
      border-radius: 15px 0 0 15px;
      border: 1px solid black;
      border-right: none;
      font-family: fontRegular;
      font-size: 18px;
    }

    .form__deletebutton {
      position: absolute;
      border: none;
      background-color: #31679e;
      color: white;
      padding: 8px;
      border-radius: 8px;
      right: 30%;
      height: 30px;
      top: 15px;
      cursor: pointer;
    }

    .form__button {
      width: 80px;
      background-color: #31679e;
      color: white;
      border: none;
      border-radius: 0 15px 15px 0;
      font-family: fontRegular;
      font-size: 18px;
    }
  }
`;
