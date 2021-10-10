import GamesTemplate, { GamesTemplateProps } from 'templates/GamesTemplate';
import gamesMock from 'components/GameCardSlider/mock';
import sidebarMock from 'components/ExploreSidebar/mock';

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />;
}

export async function getServerSideProps() {
  return {
    props: {
      games: gamesMock,
      filterItems: sidebarMock
    }
  };
}
