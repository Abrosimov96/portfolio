import styled from 'styled-components';

export const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Skils</a>
        </li>
        <li>
          <a href="">Works</a>
        </li>
        <li>
          <a href="">Testimony</a>
        </li>
        <li>
          <a href="">Contacts</a>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`;
