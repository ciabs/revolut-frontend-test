import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getRates} from './actions';
import Form from './components/Form/Form';

class App extends Component {
  componentDidMount() {
    setInterval(this.getRatesLoop(), 10 * 1000);
  }

  getRatesLoop = () => {
    const {getRatesFunc, active} = this.props;

    getRatesFunc(active.fromCurrency);
    return this.getRatesLoop;
  };

  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  active: state.active
});

const mapDispatchToProps = dispatch => {
  return {
    getRatesFunc: bindActionCreators(getRates, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
