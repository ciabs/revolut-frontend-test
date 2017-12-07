import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import 'normalize.css';
import 'font-awesome/css/font-awesome.css';

import App from './App';
import configureStore from './store/config.store';
import DevTools from './components/DevTools/DevTools';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
