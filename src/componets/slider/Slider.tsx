import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../styles/slider.css';
import { S } from './Slider_Styles';

type SlidePropsType = {
  text: string;
  name: string;
};

const Slide = (props: SlidePropsType) => {
  return (
    <S.Slide>
      <S.Text>{props.text}</S.Text>
      <S.Name>@{props.name}</S.Name>
    </S.Slide>
  );
};

const items = [
  <Slide
    text={
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptatem iure, dolorum necessitatibus rerum perferendisvoluptatibus sunt aperiam pariatur id odio ex est laborum,aspernatur delectus laudantium ab ipsam accusamus enim.'
    }
    name={'Ivan Ivanov'}
  />,
  <Slide
    text={
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptatem iure, dolorum necessitatibus rerum perferendisvoluptatibus sunt aperiam pariatur id odio ex est laborum,aspernatur delectus laudantium ab ipsam accusamus enim.'
    }
    name={'Ivan Ivanov'}
  />,
  <Slide
    text={
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptatem iure, dolorum necessitatibus rerum perferendisvoluptatibus sunt aperiam pariatur id odio ex est laborum,aspernatur delectus laudantium ab ipsam accusamus enim.'
    }
    name={'Ivan Ivanov'}
  />,
];

export const Slider = () => (
  <S.Slider>
    <AliceCarousel mouseTracking items={items} />
  </S.Slider>
);
