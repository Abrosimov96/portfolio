import styled from 'styled-components';
import { Logo } from '../../componets/logo/Logo';
import { Nav } from '../../componets/nav/Nav';

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
      <Logo />
      <Nav items={menuItems} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #ededed;
  display: flex;
  justify-content: space-between;
`;
