import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getRates, setFromCurrency} from '../../actions';
import {bindActionCreators} from 'redux';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fromValue: '',
      fromCurrency: props.currency.fromCurrency,
      toValue: '',
      toCurrency: props.currency.toCurrency,
      inputOnFocus: 'fromCurrency'
    };
  }

  componentDidMount() {
    this.fromValueInput.focus();
  }

  handleFromValue = event => {
    const {rates} = this.props;
    const {toCurrency} = this.state;
    const fromValue = event.target.value;
    const toValue = fromValue * rates.rates[toCurrency];

    this.setState({
      fromValue: fromValue ? parseInt(fromValue, 10) : '',
      toValue: toValue !== 0 ? toValue.toFixed(2) : '',
      inputOnFocus: 'fromCurrency'
    });
  };

  handleToValue = event => {
    const {rates} = this.props;
    const {toCurrency} = this.state;
    const toValue = event.target.value;
    const fromValue = toValue / rates.rates[toCurrency];

    this.setState({
      fromValue: fromValue !== 0 ? fromValue.toFixed(2) : '',
      toValue: toValue ? parseInt(toValue, 10) : '',
      inputOnFocus: 'toCurrency'
    });
  };

  handleFromCurrency = event => {
    const {setFromCurrencyFunc, getRatesFunc} = this.props;
    const {fromValue} = this.state;
    const fromCurrency = event.target.value;
    const toCurrency = this.state.toCurrency === fromCurrency ?
      this.state.fromCurrency :
      this.state.toCurrency;

    this.fixFocus();

    setFromCurrencyFunc(fromCurrency);

    getRatesFunc(fromCurrency)
      .then(result => {
        const toValue = fromValue * result.rates.rates[toCurrency];

        this.setState({
          fromCurrency,
          toValue: toValue !== 0 ? toValue.toFixed(2) : '',
          toCurrency
        });
      });
  };

  handleToCurrency = event => {
    const {getRatesFunc, setFromCurrencyFunc} = this.props;
    const {fromValue} = this.state;
    const toCurrency = event.target.value;

    const fromCurrency = this.props.currency.fromCurrency === toCurrency ?
      this.state.toCurrency :
      this.props.currency.fromCurrency;

    this.fixFocus();

    setFromCurrencyFunc(fromCurrency);

    getRatesFunc(fromCurrency)
      .then(result => {
        const toValue = fromValue * result.rates.rates[toCurrency];

        this.setState({
          fromValue,
          fromCurrency,
          toCurrency,
          toValue: toValue !== 0 ? toValue.toFixed(2) : ''
        });
      });
  };

  fixFocus = () => {
    if (this.state.inputOnFocus === 'fromCurrency') {
      this.fromValueInput.focus();
    } else {
      this.toValueInput.focus();
    }
  };

  render() {
    const {fromValue, fromCurrency, toValue, toCurrency} = this.state;
    const {rates} = this.props;

    return (
      <div>
        <div>
          <select
            name="fromCurrency"
            value={fromCurrency}
            onChange={this.handleFromCurrency}
            disabled={!rates.date}
          >
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
          </select>
          <input
            name="fromValue"
            type="number"
            value={fromValue}
            onChange={this.handleFromValue}
            placeholder={0}
            ref={input => { this.fromValueInput = input; }}
            style={{textAlign: 'right', border: 'none', outline: 'none'}}
            disabled={!rates.date}
          />
        </div>
        <div>
          {
            rates.date && (
              <span>RATE: 1{rates.base} = {toCurrency}{rates.rates[toCurrency].toFixed(4)}</span>
            )
          }
        </div>
        <div>
          <select
            name="toCurrency"
            value={toCurrency}
            onChange={this.handleToCurrency}
            disabled={!rates.date}
          >
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
          </select>
          <input
            name="toValue"
            type="number"
            value={toValue}
            onChange={this.handleToValue}
            placeholder={0}
            ref={input => { this.toValueInput = input; }}
            style={{textAlign: 'right', border: 'none', outline: 'none'}}
            disabled={!rates.date}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rates: state.rates,
  currency: state.currency
});

const mapDispatchToProps = dispatch => {
  return {
    setFromCurrencyFunc: bindActionCreators(setFromCurrency, dispatch),
    getRatesFunc: bindActionCreators(getRates, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
