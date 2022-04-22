import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchEngine from './theme/searchEngine';

test('renders Search Engine', () => {
  render(<SearchEngine />);

  userEvent.type(screen.getByRole('textbox', {
    name: /search/i
  }))
  userEvent.click(screen.getByRole('button', {
    name: /search/i
  }))
  
  screen.debug();
});
