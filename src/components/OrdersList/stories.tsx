import { Story, Meta } from '@storybook/react';
import OrdersList, { OrdersListProps } from '.';
import mockOrders from './mock';

export default {
  title: 'Profile/OrdersList',
  component: OrdersList,
  args: {
    items: mockOrders
  }
} as Meta;

export const Default: Story<OrdersListProps> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <OrdersList {...args} />
  </div>
);
