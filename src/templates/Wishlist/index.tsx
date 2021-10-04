import Base from 'templates/Base';
import Heading from 'components/Heading';
import Showcase from 'components/Showcase';
import GameCard from 'components/GameCard';
import { Container } from 'components/Container';
import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';
import { Grid } from 'components/Grid';
import { Divider } from 'components/Divider';

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

      <Grid>
        {games?.map((game, index) => (
          <GameCard key={`wishlist-${index}`} {...game} />
        ))}
      </Grid>
      <Divider />
    </Container>

    <Showcase
      title="You may like these games"
      highlight={recommendedHighlight}
      games={recommendedGames}
    />
  </Base>
);

export default Wishlist;
