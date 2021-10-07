import { Story, Meta } from '@storybook/react';
import PaymentOptions, { PaymentOptionsProps } from '.';

import cardsMock from './mock';

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: cardsMock
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    handlePayment: {
      action: 'clicked'
    }
  }
} as Meta;

export const Default: Story<PaymentOptionsProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 400 }}>
    <PaymentOptions {...args} />
  </div>
);

export const WithNoCards: Story<PaymentOptionsProps> = () => (
  <div style={{ padding: 16, maxWidth: 400 }}>
    <PaymentOptions handlePayment={() => ({})} />
  </div>
);
