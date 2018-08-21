import React, { PureComponent } from 'react';
// import Button from '@material/react-button';

export default class Dashboard extends PureComponent {

  render() {
    return (
      <div className='mdc-layout-grid'>
        <div className='mdc-layout-grid__inner'>
          <div className='mdc-layout-grid__cell'><div className="mdc-card">
  Simple
</div></div>
          <div className='mdc-layout-grid__cell'>World</div>
          <div className='mdc-layout-grid__cell'>!!!</div>
        </div>
      </div>
    );
  }
}