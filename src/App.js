import React, { PureComponent } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from './routes/Dashboard';

import TopAppBar from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';

class App extends PureComponent {
  render() {
    return (
      <section style={{ display: 'inline-flex' }}>
        <nav className="mdc-drawer mdc-drawer--permanent mdc-typography">
          <div className="mdc-drawer__toolbar-spacer">
            Admin
          </div>
          <div className="mdc-drawer__content">
            <nav id="icon-with-text-demo" className="mdc-list">
              <a className="mdc-list-item mdc-list-item--activated" href="#">
                <i className="material-icons mdc-list-item__graphic" aria-hidden="true">inbox</i>Inbox
              </a>
              <a className="mdc-list-item" href="#">
                <i className="material-icons mdc-list-item__graphic" aria-hidden="true">star</i>Star
              </a>
            </nav>
          </div>
        </nav>
      <div>
        <TopAppBar
          className='mdc-top-app-bar--fixed mdc-top-app-bar--dense'
          navigationIcon={<MaterialIcon
            icon='menu'
            onClick={() => console.log('click')}
          />}
        />
        <BrowserRouter>
          <Route path='/dashboard' component={Dashboard} />
        </BrowserRouter>
      </div>
      </section>
    );
  }
}

export default App;
