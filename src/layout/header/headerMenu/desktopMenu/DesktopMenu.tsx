import { S } from '../HeaderMenu_Styles';
import { Menu } from '../menu/Menu';

type DesktopMenuPropsType = {
  items: string[];
};

export const DesktopMenu: React.FC<DesktopMenuPropsType> = (
  props: DesktopMenuPropsType,
) => {
  return (
    <S.DesktopMenu>
      <Menu items={props.items} />
    </S.DesktopMenu>
  );
};
