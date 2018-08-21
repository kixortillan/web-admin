import React, { PureComponent } from 'react';
import { MDCMenu } from '@material/menu';

export default class Menu extends PureComponent {
  constructor() {
    super();
    this.menu = React.createRef();
    this.mdcMenu = null;
  }

  toggle(isOpen) {
    if(!this.menu.current) return;

    if(isOpen) {
      this.menu.current.show();
    } else {
      // this.menu.current.hide();
    }
  }

  componentDidMount() {
    this.mdcMenu = new MDCMenu(this.menu.current);
    this.mdcMenu.setAnchorCorner(1);
  }

  render() {
    const {isOpen} = this.props;

    if(isOpen) {
      this.mdcMenu.show();
    } else {
      // this.menu.current.hide();
    }

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