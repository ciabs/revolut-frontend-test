import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import {setFromCurrency, setFromValue, setToCurrency, setToValue, exchange} from '../../actions';
import {
  Balance,
  Container, ExchangeButton, FromContainer, FormWrapper, Rates, ToContainer, ValueInput
} from './Form.styles';

class Form extends Component {
  /*
  componentDidMount() {
    this.fromValueInput.focus();
  }
  */

  handleFromValueChange = event => this.props.setFromValueFunc(event.target.value);

  handleToValueChange = event => this.props.setToValueFunc(event.target.value);

  handleFromCurrencyChange = (event, index, value) => this.props.setFromCurrencyFunc(value);

  handleToCurrencyChange = (event, index, value) => this.props.setToCurrencyFunc(value);

  handleExchange = () => this.props.exchangeFunc();

  fixFocus = () => {
    if (this.state.inputOnFocus === 'fromCurrency') {
      this.fromValueInput.focus();
    } else {
      this.toValueInput.focus();
    }
  };

  render() {
    const {rates, active, balance} = this.props;
    const {fromValue, fromCurrency, toValue, toCurrency} = active;

    return (
      <Container>
        <FromContainer>
          <FormWrapper>
            <SelectField
              name="fromCurrency"
              value={fromCurrency}
              onChange={this.handleFromCurrencyChange}
              disabled={!rates.date}
            >
              <MenuItem value="GBP" label="GBP" primaryText={`GBP · ${balance.GBP.toFixed(2)}`} />
              <MenuItem value="EUR" label="EUR" primaryText={`EUR · ${balance.EUR.toFixed(2)}`} />
              <MenuItem value="USD" label="USD" primaryText={`USD · ${balance.USD.toFixed(2)}`} />
            </SelectField>
            <ValueInput
              name="fromValue"
              type="number"
              value={fromValue}
              onChange={this.handleFromValueChange}
              placeholder={0}
              ref={input => { this.fromValueInput = input; }}
              disabled={!rates.date}
              fromValue
            />
          </FormWrapper>
          <Balance>
            Balance: {fromCurrency}{balance[fromCurrency].toFixed(2)}
          </Balance>
          <Rates>
            {rates.date && rates.rates[toCurrency] ? (
              <span>{fromCurrency}1 = {toCurrency}{rates.rates[toCurrency].toFixed(4)}</span>
            ) : (
              <span>loading...</span>
            )}
          </Rates>
        </FromContainer>
        <ToContainer>
          <FormWrapper>
            <SelectField
              name="toCurrency"
              value={toCurrency}
              onChange={this.handleToCurrencyChange}
              disabled={!rates.date}
            >
              <MenuItem value="GBP" label="GBP" primaryText={`GBP · ${balance.GBP.toFixed(2)}`} />
              <MenuItem value="EUR" label="EUR" primaryText={`EUR · ${balance.EUR.toFixed(2)}`} />
              <MenuItem value="USD" label="USD" primaryText={`USD · ${balance.USD.toFixed(2)}`} />
            </SelectField>
            <ValueInput
              name="toValue"
              type="number"
              value={toValue}
              onChange={this.handleToValueChange}
              placeholder={0}
              ref={input => { this.toValueInput = input; }}
              style={{textAlign: 'right', border: 'none', outline: 'none'}}
              disabled={!rates.date}
              toValue
            />
          </FormWrapper>
          <Balance>
            Balance: {toCurrency}{balance[toCurrency] ? balance[toCurrency].toFixed(2) : `0.00`}
          </Balance>
          <ExchangeButton
            disabled={balance[fromCurrency] < fromValue || balance[fromCurrency] === 0}
            onClick={this.handleExchange}
          >
            Exchange
          </ExchangeButton>
        </ToContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  rates: state.rates,
  active: state.active,
  balance: state.balance
});

const mapDispatchToProps = dispatch => {
  return {
    setFromCurrencyFunc: bindActionCreators(setFromCurrency, dispatch),
    setFromValueFunc: bindActionCreators(setFromValue, dispatch),
    setToCurrencyFunc: bindActionCreators(setToCurrency, dispatch),
    setToValueFunc: bindActionCreators(setToValue, dispatch),
    exchangeFunc: bindActionCreators(exchange, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
