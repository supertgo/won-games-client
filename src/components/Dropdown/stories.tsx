import Dropdown, { DropdownProps } from '.';

import { Story, Meta } from '@storybook/react';

export default {
  title: 'Dropdown',
  component: Dropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta;

export const Default: Story<DropdownProps> = (args) => <Dropdown {...args} />;

Default.args = {
  title: 'Cilck Here',
  children: 'Content'
};
