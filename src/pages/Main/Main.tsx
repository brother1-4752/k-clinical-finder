import SearchForm from '../../components/SearchForm/SearchForm';
import Header from '../../components/Header/Header';
import styled from 'styled-components';

const Home = () => {
  return (
    <StyledMain>
      <Header />

      <SearchForm />
    </StyledMain>
  );
};

export default Home;

const StyledMain = styled.div`
  width: 50%;
  height: 100%;
`;
