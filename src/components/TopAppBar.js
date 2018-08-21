import React, { PureComponent } from 'react';
import { MDCTextField } from '@material/textfield';

class TopBarApp extends PureComponent {

  componentDidMount() {
    new MDCTextField(document.querySelector('.mdc-text-field'));
  }

  render() {
    const { children } = this.props;
    return (
      <header className='mdc-top-app-bar mdc-top-app-bar--fixed mdc-top-app-bar--dense'>
        <div className='mdc-top-app-bar__row'>
          <section className='mdc-top-app-bar__section mdc-top-app-bar__section--align-start'>
            <span className='mdc-top-app-bar__title'></span>
            <div className='mdc-text-field mdc-text-field--dense mdc-text-field--outlined'>
              <input type='text' id='my-text-field' className='mdc-text-field__input' />
              <label className='mdc-floating-label' htmlFor='my-text-field'>Hint text</label>
              {/* <div className='mdc-line-ripple'></div> */}
            </div>
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