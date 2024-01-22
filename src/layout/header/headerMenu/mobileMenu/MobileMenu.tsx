import React, { useState } from 'react';
import { S } from '../HeaderMenu_Styles';

import { Menu } from '../menu/Menu';

type MobileMenuPropsType = {
  items: string[];
};

export const MobileMenu: React.FC<MobileMenuPropsType> = (
  props: MobileMenuPropsType,
) => {
  const [isOpen, setIsOpen] = useState(false);

  const onBurgerBtnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.MobileMenu>
      <S.BurgerButton onClick={onBurgerBtnClick} isOpen={isOpen}>
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopUp
        onClick={() => setIsOpen(false)}
        isOpen={isOpen}>
        <Menu items={props.items} />
      </S.MobileMenuPopUp>
    </S.MobileMenu>
  );
};
