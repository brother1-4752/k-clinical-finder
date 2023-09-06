import { styled } from 'styled-components';

const Poster = () => {
  return (
    <StyledPoster className="poster__wrapper">
      <img src="poster.png" alt="메인 포스터" />
    </StyledPoster>
  );
};

export default Poster;

const StyledPoster = styled.div`
  width: 50%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;
