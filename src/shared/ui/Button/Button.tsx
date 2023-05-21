import {
  type ButtonHTMLAttributes, type FC, memo, ReactNode,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum SizeButton {
  M = 'size_m',

  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  size?: SizeButton;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme,
    square,
    disabled,
    size = SizeButton.M,
    ...otherProps
  } = props;

  const mods: Record<string, boolean | string | undefined> = {
    [classes[theme ?? '']]: true,
    [classes.square]: square,
    [classes[size]]: true,
    [classes.disabled]: disabled,
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={classNames(classes.Button, [className as string], mods)}
      {...otherProps}
    >
      {children}
    </button>
  );
});
