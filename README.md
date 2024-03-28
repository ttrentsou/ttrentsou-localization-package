````markdown
# Localization and Internationalization Package

Localization and Internationalization Package is a simple Node.js package that provides functionality to localize and internationalize text strings in a Node.js application.

## Installation

You can install the package via npm:

```bash
npm install localization-package
```

## Usage

```javascript
const Localization = require('localization-package');

// Language data
const languageData = {
  en: {
    greeting: 'Hello',
    goodbye: 'Goodbye',
  },
  fr: {
    greeting: 'Bonjour',
    goodbye: 'Au revoir',
  },
  // Add more language data as needed
};

// Create an instance of Localization with language data
const localization = new Localization(languageData);

// Set the current language
localization.setLanguage('en');

// Localize text strings
const greeting = localization.localize('greeting'); // Hello
const goodbye = localization.localize('goodbye'); // Goodbye
```

## API

### `Localization(languageData)`

The `Localization` class provides functionality to localize and internationalize text strings.

- `languageData` (Object): An object containing language data with key-value pairs of text strings for each supported language.

#### `setLanguage(language)`

Sets the current language to be used for localization.

- `language` (string): The language code of the desired language (e.g., 'en' for English, 'fr' for French).

#### `localize(key)`

Retrieves the localized version of the text string corresponding to the specified key in the current language.

- `key` (string): The key of the text string to be localized.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
