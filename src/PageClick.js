import React from 'react';
import {shouldComponentUpdate} from 'react/lib/ReactComponentWithPureRenderMixin';


const PageClick = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired,
    onClick: React.PropTypes.func.isRequired,
    onMouseDown: React.PropTypes.func,
    onTouchStart: React.PropTypes.func,
    outsideOnly: React.PropTypes.bool
  },


  getDefaultProps() {
    return {
      outsideOnly: true
    };
  },


  componentWillMount() {
    this.insideClick = false;
  },


  componentDidMount() {
    global.window.addEventListener('touchstart', this.onDocumentClick, false);
    global.window.addEventListener('touchend', this.onDocumentMouseUp, false);
    global.window.addEventListener('mousedown', this.onDocumentClick, false);
    global.window.addEventListener('mouseup', this.onDocumentMouseUp, false);
  },


  shouldComponentUpdate,


  componentWillUnmount() {
    global.window.removeEventListener('touchstart', this.onDocumentClick, false);
    global.window.removeEventListener('touchend', this.onDocumentMouseUp, false);
    global.window.removeEventListener('mousedown', this.onDocumentClick, false);
    global.window.removeEventListener('mouseup', this.onDocumentMouseUp, false);
  },


  onDocumentClick(...args) {
    if (this.insideClick) {
      return;
    }
    this.props.onClick(...args);
  },


  onDocumentMouseUp() {
    this.insideClick = false;
  },


  onMouseDown(...args) {
    this.insideClick = true;
    if (this.props.onMouseDown) {
      this.props.onMouseDown(...args);
    }
  },


  onTouchStart(...args) {
    this.insideClick = true;
    if (this.props.onTouchStart) {
      this.props.onTouchStart(...args);
    }
  },


  render() {
    const props = this.props.outsideOnly ? {
      onMouseDown: this.onMouseDown,
      onTouchStart: this.onTouchStart
    } : {};

    return React.cloneElement(React.Children.only(this.props.children), props);
  }
});


export default PageClick;
