import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {setFromCurrency, setFromValue, setToCurrency, setToValue, exchange, showSuccessModal} from '../../actions';
import {
  Container, FormWrapper, ToContainer,
} from './Main.styles';
import {convertInputValueToTwoDigitsNumber} from '../../helpers/string.helper';
import Balance from '../Balance/Balance';
import ValueInput from '../ValueInput/ValueInput';
import CurrencySelect from '../CurrencySelect/CurrencySelect';
import SuccessModal from '../SuccessModal/SuccessModal';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import FromComponent from '../ConvertFrom/ConvertFrom';

class Main extends Component {
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
    const isExchangeButtonDisabled = balance[fromCurrency] < fromValue ||
      balance[fromCurrency] === 0 ||
      fromValue === 0;

    const renderSuccessModal = modal.success && (
      <SuccessModal
        handleHideModal={this.handleHideModal}
        lastExchange={balance.lastExchange}
      />
    );

    return (
      <Container>
        {renderSuccessModal}
        <FromComponent
          balance={balance}
          fromCurrency={fromCurrency}
          fromValue={fromValue}
          toCurrency={toCurrency}
          rates={rates}
          handleFromCurrencyChange={this.handleFromCurrencyChange}
          handleFromValueChange={this.handleFromValueChange}
        />
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

Main.propTypes = {
  rates: PropTypes.object.isRequired,
  active: PropTypes.object.isRequired,
  balance: PropTypes.object.isRequired,
  modal: PropTypes.object.isRequired,
  setFromCurrencyFunc: PropTypes.func.isRequired,
  setFromValueFunc: PropTypes.func.isRequired,
  setToCurrencyFunc: PropTypes.func.isRequired,
  setToValueFunc: PropTypes.func.isRequired,
  exchangeFunc: PropTypes.func.isRequired,
  showSuccessModalFunc: PropTypes.func.isRequired
};

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
)(Main);
