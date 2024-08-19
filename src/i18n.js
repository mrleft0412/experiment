import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

// Import all locales
import en from './locales/en.json';
import es from './locales/es.json';

// Bind the translations to i18n
i18n.translations = {
  en,
  es,
};

// Set the locale to the device's locale or default to 'en'
i18n.locale = Localization.locale || 'en';

// Enable fallback to 'en' if a translation is missing
i18n.fallbacks = true;

export default i18n;
