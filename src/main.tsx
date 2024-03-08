import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import { GlobalStyle } from './styles/globalStyles.ts';
import { ManagedUIContext } from './styles/uiContext.tsx';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ManagedUIContext>
        <GlobalStyle />
        <App />
      </ManagedUIContext>
    </BrowserRouter>
  </QueryClientProvider>
);
