import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {injectGlobal} from 'styled-components';

import {getRates} from './actions';
import Form from './components/Main/Main';
import {GlobalStyled} from './styles/global';

export class App extends Component {
  componentDidMount() {
    setInterval(this.getRatesLoop(), 10 * 1000);

    injectGlobal`${GlobalStyled()}`; // eslint-disable-line no-unused-expressions
  }

  getRatesLoop = () => {
    const {getRatesFunc, fromCurrency} = this.props;

    getRatesFunc(fromCurrency);
    return this.getRatesLoop;
  };

  render() {
    return <Form />;
  }
}

const mapStateToProps = state => ({
  fromCurrency: state.active.fromCurrency
});

const mapDispatchToProps = dispatch => ({
  getRatesFunc: bindActionCreators(getRates, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
