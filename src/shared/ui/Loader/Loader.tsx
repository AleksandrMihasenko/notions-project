import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
  className?: string
}

export const Loader: FC<LoaderProps> = ({ className }: LoaderProps) => (
  <div className={classNames('lds-default', [className as string])}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);
