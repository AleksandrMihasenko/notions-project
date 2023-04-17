import { type ButtonHTMLAttributes, type FC } from 'react';
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
}

export const Button: FC<ButtonProps> = (props) => {
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
};
