import { FlexWrapper } from '../../../../componets/FlexWrapper';
import { Icon } from '../../../../componets/icon/Icon';
import { IconWrapper } from '../../../../componets/IconWrapper.styled';
import { S } from '../Skills_Styles';

type SkillPropsType = {
  iconId: string;
  title: string;
  description: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <S.Skill>
      <FlexWrapper direction="column" align="center">
        <IconWrapper>
          <Icon iconId={props.iconId} />
        </IconWrapper>
        <S.SkillTitle>{props.title}</S.SkillTitle>
        <S.SkillText>{props.description}</S.SkillText>
      </FlexWrapper>
    </S.Skill>
  );
};
