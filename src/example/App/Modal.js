import React from 'react';
import PageClick from '../..';


const styles = {
  popup: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: '40%',
    height: '40%',
    marginTop: '-20%',
    marginLeft: '-20%',

    fontSize: 30,
    textAlign: 'center',

    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10
  },
  shade: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.3)'
  },
  content: {
    padding: 50
  }
};

const Modal = React.createClass({
  propTypes: {
    onClose: React.PropTypes.func.isRequired,
    useEndEvent: React.PropTypes.bool
  },

  render() {
    const {onClose, useEndEvent, ...props} = this.props;

    return (
      <div>
        <div style={styles.shade} />
        <PageClick onClick={onClose} useEndEvent={useEndEvent}>
          <div style={styles.popup}>
            <div style={styles.content} {...props} />
          </div>
        </PageClick>
      </div>
    );
  }
});


export default Modal;
