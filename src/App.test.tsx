import { render, screen } from '@testing-library/react';
import Search from './components/search/search';
import { Provider } from 'react-redux';
import { store } from './store';

describe('App', () => {
  test('should render search', async () => {
    render(<Provider store={store}><Search /></Provider>);

    expect(await screen.findByText('LINEAR-MUSIC')).toBeInTheDocument();

    screen.debug();
  })
})

