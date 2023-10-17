import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import App from '../App';

test('renders the App component without errors', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
});
