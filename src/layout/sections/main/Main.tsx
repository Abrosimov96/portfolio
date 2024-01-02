import styled from 'styled-components';
import photo from '../../../assets/images/photo.jpg';
import { FlexWrapper } from '../../../componets/FlexWrapper';

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper justify="space-around" align="center">
        <div>
          <span>Hi There</span>
          <h2>I am Anton Abrosimov</h2>
          <h1>A Web Developer.</h1>
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
