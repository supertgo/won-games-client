import { Story, Meta } from '@storybook/react';
import Empty, { EmptyProps } from '.';

export default {
  title: 'Empty',
  component: Empty,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta;

export const Default: Story<EmptyProps> = (args) => <Empty {...args} />;

Default.args = {
  title: 'title',
  description: 'descpription'
};
