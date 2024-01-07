import styled from 'styled-components';
import { theme } from '../styles/Theme';

export const Link = styled.a`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;

  position: relative;
  z-index: 0;

  &::before {
    content: '';
    display: inline-block;
    background-color: ${theme.colors.accent};

    position: absolute;
    top: 50%;
    transform: translateY(50%);
    left: 0;
    right: 0;
    z-index: -1;
  }

  &:hover {
    &::before {
      height: 10px;
    }
  }
`;
