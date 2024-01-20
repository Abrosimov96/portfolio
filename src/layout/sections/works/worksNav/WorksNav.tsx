import { Link } from '../../../../componets/Link.styled';
import { S } from '../Works_Styles';

type WorksNavPropsType = {
  items: string[];
};

export const WorksNav = (props: WorksNavPropsType) => {
  return (
    <S.WorksNav>
      <ul>
        {props.items.map((item, index) => (
          <S.ListItem key={index}>
            <Link href={`#${item}`}>{item}</Link>
          </S.ListItem>
        ))}
      </ul>
    </S.WorksNav>
  );
};
