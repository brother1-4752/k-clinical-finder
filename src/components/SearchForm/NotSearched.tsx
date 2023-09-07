const NotSearched = ({ keyword }: { keyword: string }) => {
  if (keyword.length === 0 || keyword.trim().length === 0) {
    return <li>키워드가 비었습니다</li>;
  } else {
    return <li>검색 결과, 관련 키워드가 없습니다.</li>;
  }
};

export default NotSearched;
