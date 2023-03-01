import { type ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { type Story } from '@storybook/react';
import 'app/styles/index.scss';

export const RouterDecorator = (story: () => Story) => (
  <BrowserRouter>
    {story() as unknown as ReactNode}
  </BrowserRouter>
);
