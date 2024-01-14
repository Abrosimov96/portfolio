import styled from 'styled-components';
import { FlexWrapper } from '../../../../componets/FlexWrapper';
import { Icon } from '../../../../componets/icon/Icon';
import { IconWrapper } from '../../../../componets/IconWrapper.styled';
import { theme } from '../../../../styles/Theme';

type SkillPropsType = {
  iconId: string;
  title: string;
  description: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <FlexWrapper direction="column" align="center">
        <IconWrapper>
          <Icon iconId={props.iconId} />
        </IconWrapper>
        <SkillTitle>{props.title}</SkillTitle>
        <SkillText>{props.description}</SkillText>
      </FlexWrapper>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 330px;
  flex-grow: 1;
  padding: 62px 20px 40px;

  @media ${theme.media.mobile} {
    padding: 62px 0 40px;
  }
`;

const SkillTitle = styled.h3`
  text-transform: uppercase;
  margin: 70px 0 15px;
`;

const SkillText = styled.p`
  text-align: center;
`;
