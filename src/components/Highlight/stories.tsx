import { Story, Meta } from '@storybook/react';
import Highlight, { HighlightProps } from '.';

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead is Back',
    subtitle: 'Come see John´s new adventures',
    buttonLabel: 'Buy now',
    buttonLink: 'dawda'
  }
} as Meta;

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />;
