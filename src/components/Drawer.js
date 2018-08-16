import React, { PureComponent } from 'react';

export default class Drawer extends PureComponent {
  constructor() {
    super();
    this.state = {
      isCollapsed: false,
    };
    this.collapse = this.collapse.bind(this);
  }

  collapse() {
    this.setState((prev, props) => ({isCollapsed: !prev.isCollapsed}));
  }

  render() {
    return (
      <nav className={this.state.isCollapsed ? 'drawer drawer-collapse mdc-drawer mdc-drawer--permanent' : 'drawer mdc-drawer mdc-drawer--permanent'} 
      style={{ backgroundColor: '#0277BD', borderRight: 'none' }}>
        <div className='mdc-drawer__toolbar-spacer' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <img alt='' height={28} src="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png" />
          <img alt='' hidden={this.state.isCollapsed} height={20} src="//www.gstatic.com/mobilesdk/160323_mobilesdk/images/firebase_logotype_white_18dp.svg" />
        </div>
        <div className='mdc-drawer__content' style={{ flex: '1 1' }}>
          <nav className='modules mdc-list mdc-list--dense'>
            {
              Object.values(this.props.routes)
                .map(r => {
                  if(r.submodules) {
                    return Object.values(r.submodules).map(o => renderLink(o));
                  } else {
                    return renderLink(r);
                  }
                })
            }
          </nav>
        </div>
        <button className='collapse mdc-button' onClick={this.collapse}>
          <i className='material-icons' style={{ color: 'white' }}>{this.state.isCollapsed ? 'chevron_right' : 'chevron_left'}</i>
        </button>
      </nav>
    );
  }
}

const renderLink = (obj) => {
  return (<a className='mdc-list-item' href={obj.link} key={obj.text}>
    <i className='material-icons mdc-list-item__graphic' aria-hidden='true'>{obj.icon}</i>{obj.text}
  </a>);
}