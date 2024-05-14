import './setup';

// import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from '../App';
import { render } from './styled-render';

describe('Render', () => {
  test('Renders main element', () => {
    render(<App />, { wrapper: BrowserRouter });
    // const mainElement = screen.getByRole('main');
    // expect(mainElement).toBeInTheDocument();
  });
});
