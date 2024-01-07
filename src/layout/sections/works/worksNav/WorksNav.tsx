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
    gap: 20px;
    justify-content: center;
  }
  margin-bottom: 40px;
`;

const ListItem = styled.li``;
