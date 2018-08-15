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
      <nav className={this.state.isCollapsed ? 'drawer drawer-collapse mdc-drawer mdc-drawer--permanent' : 'drawer mdc-drawer mdc-drawer--permanent'}>
        <div className='mdc-drawer__toolbar-spacer'>
        <img className="c5e-logo-lockup-icon" fb-logo="" fb-size="28" src="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png" />
          <img className="c5e-logo-lockup-logotype logotype-white" src="//www.gstatic.com/mobilesdk/160323_mobilesdk/images/firebase_logotype_white_18dp.svg" alt="Firebase" />
        </div>
        <div className='mdc-drawer__content' style={{ flex: '1 1' }}>
          <nav className='mdc-list'>
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
          <i className='material-icons'>{this.state.isCollapsed ? 'chevron_right' : 'chevron_left'}</i>
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