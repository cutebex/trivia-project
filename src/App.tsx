import { Provider } from 'react-redux';
import routes from './router'
import renderRoutes from './router/BaseRouter';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      {renderRoutes(routes)}
    </Provider>
  );
}

export default App;
