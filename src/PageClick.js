import React from 'react';
import {shouldComponentUpdate} from 'react/lib/ReactComponentWithPureRenderMixin';


const PageClick = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired,
    onClick: React.PropTypes.func.isRequired,
    onMouseDown: React.PropTypes.func,
    onTouchStart: React.PropTypes.func,
    onMouseUp: React.PropTypes.func,
    onTouchEnd: React.PropTypes.func,
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
    global.window.addEventListener('mousedown', this.onDocumentClick, false);
    global.window.addEventListener('touchstart', this.onDocumentClick, false);
  },


  shouldComponentUpdate,


  componentWillUnmount() {
    global.window.removeEventListener('mousedown', this.onDocumentClick, false);
    global.window.removeEventListener('touchstart', this.onDocumentClick, false);
  },


  onDocumentClick(...args) {
    if (this.insideClick) {
      return;
    }
    this.props.onClick(...args);
  },


  onMouseDown(...args) {
    this.insideClick = true;
    if (this.props.onMouseDown) {
      this.props.onMouseDown(...args);
    }
  },


  onMouseUp(...args) {
    this.insideClick = false;
    if (this.props.onMouseUp) {
      this.props.onMouseUp(...args);
    }
  },


  onTouchStart(...args) {
    this.insideClick = true;
    if (this.props.onTouchStart) {
      this.props.onTouchStart(...args);
    }
  },


  onTouchEnd(...args) {
    this.insideClick = false;
    if (this.props.onTouchEnd) {
      this.props.onTouchEnd(...args);
    }
  },


  render() {
    const props = this.props.outsideOnly ? {
      onMouseDown: this.onMouseDown,
      onMouseUp: this.onMouseUp,
      onTouchStart: this.onTouchStart,
      onTouchEnd: this.onTouchEnd
    } : {};

    return React.cloneElement(React.Children.only(this.props.children), props);
  }
});


export default PageClick;
