import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Story } from '@storybook/react';
import 'app/styles/index.scss';

export const RouterDecorator = (story: () => Story) => {
  return (
    <BrowserRouter>
      {story() as unknown as ReactNode}
    </BrowserRouter>
  )
};
