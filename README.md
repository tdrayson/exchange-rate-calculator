# Exchange Rate Calculator

A modern, responsive web application for calculating exchange rates based on invoice amounts, fees, and target currency values. Built with vanilla JavaScript using a clean, class-based architecture.

**🌐 Live Demo**: [https://tdrayson.github.io/exchange-rate-calculator/](https://tdrayson.github.io/exchange-rate-calculator/)

## Features

- **Real-time Calculations**: Instantly calculate exchange rates as you input values
- **Multi-Currency Support**: Works with any currency pair (currently configured for various currencies to GBP)
- **Smart Validation**: Real-time input validation with helpful feedback
- **Professional UI**: Clean, modern interface with smooth view transitions
- **Copy to Clipboard**: One-click rate copying for easy sharing
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## How It Works

The calculator determines the effective exchange rate by:

1. Taking the invoice amount in the source currency
2. Subtracting any fees
3. Calculating the rate needed to convert the net amount to the target GBP amount

**Formula**: `Rate = Target GBP Amount / (Invoice Amount - Fees)`

## Usage

1. **Select Currency**: Choose the source currency from the dropdown
2. **Enter Invoice Amount**: Input the total invoice value in the selected currency
3. **Add Fees** (optional): Include any processing fees or charges
4. **Set Target Amount**: Specify the desired GBP amount
5. **Calculate**: Click "Calculate Rate" to see the results
6. **Copy Rate**: Use the copy button to copy the calculated rate to clipboard

## Project Structure

```
exchange-rate-calculator/
├── index.html          # Main HTML structure
├── script.js           # JavaScript logic (class-based)
├── README.md           # Project documentation
└── CHANGELOG.md        # Version history
```

## Technical Details

### Architecture

- **Class-based JavaScript**: Uses `ExchangeRateCalculator` class for clean organization
- **Event-driven**: Proper event handling with DOM ready initialization
- **Modular Design**: Separated concerns with dedicated methods for different functionalities

### Key Components

#### ExchangeRateCalculator Class

- `initializeElements()`: DOM element references
- `bindEvents()`: Event listener setup
- `updateCurrencyUI()`: Currency display updates
- `validateInputs()`: Real-time validation
- `calculateRate()`: Core calculation logic
- `formatTwoDecimals()`: Number formatting

### Browser Compatibility

- Modern browsers with ES6+ support
- Requires clipboard API for copy functionality
- Responsive design for all screen sizes

## Development

### Setup

1. Clone or download the project files
2. Open `index.html` in a web browser
3. No build process required - runs directly in the browser

### Code Style

- Follows modern JavaScript best practices
- Uses ES6+ features (classes, arrow functions, template literals)
- Clean, readable code with proper comments
- DRY (Don't Repeat Yourself) principles

### Future Enhancements

- API integration for real-time exchange rates
- Historical rate tracking
- Multiple currency pair support
- Export functionality
- Dark mode theme

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to submit issues, feature requests, or pull requests to improve the calculator.

---

**Version**: 1.1.0
**Last Updated**: July 2025
