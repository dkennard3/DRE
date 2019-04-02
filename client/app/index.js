import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from '../rootReducer';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';
import Home from './components/Home/Home';
import HelloWorld from './components/HelloWorld/HelloWorld';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import rootReducer from '../rootReducer';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

render((
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/helloworld" component={HelloWorld} />
          <Route component={NotFound} />
        </Switch>
      </App>
    </Router>
  </Provider>
), document.getElementById('app'));
