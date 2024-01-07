import styled from 'styled-components';
import { Container } from '../../../componets/Container';
import { FlexWrapper } from '../../../componets/FlexWrapper';
import { SectionTitle } from '../../../componets/SectionTitle';
import { Skill } from './skill/Skill';

export const Skills = () => {
  return (
    <StyledSection>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap="wrap" justify="space-between">
          <Skill
            iconId={'html'}
            title={'html5'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
            }
          />
          <Skill
            iconId={'css'}
            title={'css3'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
            }
          />
          <Skill
            iconId={'react'}
            title={'react'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
            }
          />
          <Skill
            iconId={'typescript'}
            title={'typesript'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
            }
          />
          <Skill
            iconId={'styledComponents'}
            title={'styled components'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
            }
          />
          <Skill
            iconId={'figma'}
            title={'web design'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
            }
          />
        </FlexWrapper>
      </Container>
    </StyledSection>
  );
};

const StyledSection = styled.section``;
