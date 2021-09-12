import * as S from './styles';

export type RibbonColors = 'primary' | 'secondary';
export type RibbonSizes = 'normal' | 'small';

export type RibbonProps = {
  size?: RibbonSizes;
  color?: RibbonColors;
  children: React.ReactNode;
};

const Ribbon = ({
  size = 'normal',
  color = 'primary',
  children
}: RibbonProps) => (
  <S.Wrapper size={size} color={color}>
    {children}
  </S.Wrapper>
);

export default Ribbon;
