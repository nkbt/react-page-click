import React from 'react';
import Modal from './Modal.js';
import {name} from '../../../package.json';


const App = React.createClass({
  getInitialState() {
    return {
      showModal: false,
      showLazyModal: false
    };
  },


  showModal() {
    this.setState({showModal: true});
  },


  hideModal() {
    this.setState({showModal: false});
  },


  showLazyModal() {
    this.setState({showLazyModal: true});
  },


  hideLazyModal() {
    this.setState({showLazyModal: false});
  },

  render() {
    const {showModal, showLazyModal} = this.state;

    return (
      <div>
        <h1>{name}</h1>

        <button onClick={this.showModal}>
          Open Modal
        </button>
        &nbsp;Closes on mouse down or touch start events

        <br />

        <button onClick={this.showLazyModal}>
          Open Lazy Model
        </button>
        &nbsp;Closes on mouse up or touch end events

        {showModal ? (
          <Modal onClose={this.hideModal}>
            Modal content
          </Modal>
        ) : null}

        {showLazyModal ? (
          <Modal onClose={this.hideLazyModal} useEndEvent>
            Lazy Modal content
          </Modal>
        ) : null}
      </div>
    );
  }
});


export default App;
