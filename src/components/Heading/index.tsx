import * as S from './styles';

export type LineColors = 'primary' | 'secondary';

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'black' | 'white';
  size?: 'small' | 'medium';
  lineColor?: LineColors;
  lineLeft?: boolean;
  lineBottom?: boolean;
};

const Heading = ({
  children,
  color = 'white',
  size = 'medium',
  lineColor = 'primary',
  lineLeft = false,
  lineBottom = false
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    size={size}
    lineColor={lineColor}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
  >
    {children}
  </S.Wrapper>
);

export default Heading;
