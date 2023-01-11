import * as React from 'react';
import ReactDOM from 'react-dom/client';
import MainRouter from './components/MainRouter';
import { BrowserRouter } from 'react-router-dom';
import './components/sass/style.scss'
import { Provider } from 'react-redux';
import { setupStore } from './components/paths/redux/store';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  </Provider>
);
