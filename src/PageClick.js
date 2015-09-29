import React from 'react';
import {shouldComponentUpdate} from 'react/lib/ReactComponentWithPureRenderMixin';


const PageClick = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired,
    onClick: React.PropTypes.func.isRequired,
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
  },


  shouldComponentUpdate,


  componentWillUnmount() {
    global.window.removeEventListener('mousedown', this.onDocumentClick, false);
  },


  onDocumentClick(...args) {
    if (this.insideClick) {
      return;
    }
    this.props.onClick(...args);
  },


  onMouseDown() {
    this.insideClick = true;
  },


  onMouseUp() {
    this.insideClick = false;
  },


  render() {
    const props = this.props.outsideOnly ? {
      onMouseDown: this.onMouseDown,
      onMouseUp: this.onMouseUp
    } : {};

    return React.cloneElement(React.Children.only(this.props.children), props);
  }
});


export default PageClick;
