import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(newAmount) {
    const amount = newAmount;
    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  set currency(newCurrency) {
    if (newCurrency instanceof Currency) {
      this._currency = newCurrency;
    } else {
      throw new TypeError('Currency is not an instance of Currency class');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && conversionRate === 'number') {
      return amount * conversionRate;
    } else {
      throw new TypeError('Amount/Number is not a number');
    }
  }
}
