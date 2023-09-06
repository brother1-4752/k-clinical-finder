import { HTMLAttributes } from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Layout = ({ children }: Props) => {
  return <Styledlayout>{children}</Styledlayout>;
};

export default Layout;

const Styledlayout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`;
