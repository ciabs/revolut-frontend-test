import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {injectGlobal} from 'styled-components';

import {getRates} from './actions';
import Form from './components/Form/Form';
import {GlobalStyled} from './styles/global';

class App extends Component {
  componentDidMount() {
    setInterval(this.getRatesLoop(), 10 * 1000);

    injectGlobal`${GlobalStyled()}`; // eslint-disable-line no-unused-expressions
  }

  getRatesLoop = () => {
    const {getRatesFunc, active} = this.props;

    getRatesFunc(active.fromCurrency);
    return this.getRatesLoop;
  };

  render() {
    return <Form />;
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
