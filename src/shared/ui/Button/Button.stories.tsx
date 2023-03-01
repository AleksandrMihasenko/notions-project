import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

export default {
  title: 'share/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text primary',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text clear',
  theme: ThemeButton.CLEAR,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text outline dark',
  theme: ThemeButton.OUTLINE,
};
Primary.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineLight = Template.bind({});
OutlineLight.args = {
  children: 'Text outline light',
  theme: ThemeButton.OUTLINE,
};
