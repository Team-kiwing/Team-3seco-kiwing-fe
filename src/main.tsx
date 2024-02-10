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

const root = ReactDOM.createRoot(document.getElementById('root')!);

mock().then(() => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <ManagedUIContext>
          <GlobalStyle />
          <App />
        </ManagedUIContext>
      </BrowserRouter>
    </React.StrictMode>
  );
});
