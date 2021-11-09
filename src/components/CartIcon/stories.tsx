import { Story, Meta } from '@storybook/react';
import CartIcon from '.';

export default {
  title: 'CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta;

export const Default: Story = (args) => <CartIcon {...args} />;

export const WithItems: Story = (args) => <CartIcon {...args} />;

WithItems.args = {
  quantity: 12
};
