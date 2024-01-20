import { useEffect, useState } from 'react';
import { Container } from '../../componets/Container';
import { FlexWrapper } from '../../componets/FlexWrapper';
import { Logo } from '../../componets/logo/Logo';
import { DesktopMenu } from './headerMenu/desktopMenu/DesktopMenu';
import { MobileMenu } from './headerMenu/mobileMenu/MobileMenu';

import { S } from './Header_Styles';

const menuItems = [
  'Home',
  'Skills',
  'Works',
  'Testimony',
  'Contacts',
];

export const Header: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () =>
      window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <S.Header>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          {width < breakpoint ? (
            <MobileMenu items={menuItems} />
          ) : (
            <DesktopMenu items={menuItems} />
          )}
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
