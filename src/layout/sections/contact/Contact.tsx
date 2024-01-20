import { Button } from '../../../componets/Button';
import { Container } from '../../../componets/Container';
import { SectionTitle } from '../../../componets/SectionTitle';
import { S } from './Contact_Styles';

export const Contact: React.FC = () => {
  return (
    <S.Contact>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <S.Form>
          <S.Field placeholder={'Name'} />
          <S.Field placeholder={'Subject'} />
          <S.Field placeholder={'Message...'} as={'textarea'} />
          <Button type={'submit'}>Send Message</Button>
        </S.Form>
      </Container>
    </S.Contact>
  );
};
