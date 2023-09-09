import styled from 'styled-components';
import { AxiosResponseTypes } from '../../types/AxiosResponseTypes';
import NotSearched from './NotSearched';
import AutoCompleteItem from './AutoCompleteItem';
import CustomSuspense from '../Suspense/CustomSuspense';
import { MoonLoader } from 'react-spinners';

type Props = {
  dataList: AxiosResponseTypes['data'];
  keyword: string;
  keyboardIndex: number;
};

const RecentKeywords = () => {
  const hasSessionData = sessionStorage.getItem('recent_keywords');
  const data: string[] = JSON.parse(hasSessionData as string);

  return (
    data && (
      <>
        <h1>최근 검색어 :</h1>
        <div className="keywords_container">
          {data.map((el, index) => (
            <span className="keyword--bold keyword" key={index}>
              {el}
            </span>
          ))}
        </div>
        <hr style={{ width: '100%' }} />
      </>
    )
  );
};

const AutoComplete = ({ dataList, keyword, keyboardIndex }: Props) => {
  return (
    <StyledRecommendLayout>
      <div className="recommend__header">
        <h1>
          현재 검색어 : <span className="keyword--bold">{keyword}</span>
        </h1>
        <hr style={{ width: '100%' }} />

        <RecentKeywords />
      </div>

      <ul className="recommend__list">
        <h3 className="recommend_title">추천 검색어 : </h3>
        {dataList.length === 0 && <NotSearched keyword={keyword} />}
        {dataList?.map((data, index) => (
          <CustomSuspense
            fallback={
              index === 0 ? (
                <div className="loading__container">
                  <MoonLoader color="#31679E" speedMultiplier={0.8} />
                </div>
              ) : null
            }
            maxDuration={1000}
            key={index}
          >
            <AutoCompleteItem
              keyboardIndex={keyboardIndex}
              index={index}
              keyword={keyword}
              sickNm={data.sickNm}
            />
          </CustomSuspense>
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
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  border-radius: 15px;
  font-family: fontLight;
  opacity: 0.8;

  .recommend__header {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;

    .recommend_title {
      margin: 10px 0;
      opacity: 0.6;
      font-size: 12px;
    }
  }

  .keywords_container {
    display: flex;

    .keyword {
      padding: 5px;
      margin: 10px 10px 10px 0;
      border-radius: 5px;
      background-color: #31679e;
      cursor: pointer;
    }
  }

  .recommend__list {
    overflow-y: scroll;
    .recommend__listitem {
      padding: 10px 0 10px 5px;
      cursor: pointer;
    }

    .loading__container {
      width: 100%;
      height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .keyOver {
      background-color: #e7e7e8 !important;
    }
  }

  .keyword--bold {
    font-family: fontBold;
  }
`;
