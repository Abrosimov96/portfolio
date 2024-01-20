import { FlexWrapper } from '../../../componets/FlexWrapper';
import { SectionTitle } from '../../../componets/SectionTitle';
import { Work } from './work/Work';
import socialImg from '../../../assets/images/proj-1.webp';
import timerImg from '../../../assets/images/proj-2.webp';
import { Container } from '../../../componets/Container';
import { WorksNav } from './worksNav/WorksNav';
import { S } from './Works_Styles';

const worksItems = ['all', 'landing page', 'react', 'spa'];

const workData = [
  {
    title: 'Social Network',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
    src: socialImg,
  },
  {
    title: 'Timer',
    text: 'Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.',
    src: timerImg,
  },
];

export const Works: React.FC = () => {
  return (
    <S.Works>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <WorksNav items={worksItems} />
        <FlexWrapper
          justify="space-between"
          wrap="wrap"
          align="flex-start">
          {workData.map((work) => (
            <Work
              title={work.title}
              text={work.text}
              src={work.src}
            />
          ))}
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
