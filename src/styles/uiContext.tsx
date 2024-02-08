import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { themeStore } from '@/stores';

import { darkTheme, lightTheme } from './theme';

export const ManagedUIContext = ({ children }: { children: ReactNode }) => {
  const { isDarkMode } = themeStore();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};
