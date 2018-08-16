import React, { PureComponent } from 'react';

export default class Menu extends PureComponent {
  constructor() {
    super();
    this.menu = React.createRef();
  }

  toggle() {
    console.log(this.menu.current)
  }

  render() {
    return (
      <div className='mdc-menu' tabIndex='-1' ref={this.menu}>
        <ul className='mdc-menu__items mdc-list' role='menu' aria-hidden='true'>
          <li className='mdc-list-item' role='menuitem' tabIndex='0'>
            A Menu Item
          </li>
          <li className='mdc-list-item' role='menuitem' tabIndex='0'>
            Another Menu Item
          </li>
        </ul>
      </div>
    );
  }
}