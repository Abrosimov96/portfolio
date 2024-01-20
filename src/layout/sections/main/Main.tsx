import photo from '../../../assets/images/photo.jpg';
import { Container } from '../../../componets/Container';
import { FlexWrapper } from '../../../componets/FlexWrapper';
import { S } from './Main_Styles';

export const Main: React.FC = () => {
  return (
    <S.Main>
      <Container>
        <FlexWrapper
          justify="space-around"
          align="center"
          wrap="wrap">
          <div>
            <S.SmallText>Hi There</S.SmallText>
            <S.NameTitle>
              I am <span>Anton Abrosimov</span>
            </S.NameTitle>
            <S.MainTitle>A Web Developer.</S.MainTitle>
          </div>
          <S.PhotoWrapper>
            <S.Photo src={photo} alt="Photo" />
          </S.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
