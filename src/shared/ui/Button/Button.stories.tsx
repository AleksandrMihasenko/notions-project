import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, SizeButton, ThemeButton } from './Button';

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

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'Text clear',
  theme: ThemeButton.CLEAR_INVERTED,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text outline dark',
  theme: ThemeButton.OUTLINE,
};
Primary.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineDarkSizeXL = Template.bind({});
OutlineDarkSizeXL.args = {
  children: 'Text outline dark',
  theme: ThemeButton.OUTLINE,
  size: SizeButton.XL,
};
Primary.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineLight = Template.bind({});
OutlineLight.args = {
  children: 'Text outline light',
  theme: ThemeButton.OUTLINE,
};

export const OutlineLightSizeXL = Template.bind({});
OutlineLightSizeXL.args = {
  children: 'Text outline light',
  theme: ThemeButton.OUTLINE,
  size: SizeButton.XL,
};

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
  children: 'Text outline dark',
  theme: ThemeButton.BACKGROUND,
};

export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
  children: 'Text outline light',
  theme: ThemeButton.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
  children: '>',
  theme: ThemeButton.BACKGROUND_INVERTED,
  square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: '>',
  theme: ThemeButton.BACKGROUND_INVERTED,
  square: true,
  size: SizeButton.L,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
  children: '>',
  theme: ThemeButton.BACKGROUND_INVERTED,
  square: true,
  size: SizeButton.XL,
};
