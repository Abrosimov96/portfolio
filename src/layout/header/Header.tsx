import styled from 'styled-components';
import { Container } from '../../componets/Container';
import { FlexWrapper } from '../../componets/FlexWrapper';
import { Logo } from '../../componets/logo/Logo';
import { HeaderNav } from './headerMenu/HeaderNav';

const menuItems = [
  'Home',
  'Skills',
  'Works',
  'Testimony',
  'Contacts',
];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          <HeaderNav items={menuItems} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: rgba(31, 31, 32, 0.9);
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`;
