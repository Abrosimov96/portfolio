import photo from '../../../assets/images/photo.jpg';
import { Container } from '../../../componets/Container';
import { FlexWrapper } from '../../../componets/FlexWrapper';
import { S } from './Main_Styles';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

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
            <S.MainTitle>
              <p>A Web Developer.</p>
              <Typewriter
                options={{
                  strings: ['A Web Developer.'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </S.MainTitle>
          </div>
          <Tilt>
            <S.PhotoWrapper>
              <S.Photo src={photo} alt="Photo" />
            </S.PhotoWrapper>
          </Tilt>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
