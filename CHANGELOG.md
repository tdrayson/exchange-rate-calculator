# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - 2024-12-19

### Changed

- Refactored JavaScript code to use class-based architecture
- Converted global functions to class methods within `ExchangeRateCalculator` class
- Added proper DOM ready event listener (`DOMContentLoaded`)
- Improved code organization and maintainability
- Enhanced encapsulation by converting global variables to instance properties

### Technical Improvements

- Better separation of concerns with dedicated methods:
  - `initializeElements()` - Centralizes DOM element references
  - `bindEvents()` - Groups all event listeners
  - All calculation and UI update methods now properly scoped
- Eliminated global variable pollution
- Improved code readability and structure

## [1.0.0] - Initial Release

### Added

- Exchange rate calculator functionality
- Support for multiple currencies
- Real-time input validation
- Copy rate to clipboard feature
- Responsive design with view switching
