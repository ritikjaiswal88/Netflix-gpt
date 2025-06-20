import Body from './components/Body.js';
import React from 'react';
import { Provider } from 'react-redux';
import appStore from './utils/appStore.js';

function App() {
  return (
    <React.StrictMode>
     <Provider store={appStore}>
      <Body/>
     </Provider>
    </React.StrictMode>
  );
}

export default App;

