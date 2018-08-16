import React, { PureComponent } from 'react';
 
export default class IconImg extends PureComponent {
  render() {
    const { children, alt, style, ...otherProps } = this.props;
    return (
      <div id='toolbar' className='toolbar mdc-menu-anchor'>
        <img data-mdc-ripple-is-unbounded alt={alt} {...otherProps} style={{margin: '10', cursor: 'pointer', ...style}} />
        {children}
      </div>
    );
  }
}