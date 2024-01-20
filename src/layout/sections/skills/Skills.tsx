import { Container } from '../../../componets/Container';
import { FlexWrapper } from '../../../componets/FlexWrapper';
import { SectionTitle } from '../../../componets/SectionTitle';
import { Skill } from './skill/Skill';
import { S } from './Skills_Styles';

const skillItems = [
  {
    iconId: 'html',
    title: 'html5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
  {
    iconId: 'css',
    title: 'css3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
  {
    iconId: 'react',
    title: 'react',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
  {
    iconId: 'typescript',
    title: 'typescript',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
  {
    iconId: 'styledComponents',
    title: 'Styled Components',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
  {
    iconId: 'figma',
    title: 'web design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
];

export const Skills = () => {
  return (
    <S.Skills>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap="wrap" justify="space-between">
          {skillItems.map((item) => (
            <Skill
              key={item.iconId}
              iconId={item.iconId}
              title={item.title}
              description={item.description}
            />
          ))}
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
};
