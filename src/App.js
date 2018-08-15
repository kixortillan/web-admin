import React, { PureComponent } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from './routes/Dashboard';
import TopAppBar from './components/TopAppBar';
import Drawer from './components/Drawer';
import routes from './config/routes';
import IconImg from './components/IconImg';

class App extends PureComponent {
  render() {
    return (
      <main className='main'>
        <Drawer routes={routes} />        

        <div className='wrapper'>
          <TopAppBar title='Admin'>
            <a href="#" className="material-icons mdc-top-app-bar__action-item" aria-label="Notifications" alt="Download">notifications</a>
            <IconImg height={40} width={40} 
            style={{borderRadius: '50%'}} 
            src={'https://lh4.googleusercontent.com/-_y4wV8FSjHQ/AAAAAAAAAAI/AAAAAAAAABk/29Gwyyv3RPE/s96-c/photo.jpg'} />
          </TopAppBar>
          
          <BrowserRouter className='main-content'>
            <Route path='/dashboard' component={Dashboard} />
          </BrowserRouter>
        </div>
      </main>
    );
  }
}

export default App;
