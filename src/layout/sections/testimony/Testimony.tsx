import styled from 'styled-components';
import { FlexWrapper } from '../../../componets/FlexWrapper';
import { Icon } from '../../../componets/icon/Icon';
import { IconWrapper } from '../../../componets/IconWrapper.styled';
import { SectionTitle } from '../../../componets/SectionTitle';
import { Slider } from '../../../componets/slider/Slider';

export const Testimony = () => {
  return (
    <StykedTestimone>
      <SectionTitle>Testimony</SectionTitle>
      <FlexWrapper direction="column" align={'center'}>
        <IconWrapper>
          <Icon iconId={'quote'} />
        </IconWrapper>
        <Slider />
      </FlexWrapper>
    </StykedTestimone>
  );
};

const StykedTestimone = styled.section`
  ${IconWrapper} {
    margin: 32px 0 72px;
  }
`;
