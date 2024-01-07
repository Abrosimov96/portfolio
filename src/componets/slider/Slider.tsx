import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { FlexWrapper } from '../FlexWrapper';

export const Slider = () => {
  return (
    <StyledSlider>
      <FlexWrapper>
        <Slide>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatem iure, dolorum necessitatibus rerum perferendis
            voluptatibus sunt aperiam pariatur id odio ex est laborum,
            aspernatur delectus laudantium ab ipsam accusamus enim.
          </Text>
          <Name>@Ivan Ivanov</Name>
        </Slide>
      </FlexWrapper>
      <Pagination>
        <span></span>
        <span className="active"></span>
        <span></span>
      </Pagination>
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Slide = styled.div`
  text-align: center;
`;

const Text = styled.p``;

const Name = styled.span`
  display: inline-block;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 22px 0 42px;
`;

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.5);
    cursor: pointer;

    & + span {
      margin-left: 5px;
    }

    &.active {
      width: 20px;
      background-color: ${theme.colors.accent};
    }
  }
`;
