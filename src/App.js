import React, { PureComponent } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from './routes/Dashboard';
import TopAppBar from './components/TopAppBar';
import Drawer from './components/Drawer';
import routes from './config/routes';
import IconImg from './components/IconImg';
import Menu from './components/Menu';

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      profileMenu: false,
    }
  }

  render() {
    return (
      <main className='main'>
        <Drawer routes={routes} />        

        <div className='wrapper'>
          <TopAppBar title='Admin'>

            <div className='badge' data-count='100'>
              <a href='#!' className='material-icons mdc-top-app-bar__action-item' aria-label='Notifications' alt='Download'>notifications</a>
            </div>
            {/* <IconImg onClick={() => this.setState({profileMenu: !this.state.profileMenu})}
            height={40} width={40} 
            style={{borderRadius: '50%'}} 
            src={'https://lh4.googleusercontent.com/-_y4wV8FSjHQ/AAAAAAAAAAI/AAAAAAAAABk/29Gwyyv3RPE/s96-c/photo.jpg'}>
            </IconImg> */}
            <div id='toolbar' className='toolbar mdc-menu-anchor'>
            <button id="star-this-item"
              className="mdc-icon-button mdc-icon-button--on"
              aria-label="Unstar this item"
              aria-hidden="true"
              aria-pressed="true" onClick={() => this.setState({profileMenu: !this.state.profileMenu})}>
              <img style={{borderRadius: '50%'}} src={'https://lh4.googleusercontent.com/-_y4wV8FSjHQ/AAAAAAAAAAI/AAAAAAAAABk/29Gwyyv3RPE/s96-c/photo.jpg'} className="mdc-icon-button__icon"/>
            </button>
            <Menu isOpen={this.state.profileMenu} />
            </div>
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
