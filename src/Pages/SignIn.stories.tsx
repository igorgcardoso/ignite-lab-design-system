import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import SignIn from './SignIn';

export default {
  title: 'Pages/Sign in',
  component: SignIn,
  args: {},
  argTypes: {}
} as Meta;

export const Default: StoryObj = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(canvas.getByPlaceholderText("Digite seu e-mail"), 'igorgcardoso7@gmail.com');
    userEvent.type(canvas.getByPlaceholderText("********"), '123456789');

    userEvent.click(canvas.getByRole('button'));
  }
};
