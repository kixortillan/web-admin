import React, { PureComponent } from 'react';
 
export default class IconImg extends PureComponent {
  render() {
    const { alt, style, ...otherProps } = this.props;
    return (
      <img data-mdc-ripple-is-unbounded alt={alt} {...otherProps} style={{margin: '10', ...style}} />
    );
  }
}