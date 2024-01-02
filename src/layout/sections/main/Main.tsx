import styled from 'styled-components';
import photo from '../../../assets/images/photo.jpg';
import { FlexWrapper } from '../../../componets/FlexWrapper';

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper justify="space-around" align="center">
        <div>
          <span>Hi There</span>
          <NameTitle>I am Anton Abrosimov</NameTitle>
          <MainTitle>A Web Developer.</MainTitle>
        </div>
        <Photo src={photo} alt="Photo" />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #cbe188;
`;

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`;

const NameTitle = styled.h2``;

const MainTitle = styled.h1``;
