import { Button } from '../../../../componets/Button';
import { Link } from '../../../../componets/Link.styled';
import { S } from '../Works_Styles';

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
};

export const Work: React.FC<WorkPropsType> = (
  props: WorkPropsType,
) => {
  return (
    <S.Work>
      <S.Overlay>
        <S.Image src={props.src} alt="" />
        <Button>View Project</Button>
      </S.Overlay>
      <S.Description>
        <S.Title>{props.title}</S.Title>
        <S.Text>{props.text}</S.Text>
        <Link href={'#'}>demo</Link>
        <Link href={'#'}>code</Link>
      </S.Description>
    </S.Work>
  );
};
