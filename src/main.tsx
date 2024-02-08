import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import { GlobalStyle } from './styles/globalStyles.ts';
import { ManagedUIContext } from './styles/uiContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ManagedUIContext>
      <GlobalStyle />
      <App />
    </ManagedUIContext>
  </React.StrictMode>
);
