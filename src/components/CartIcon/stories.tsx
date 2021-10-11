import { Story, Meta } from '@storybook/react';
import CartIcon, { CartIconProps } from '.';

export default {
  title: 'CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta;

export const Default: Story<CartIconProps> = (args) => <CartIcon {...args} />;

export const WithItems: Story<CartIconProps> = (args) => <CartIcon {...args} />;

WithItems.args = {
  quantity: 12
};
