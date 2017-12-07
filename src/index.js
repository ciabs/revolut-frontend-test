import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import 'normalize.css';
import App from './App';
import configureStore from './store/config.store';
import DevTools from './components/DevTools/DevTools';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
