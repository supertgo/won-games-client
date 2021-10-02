import MediaMatch from 'components/MediaMatch';
import Heading from 'components/Heading';
import { Apple, Windows, Linux } from '@styled-icons/fa-brands';

import * as S from './styles';

type Plataform = 'windows' | 'linux' | 'mac';
type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18';

export type GameDetailsProps = {
  developer: string;
  plataforms: Plataform[];
  releaseDate: string;
  rating: Rating;
  genres: string[];
};

const GameDetails = ({
  developer,
  plataforms,
  releaseDate,
  rating,
  genres
}: GameDetailsProps) => {
  const PlataformsIcons = {
    mac: <Apple title="mac" size={18} />,
    linux: <Linux title="linux" size={18} />,
    windows: <Windows title="windows" size={18} />
  };

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="medium">
        <Heading lineLeft lineColor="secondary">
          Game Details
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Title>Developer</S.Title>
          <S.Description>{developer}</S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Release Date</S.Title>
          <S.Description>
            {new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).format(new Date(releaseDate))}
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Plataforms</S.Title>
          <S.IconsWrapper>
            {plataforms.map((icon: Plataform) => (
              <S.Icon key={icon}>{PlataformsIcons[icon]}</S.Icon>
            ))}
          </S.IconsWrapper>
        </S.Block>

        <S.Block>
          <S.Title>Publisher</S.Title>
          <S.Description>2K</S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Ratings</S.Title>
          <S.Description>
            {rating === 'BR0' ? 'FREE' : `${rating.slice(2)}+`}
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Genres</S.Title>
          <S.Description>{genres.join(' / ')}</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  );
};

export default GameDetails;
