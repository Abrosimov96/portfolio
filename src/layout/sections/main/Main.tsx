import styled from 'styled-components';
import photo from '../../../assets/images/photo.jpg';
import { Container } from '../../../componets/Container';
import { FlexWrapper } from '../../../componets/FlexWrapper';
import { font } from '../../../styles/Common';
import { theme } from '../../../styles/Theme';

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper
          justify="space-around"
          align="center"
          wrap="wrap">
          <div>
            <SmallText>Hi There</SmallText>
            <NameTitle>
              I am <span>Anton Abrosimov</span>
            </NameTitle>
            <MainTitle>A Web Developer.</MainTitle>
          </div>
          <PhotoWrapper>
            <Photo src={photo} alt="Photo" />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  margin-top: 65px;

  &::before {
    content: '';
    position: absolute;
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};
    top: -24px;
    left: 24px;
    z-index: -1;

    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
      top: -17px;
      left: 20px;
    }
  }
`;

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  margin-right: 20px;

  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`;

const SmallText = styled.span`
  font-size: 14px;
  font-weight: 400;
`;

const NameTitle = styled.h2`
  ${font({
    family: "'Josefin Sans', sans-serif",
    weight: 700,
    Fmax: 50,
    Fmin: 36,
  })}
  /* font-family: 'Josefin Sans', sans-serif;
  font-size: 50px;
  font-weight: 700; */
  letter-spacing: 2.5px;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;

    &::before {
      content: '';
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};

      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }

  @media ${theme.media.mobile} {
    margin: 15px 0 22px;
  }
`;

const MainTitle = styled.h1`
  ${font({
    Fmax: 27,
    Fmin: 20,
  })}
`;
