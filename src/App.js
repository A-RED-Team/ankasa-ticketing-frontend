import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import Router from './router';
import GlobalStyles from './assets/styles/GlobalStyles';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyles />
        <Router />
      </PersistGate>
    </Provider>
  );
}

export default App;
