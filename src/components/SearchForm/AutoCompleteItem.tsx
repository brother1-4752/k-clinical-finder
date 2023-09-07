import { MouseEvent } from 'react';
import BoldFont from '../Atoms/BoldFont';

type Props = {
  keyboardIndex: number;
  index: number;
  keyword: string;
  sickNm: string;
};

const AutoCompleteItem = ({ keyboardIndex, index, keyword, sickNm }: Props) => {
  const onMouseOverHandler = (event: MouseEvent<HTMLLIElement>) => {
    event.currentTarget.style.backgroundColor = '#e7e7e8';
  };
  const onMouseOutHandler = (event: MouseEvent<HTMLLIElement>) => {
    event.currentTarget.style.backgroundColor = 'inherit';
  };

  return (
    <li
      onMouseOver={onMouseOverHandler}
      onMouseOut={onMouseOutHandler}
      className={`recommend__listitem ${
        keyboardIndex === index ? 'keyOver' : ''
      }`}
      key={index}
    >
      🔎
      {BoldFont(keyword, sickNm)}
    </li>
  );
};

export default AutoCompleteItem;
