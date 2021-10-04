import Base from 'templates/Base';
import { Container } from 'components/Container';
import Heading from 'components/Heading';
import Showcase from 'components/Showcase';
import GameCard from 'components/GameCard';
import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';

//import * as S from './styles';

export type WishlistTemplateProps = {
  games?: GameCardProps[];
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
};

const Wishlist = ({
  games,
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      {games?.map((game, index) => (
        <GameCard key={`wishlist-${index}`} {...game} />
      ))}
    </Container>

    <Showcase
      title="You may like these games"
      highlight={recommendedHighlight}
      games={recommendedGames}
    />
  </Base>
);

export default Wishlist;
