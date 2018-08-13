import React, { PureComponent } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from './routes/Dashboard';

import TopAppBar from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';

class App extends PureComponent {
  render() {
    return (
      <section style={{}}>
        <TopAppBar
          title='Admin'
          className='mdc-top-app-bar--fixed mdc-top-app-bar--dense'
          navigationIcon={<MaterialIcon
            icon='menu'
            onClick={() => console.log('click')}
          />}
        />
        <BrowserRouter>
          <Route path='/dashboard' component={Dashboard} />
        </BrowserRouter>
      </section>
    );
  }
}

export default App;
