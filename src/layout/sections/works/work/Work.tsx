import styled from 'styled-components';
import { Button } from '../../../../componets/Button';
import { Link } from '../../../../componets/Link.styled';
import { theme } from '../../../../styles/Theme';

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
};

export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <Overlay>
        <Image src={props.src} alt="" />
        <Button>View Project</Button>
      </Overlay>
      <Description>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <Link href={'#'}>demo</Link>
        <Link href={'#'}>code</Link>
      </Description>
    </StyledWork>
  );
};

const StyledWork = styled.div`
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
