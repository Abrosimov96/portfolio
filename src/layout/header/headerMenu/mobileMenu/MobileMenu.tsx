import React from 'react';
import { S } from '../HeaderMenu_Styles';

import { Menu } from '../menu/Menu';

type MobileMenuPropsType = {
  items: string[];
};

export const MobileMenu: React.FC<MobileMenuPropsType> = (
  props: MobileMenuPropsType,
) => {
  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={false}>
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopUp isOpen={false}>
        <Menu items={props.items} />
      </S.MobileMenuPopUp>
    </S.MobileMenu>
  );
};
