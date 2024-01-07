import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

type HeaderNavPropsType = {
  items: string[];
};

export const HeaderNav = (props: HeaderNavPropsType) => {
  return (
    <StyledHeaderNav>
      <ul>
        {props.items.map((item, index) => (
          <ListItem key={index}>
            <Link href={`#${item}`}>
              {item.toUpperCase()}
              <Mask>
                <span>{item.toUpperCase()}</span>
              </Mask>
              <Mask>
                <span>{item.toUpperCase()}</span>
              </Mask>
            </Link>
          </ListItem>
        ))}
      </ul>
    </StyledHeaderNav>
  );
};

const StyledHeaderNav = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`;

const Link = styled.a`
  text-align: center;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 30px;
  font-weight: 400;
  color: transparent;
`;

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  color: ${theme.colors.accent};
  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`;

const ListItem = styled.li`
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.accent};
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    transform: scale(0);
  }

  &:hover {
    &::before {
      transform: scale(1);
      cursor: pointer;
    }

    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      color: ${theme.colors.font};
      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }
  }
`;
