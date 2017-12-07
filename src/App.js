import React, { Component } from 'react';
import logo from './logo.svg';
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Form />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rates: state.rates,
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
