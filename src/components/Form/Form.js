import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {setFromCurrency, setFromValue, setToCurrency, setToValue, exchange, showSuccessModal} from '../../actions';
import {
  Container, FromContainer, FormWrapper, ToContainer,
} from './Form.styles';
import Rates from '../Rates/Rates';
import {convertInputValueToTwoDigitsNumber} from '../../helpers/string.helper';
import Balance from '../Balance/Balance';
import ValueInput from '../ValueInput/ValueInput';
import CurrencySelect from '../CurrencySelect/CurrencySelect';
import SuccessModal from '../SuccessModal/SuccessModal';
import Button from '../Button/Button';

class Form extends Component {
  /*
  componentDidMount() {
    this.fromValueInput.focus();
  }
  */

  handleFromValueChange = event => this.props.setFromValueFunc(
    convertInputValueToTwoDigitsNumber(event.target.value)
  );

  handleToValueChange = event => this.props.setToValueFunc(
    convertInputValueToTwoDigitsNumber(event.target.value)
  );

  handleFromCurrencyChange = (event, index, value) => this.props.setFromCurrencyFunc(value);

  handleToCurrencyChange = (event, index, value) => this.props.setToCurrencyFunc(value);

  handleExchange = () => this.props.exchangeFunc();

  handleHideModal = () => this.props.showSuccessModalFunc(false);

  fixFocus = () => {
    if (this.state.inputOnFocus === 'fromCurrency') {
      this.fromValueInput.focus();
    } else {
      this.toValueInput.focus();
    }
  };

  render() {
    const {rates, active, balance, modal} = this.props;
    const {fromValue, fromCurrency, toValue, toCurrency} = active;
    const isExchangeButtonDisabled = balance[fromCurrency] < fromValue || balance[fromCurrency] === 0;

    return (
      <Container>
        {
          modal.success &&
          <SuccessModal
            handleHideModal={this.handleHideModal}
          />
        }
        <FromContainer>
          <FormWrapper>
            <CurrencySelect
              name="fromCurrency"
              value={fromCurrency}
              balance={balance}
              isDisabled={!rates.date}
              onChange={this.handleFromCurrencyChange}
            />
            <ValueInput
              name="fromValue"
              value={fromValue}
              onChange={this.handleFromValueChange}
              disabled={!rates.date}
              isFromValue={true}
            />
          </FormWrapper>
          <Balance
            balance={balance}
            currency={fromCurrency}
          />
          <Rates
            toCurrency={toCurrency}
            fromCurrency={fromCurrency}
            rates={rates}
          />
        </FromContainer>
        <ToContainer>
          <FormWrapper>
            <CurrencySelect
              name="toCurrency"
              value={toCurrency}
              balance={balance}
              isDisabled={!rates.date}
              onChange={this.handleToCurrencyChange}
            />
            <ValueInput
              name="toValue"
              value={toValue}
              onChange={this.handleToValueChange}
              disabled={!rates.date}
              isFromValue={false}
            />
          </FormWrapper>
          <Balance
            balance={balance}
            currency={toCurrency}
          />
          <Button
            onClick={this.handleExchange}
            isDisabled={isExchangeButtonDisabled}
          >
           Exchange
          </Button>
        </ToContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  rates: state.rates,
  active: state.active,
  balance: state.balance,
  modal: state.modal
});

const mapDispatchToProps = dispatch => {
  return {
    setFromCurrencyFunc: bindActionCreators(setFromCurrency, dispatch),
    setFromValueFunc: bindActionCreators(setFromValue, dispatch),
    setToCurrencyFunc: bindActionCreators(setToCurrency, dispatch),
    setToValueFunc: bindActionCreators(setToValue, dispatch),
    exchangeFunc: bindActionCreators(exchange, dispatch),
    showSuccessModalFunc: bindActionCreators(showSuccessModal, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
