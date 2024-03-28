// localization.js

class Localization {
    constructor(languageData) {
      this.languageData = languageData;
      this.defaultLanguage = 'en'; // Default language is English
      this.currentLanguage = this.defaultLanguage;
    }
  
    setLanguage(language) {
      if (this.languageData[language]) {
        this.currentLanguage = language;
      } else {
        console.warn(`Language '${language}' is not supported.`);
      }
    }
  
    localize(key) {
      const languageStrings = this.languageData[this.currentLanguage];
      if (languageStrings && languageStrings[key]) {
        return languageStrings[key];
      } else {
        console.warn(`Localization key '${key}' not found for language '${this.currentLanguage}'.`);
        return key; // Return the key itself if not found
      }
    }
  }
  
  module.exports = Localization;
  