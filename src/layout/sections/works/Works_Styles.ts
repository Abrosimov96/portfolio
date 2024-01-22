import styled from 'styled-components';
import { Button } from '../../../componets/Button';
import { FlexWrapper } from '../../../componets/FlexWrapper';
import { Link } from '../../../componets/Link.styled';
import { theme } from '../../../styles/Theme';

// Works
const Works = styled.section`
  position: relative;
  ${FlexWrapper} {
    gap: 30px;
  }
`;

// Work

const Work = styled.div`
  background-color: ${theme.colors.secondaryBg};
  width: 330px;

  flex-grow: 1;

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }

  @media ${theme.media.desktop} {
    max-width: 540px;
  }
`;

const Description = styled.div`
  padding: 25px;
`;

const Overlay = styled.div`
  position: relative;

  ${Button} {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &::before {
      width: 100%;
      height: 100%;
    }
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
    opacity: 0;
  }

  &:hover {
    &::before {
      opacity: 1;
    }
    ${Button} {
      opacity: 1;
    }
  }

  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }
    ${Button} {
      opacity: 1;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

const Title = styled.h3``;

const Text = styled.p`
  margin: 14px 0 10px;
`;

// Work Nav
const WorksNav = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    margin: 0 auto 40px;
  }
`;

const ListItem = styled.li``;

export const S = {
  Works,
  Work,
  Description,
  Overlay,
  Image,
  Title,
  Text,
  WorksNav,
  ListItem,
};
