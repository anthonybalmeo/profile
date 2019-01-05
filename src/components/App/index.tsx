import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import './index.css';
import HomePage from '../HomePage'
import TestComponent from '../TestComponent'
import NotFoundPage from '../NotFoundPage'
import store, { history } from '../../store'


export const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className='ui-bg__paper--lightest'>
          <main>
            <Switch>
              <Route exact={true} path='/' component={HomePage} />
              <Route exact={true} path='/test/' component={TestComponent} />
              <Route component={NotFoundPage} />
            </Switch>
          </main>
        </div>
      </Router>
    </Provider>
  )
}

export default App;
