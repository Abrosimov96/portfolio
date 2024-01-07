import styled from 'styled-components';
import { FlexWrapper } from '../../componets/FlexWrapper';
import { Icon } from '../../componets/icon/Icon';
import { theme } from '../../styles/Theme';

export const Footer = () => {
  return (
    <SlyledFooter>
      <FlexWrapper direction={'column'} align={'center'}>
        <Name>Anton</Name>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon
                width="21px"
                height="21px"
                viewBox="0 0 21px 21px"
                iconId={'instagram'}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                width="21px"
                height="21px"
                viewBox="0 0 21px 21px"
                iconId={'telegram'}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                width="21px"
                height="21px"
                viewBox="0 0 21px 21px"
                iconId={'vk'}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                width="21px"
                height="21px"
                viewBox="0 0 21 21"
                iconId={'linkedIn'}
              />
            </SocialLink>
          </SocialItem>
        </SocialList>
        <Copyright>
          © 2023 Svetlana Dyablo, All Rights Reserved.
        </Copyright>
      </FlexWrapper>
    </SlyledFooter>
  );
};

const SlyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
`;

const Name = styled.span`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 3px;
`;

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0 30px;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${theme.colors.accent};

  &:hover {
    background-color: ${theme.colors.accent};
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
  }
`;

const Copyright = styled.small`
  color: ${theme.colors.borderColor};
  font-size: 12px;
  font-weight: 400;
`;
