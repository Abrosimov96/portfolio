import styled from 'styled-components';
import { Button } from '../../../componets/Button';
import { Container } from '../../../componets/Container';
import { FlexWrapper } from '../../../componets/FlexWrapper';
import { SectionTitle } from '../../../componets/SectionTitle';

export const Slogan = () => {
  return (
    <StyledSlogan>
      <Container>
        <FlexWrapper direction="column" align="center">
          <SectionTitle>I Am Availlable For Fleelance</SectionTitle>
          <Button>hire me</Button>
        </FlexWrapper>
      </Container>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section``;
