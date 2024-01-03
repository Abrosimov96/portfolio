import styled from 'styled-components';

type NavPropsType = {
  items: string[];
};

export const Nav = (props: NavPropsType) => {
  return (
    <StyledNav>
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>
            <a href="#">{item.toUpperCase()}</a>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`;
