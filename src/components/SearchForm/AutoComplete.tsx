import styled from 'styled-components';
import { AxiosResponseTypes } from '../../types/AxiosResponseTypes';
import { MouseEvent } from 'react';

type Props = {
  dataList: AxiosResponseTypes['data'];
  keyword: string;
  keyboardIndex: number;
};

const AutoComplete = ({ dataList, keyword, keyboardIndex }: Props) => {
  const NotSearched = () => {
    if (keyword.length === 0 || keyword.trim().length === 0) {
      return <li>키워드가 비었습니다</li>;
    } else {
      return <li>검색 결과, 관련 키워드가 없습니다.</li>;
    }
  };

  const onMouseOverHandler = (event: MouseEvent<HTMLLIElement>) => {
    event.currentTarget.style.backgroundColor = '#e7e7e8';
  };

  const onMouseOutHandler = (event: MouseEvent<HTMLLIElement>) => {
    event.currentTarget.style.backgroundColor = 'inherit';
  };

  let id = 1;
  const getId = () => id++;

  return (
    <StyledRecommendLayout>
      <div className="recommend__header">
        <h1>
          현재 검색어 : <span className="keyword--bold">{keyword}</span>
        </h1>
        <hr style={{ width: '100%' }} />
        <h3 className="recommend_title">추천 검색어</h3>
      </div>

      <ul className="recommend__list">
        {dataList.length === 0 && <NotSearched />}
        {dataList.map((data, index) => (
          <li
            onMouseOver={onMouseOverHandler}
            onMouseOut={onMouseOutHandler}
            className={`recommend__listitem ${
              keyboardIndex === index ? 'keyOver' : ''
            }`}
            key={data.sickCd}
          >
            🔎
            {data.sickNm.split('').map((chunk) =>
              keyword.includes(chunk) ? (
                <span key={getId()} className="keyword--bold">
                  {chunk}
                </span>
              ) : (
                chunk
              )
            )}
          </li>
        ))}
      </ul>
    </StyledRecommendLayout>
  );
};

export default AutoComplete;

const StyledRecommendLayout = styled.div`
  width: 60%;
  height: 550px;
  margin: 15px 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  border-radius: 15px;
  font-family: fontLight;
  opacity: 0.8;

  .recommend__header {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    background-color: white;

    .recommend_title {
      margin: 10px 0;
      opacity: 0.6;
      font-size: 12px;
    }
  }

  .recommend__list {
    .recommend__listitem {
      padding: 10px 0 10px 5px;
      cursor: pointer;
    }
    .keyOver {
      background-color: #e7e7e8;
    }
  }

  .keyword--bold {
    font-family: fontBold;
  }
`;
