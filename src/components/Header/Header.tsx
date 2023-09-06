import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader className="form__title">
      국내 모든 임상시험 검색하고,
      <br />
      온라인으로 참여하기
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.h1`
  font-size: 36px;
  line-height: 42px;
  margin: 20px 0;
  text-align: center;
`;
