import styled from 'styled-components';
import { FlexWrapper } from '../../../componets/FlexWrapper';
import { SectionTitle } from '../../../componets/SectionTitle';
import { Work } from './work/Work';
import socialImg from '../../../assets/images/proj-1.webp';
import timerImg from '../../../assets/images/proj-2.webp';
import { Container } from '../../../componets/Container';
import { WorksNav } from './worksNav/WorksNav';

const worksItems = ['all', 'landing page', 'react', 'spa'];

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <WorksNav items={worksItems} />
        <FlexWrapper
          justify="space-between"
          wrap="wrap"
          align="flex-start">
          <Work
            title="Social Network"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore."
            src={socialImg}
          />
          <Work
            title="Timer"
            text="Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim."
            src={timerImg}
          />
        </FlexWrapper>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  ${FlexWrapper} {
    gap: 30px;
  }
`;
