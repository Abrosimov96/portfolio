import styled from 'styled-components';
import { FlexWrapper } from '../../../../componets/FlexWrapper';
import { Icon } from '../../../../componets/icon/Icon';
import { IconWrapper } from '../../../../componets/IconWrapper.styled';

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
  width: 380px;
  padding: 62px 20px 40px;
`;

const SkillTitle = styled.h3`
  text-transform: uppercase;
  margin: 70px 0 15px;
`;

const SkillText = styled.p`
  text-align: center;
`;
