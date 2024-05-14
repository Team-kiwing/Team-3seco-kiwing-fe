/* eslint-disable react-refresh/only-export-components */
import 'jest-styled-components';

import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

import { themeStore } from '@/stores';
import { darkTheme, lightTheme } from '@/styles/theme';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  const { isDarkMode } = themeStore();
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

const renderWithStyledComponent = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';

export { renderWithStyledComponent as render };
