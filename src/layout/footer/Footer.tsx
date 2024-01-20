import { FlexWrapper } from '../../componets/FlexWrapper';
import { Icon } from '../../componets/icon/Icon';
import { S } from './Footer_Styles';

const socialItemsData = [
  {
    iconId: 'instagram',
  },
  {
    iconId: 'telegram',
  },
  {
    iconId: 'vk',
  },
  {
    iconId: 'linkedIn',
  },
];

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <FlexWrapper direction={'column'} align={'center'}>
        <S.Name>Anton</S.Name>
        <S.SocialList>
          {socialItemsData.map((data) => (
            <S.SocialItem>
              <S.SocialLink>
                <Icon
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  iconId={data.iconId}
                />
              </S.SocialLink>
            </S.SocialItem>
          ))}
        </S.SocialList>
        <S.Copyright>
          © 2023 Svetlana Dyablo, All Rights Reserved.
        </S.Copyright>
      </FlexWrapper>
    </S.Footer>
  );
};
