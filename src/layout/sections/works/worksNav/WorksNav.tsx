import styled from 'styled-components';
import { Link } from '../../../../componets/Link.styled';

type WorksNavPropsType = {
  items: string[];
};

export const WorksNav = (props: WorksNavPropsType) => {
  return (
    <StyledWorksNav>
      <ul>
        {props.items.map((item, index) => (
          <ListItem key={index}>
            <Link href={`#${item}`}>{item}</Link>
          </ListItem>
        ))}
      </ul>
    </StyledWorksNav>
  );
};

const StyledWorksNav = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    margin: 0 auto 40px;
  }
`;

const ListItem = styled.li``;
