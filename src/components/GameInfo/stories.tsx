import { Story, Meta } from '@storybook/react';
import { CartContextData } from 'hooks/use-cart';
import GameInfo, { GameInfoProps } from '.';
import mockGame from './mock';

export default {
  title: 'Game/GameInfo',
  component: GameInfo,
  args: mockGame,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta;

export const Default: Story<GameInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', padding: '1.5rem', margin: 'auto' }}>
    <GameInfo {...args} />
  </div>
);

export const isInCart: Story<GameInfoProps & CartContextData> = (args) => (
  <div style={{ maxWidth: '144rem', padding: '1.5rem', margin: 'auto' }}>
    <GameInfo {...args} />
  </div>
);

isInCart.args = {
  isInCart: () => true
};
