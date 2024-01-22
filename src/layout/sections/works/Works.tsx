import { FlexWrapper } from '../../../componets/FlexWrapper';
import { SectionTitle } from '../../../componets/SectionTitle';
import { Work } from './work/Work';
import socialImg from '../../../assets/images/proj-1.webp';
import timerImg from '../../../assets/images/proj-2.webp';
import { Container } from '../../../componets/Container';
import { S } from './Works_Styles';
import { TabsStatusType, WorkTabs } from './workTabs/WorkTabs';
import { useState } from 'react';

// const tabsItems = ['all', 'landing page', 'react', 'spa'];

const tabsItems: Array<{
  status: TabsStatusType;
  title: string;
}> = [
  {
    title: 'all',
    status: 'all',
  },
  {
    title: 'landing page',
    status: 'landing page',
  },
  {
    title: 'react',
    status: 'react',
  },
  {
    title: 'spa',
    status: 'spa',
  },
];

const workData = [
  {
    title: 'Social Network',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
    src: socialImg,
    type: 'spa',
  },
  {
    title: 'Timer',
    text: 'Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.',
    src: timerImg,
    type: 'react',
  },
];

export const Works: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] =
    useState<TabsStatusType>('all');

  const [works, setWorks] = useState(workData);

  const onChangeFilterStatus = (status: TabsStatusType) => {
    if (status !== 'all') {
      setWorks(workData.filter((w) => w.type === status));
    } else {
      setWorks(workData);
    }
    setCurrentFilterStatus(status);
  };

  return (
    <S.Works>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <WorkTabs
          items={tabsItems}
          currentStatus={currentFilterStatus}
          onChangeTab={onChangeFilterStatus}
        />
        <FlexWrapper
          justify="space-between"
          wrap="wrap"
          align="flex-start">
          {works.map((work) => (
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
