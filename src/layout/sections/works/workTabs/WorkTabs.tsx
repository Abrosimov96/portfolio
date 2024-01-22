import { Link } from '../../../../componets/Link.styled';
import { S } from '../Works_Styles';

export type TabsStatusType = 'all' | 'landing page' | 'react' | 'spa';

export type WorkTabsPropsType = {
  items: Array<{
    status: TabsStatusType;
    title: string;
  }>;
  currentStatus: TabsStatusType;
  onChangeTab: (status: TabsStatusType) => void;
};

export const WorkTabs = (props: WorkTabsPropsType) => {
  return (
    <S.WorksNav>
      <ul>
        {props.items.map((item, index) => (
          <S.ListItem key={index}>
            <Link
              active={props.currentStatus === item.status}
              as={'button'}
              onClick={() => {
                props.onChangeTab(item.status);
              }}>
              {item.title}
            </Link>
          </S.ListItem>
        ))}
      </ul>
    </S.WorksNav>
  );
};
