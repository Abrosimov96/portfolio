import styled from 'styled-components';
import { Container } from '../../../componets/Container';
import { FlexWrapper } from '../../../componets/FlexWrapper';
import { Icon } from '../../../componets/icon/Icon';
import { IconWrapper } from '../../../componets/IconWrapper.styled';
import { SectionTitle } from '../../../componets/SectionTitle';
import { Slider } from '../../../componets/slider/Slider';

export const Testimony: React.FC = () => {
  return (
    <StyledTestimony>
      <Container>
        <SectionTitle>Testimony</SectionTitle>
        <FlexWrapper direction="column" align={'center'}>
          <IconWrapper>
            <Icon iconId={'quote'} />
          </IconWrapper>
          <Slider />
        </FlexWrapper>
      </Container>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  position: relative;
  ${IconWrapper} {
    margin: 32px 0 72px;
  }
`;
