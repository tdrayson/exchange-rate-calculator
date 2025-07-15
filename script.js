class ExchangeRateCalculator {
  constructor() {
    this.initializeElements();
    this.bindEvents();
    this.updateCurrencyUI();
    this.validateInputs();
  }

  initializeElements() {
    this.currencySelect = document.getElementById('currency');
    this.invoiceInput = document.getElementById('invoice');
    this.feeInput = document.getElementById('fee');
    this.gbpInput = document.getElementById('gbp');
    this.prefixInvoice = document.getElementById('prefixInvoice');
    this.prefixFeeEl = document.getElementById('prefixFee');
    this.calcBtn = document.getElementById('calcBtn');
    this.inputView = document.getElementById('inputView');
    this.calcView = document.getElementById('calcView');
    this.backBtn = document.getElementById('backBtn');
    this.valGbp = document.getElementById('valGbp');
    this.displayInvoice = document.getElementById('displayInvoice');
    this.displayFeeText = document.getElementById('displayFeeText');
    this.rateDisplay = document.getElementById('rateDisplay');
    this.ratePrefix = document.getElementById('ratePrefix');
    this.copyBtn = document.getElementById('copyBtn');
  }

  bindEvents() {
    this.currencySelect.addEventListener('change', () => {
      this.updateCurrencyUI();
      this.validateInputs();
    });

    [this.invoiceInput, this.feeInput, this.gbpInput].forEach((el) => {
      el.addEventListener('input', () => this.validateInputs());
      el.addEventListener('blur', (e) => this.formatTwoDecimals(e));
    });

    this.calcBtn.addEventListener('click', () => {
      this.updateCurrencyUI();
      this.calculateRate();
      this.inputView.classList.add('hidden');
      this.calcView.classList.remove('hidden');
    });

    this.backBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.calcView.classList.add('hidden');
      this.inputView.classList.remove('hidden');
    });

    this.copyBtn.addEventListener('click', () => {
      const numeric = this.rateDisplay.textContent.split(' ')[0];
      navigator.clipboard.writeText(numeric);
      this.copyBtn.textContent = 'Copied!';
      setTimeout(() => (this.copyBtn.textContent = 'Copy Rate'), 2000);
    });
  }

  updateCurrencyUI() {
    const ccy = this.currencySelect.value;
    this.prefixInvoice.textContent = ccy;
    this.prefixFeeEl.textContent = ccy;
    this.ratePrefix.textContent = `1 ${ccy} =`;
  }

  formatTwoDecimals(e) {
    const val = parseFloat(e.target.value);
    if (!isNaN(val)) e.target.value = val.toFixed(2);
  }

  validateInputs() {
    const inv = parseFloat(this.invoiceInput.value);
    const fee = parseFloat(this.feeInput.value);
    const gbp = parseFloat(this.gbpInput.value);
    this.calcBtn.disabled = !(inv > 0 && fee >= 0 && gbp > 0 && inv > fee);
  }

  calculateRate() {
    const inv = parseFloat(this.invoiceInput.value);
    const fee = parseFloat(this.feeInput.value);
    const gbp = parseFloat(this.gbpInput.value);
    const net = inv - fee;
    const rate = gbp / net;
    const rounded = rate.toFixed(6);
    this.displayInvoice.textContent = `${inv.toFixed(2)} ${
      this.currencySelect.value
    }`;
    this.displayFeeText.textContent = `${fee.toFixed(2)} ${
      this.currencySelect.value
    }`;
    this.valGbp.textContent = `${gbp.toFixed(2)} GBP`;
    this.rateDisplay.textContent = `${rounded} GBP`;
  }
}

// Initialize the calculator when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ExchangeRateCalculator();
});
