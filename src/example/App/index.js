import React from 'react';
import Modal from './Modal.js';
import {name} from '../../../package.json';


const App = React.createClass({
  getInitialState() {
    return {
      showModal: false
    };
  },


  showModal() {
    this.setState({showModal: true});
  },


  hideModal() {
    this.setState({showModal: false});
  },


  render() {
    const {showModal} = this.state;

    return (
      <div>
        <h1>{name}</h1>

        <button onClick={this.showModal}>
          Open Modal
        </button>

        {showModal ? (
          <Modal onClose={this.hideModal}>
            Modal content
          </Modal>
        ) : null}
      </div>
    );
  }
});


export default App;
