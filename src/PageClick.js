import React from 'react';
import {shouldComponentUpdate} from 'react/lib/ReactComponentWithPureRenderMixin';

const MAX_MOVE = 20;

const PageClick = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired,
    onClick: React.PropTypes.func.isRequired,
    onMouseDown: React.PropTypes.func,
    onTouchStart: React.PropTypes.func,
    outsideOnly: React.PropTypes.bool,
    useEndEvent: React.PropTypes.bool
  },


  getDefaultProps() {
    return {
      outsideOnly: true,
      useEndEvent: false
    };
  },


  componentWillMount() {
    this.insideClick = false;
    this.touchStart = null;
    this.justCalledOnClick = false;
  },


  componentDidMount() {
    global.window.addEventListener('mousedown', this.onStartEvent, false);
    global.window.addEventListener('mouseup', this.resetInsideClick, false);
    // if this component is mounting because of a click event, then that event can still get
    // captured by this listener unless we wait
    setTimeout(() => window.addEventListener('click', this.onDocumentClick, false));
    global.window.addEventListener('touchstart', this.onStartEvent, false);
    global.window.addEventListener('touchend', this.onDocumentTouchEnd, false);
  },


  shouldComponentUpdate,


  componentWillUnmount() {
    global.window.removeEventListener('mousedown', this.onStartEvent, false);
    global.window.removeEventListener('mouseup', this.resetInsideClick, false);
    global.window.removeEventListener('click', this.onDocumentClick, false);
    global.window.removeEventListener('touchstart', this.onStartEvent, false);
    global.window.removeEventListener('touchend', this.onDocumentTouchEnd, false);
  },


  onStartEvent(event, ...args) {
    if (this.insideClick) {
      return;
    }
    if (this.props.useEndEvent) {
      // if this event has touches, then save the first one
      this.touchStart = event.touches ? event.touches[0] : null;
    } else {
      this.props.onClick(event, ...args);
    }
  },


  resetInsideClick() {
    if (this.props.useEndEvent) {
      // we don't want to reset insideClick until after onDocumentMouseClick has been triggered
      setTimeout(() => {
        this.insideClick = false;
      });
    } else {
      this.insideClick = false;
    }
  },


  onDocumentClick(...args) {
    if (this.props.useEndEvent && !this.insideClick && !this.justCalledOnClick) {
      this.props.onClick(...args);
    }
  },


  onDocumentTouchEnd(event, ...args) {
    this.resetInsideClick();
    // on mobile safari click events are not bubbled up to the document unless the target has the
    // css `cursor: pointer;` http://www.quirksmode.org/blog/archives/2010/10/click_event_del_1.html
    // so try and work out if we should call the onClick prop, on other browsers, onDocumentClick
    // will get called, so use a 'justCalledOnClick' flag to prevent calling onClick twice
    if (this.props.useEndEvent && this.touchStart && !this.insideClick) {
      const {clientX, clientY} = event.changedTouches[0];
      const dx = Math.abs(clientX - this.touchStart.clientX);
      const dy = Math.abs(clientY - this.touchStart.clientY);

      if (dx < MAX_MOVE && dy < MAX_MOVE) {
        this.props.onClick(event, ...args);
        this.justCalledOnClick = true;
        setTimeout(() => {
          this.justCalledOnClick = false;
        });
      }
    }
    this.touchStart = null;
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
