import { createRoot } from 'react-dom/client';
import { StoreProvider } from 'app/providers/StoreProvider';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import ThemeProvider from 'app/providers/ThemeProvider/ui/ThemeProvider';
import App from './app/App';

import 'shared/config/i18n/i18n';

import 'app/styles/index.scss';

const container = document.getElementById('root');
const root = createRoot(container!);


root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
);
