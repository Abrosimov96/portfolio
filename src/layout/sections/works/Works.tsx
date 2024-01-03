import styled from 'styled-components';
import { FlexWrapper } from '../../../componets/FlexWrapper';
import { Nav } from '../../../componets/nav/Nav';
import { SectionTitle } from '../../../componets/SectionTitle';
import { Work } from './work/Work';
import socialImg from '../../../assets/images/proj-1.webp';
import timerImg from '../../../assets/images/proj-2.webp';

const worksItems = ['all', 'landing page', 'react', 'spa'];

export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>My Works</SectionTitle>
      <Nav items={worksItems} />
      <FlexWrapper justify="space-around">
        <Work
          title="Social Network"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
          src={socialImg}
        />
        <Work
          title="Timer"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
          src={timerImg}
        />
      </FlexWrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: #deefff;
`;
