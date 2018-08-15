import React, { PureComponent } from 'react';

class TopBarApp extends PureComponent {
  render() {
    const { title, children } = this.props;
    return (
      <header className='mdc-top-app-bar mdc-top-app-bar--fixed mdc-top-app-bar--dense'>
        <div className='mdc-top-app-bar__row'>
          <section className='mdc-top-app-bar__section mdc-top-app-bar__section--align-start'>
            <span className='mdc-top-app-bar__title'>{title}</span>
          </section>
          <section className='mdc-top-app-bar__section mdc-top-app-bar__section--align-end' role='toolbar'>
            {children}
          </section>
        </div>
      </header>
    );
  }
}

export default TopBarApp;