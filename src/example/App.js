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

    background: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 10
  },
  content: {
    padding: 50
  }
};


const App = React.createClass({
  getInitialState() {
    return {
      opened: false
    };
  },

  onButtonClick() {
    this.setState({opened: true});
  },

  onPageClick() {
    this.setState({opened: false});
  },

  render() {
    const {opened} = this.state;

    return (
      <div>
        <button onClick={this.onButtonClick}>Open Popup</button>

        {opened ? (
          <PageClick onClick={this.onPageClick}>
            <div style={styles.popup}>
              <div style={styles.content}>Opened</div>
            </div>
          </PageClick>
        ) : null}
      </div>
    );
  }
});

export default App;
