import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import { serviceWorker } from './mock/browser.ts';
import { GlobalStyle } from './styles/globalStyles.ts';
import { ManagedUIContext } from './styles/uiContext.tsx';

const mock = async () => {
  await serviceWorker.start();
};

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root')!);

mock().then(() => {
  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ManagedUIContext>
            <GlobalStyle />
            <App />
          </ManagedUIContext>
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
  );
});
