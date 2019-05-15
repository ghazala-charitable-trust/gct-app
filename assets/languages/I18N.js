const en = require('./en-GB.js')

const I18N = {
  seo: false, // fixes issue where initial page load doesn't have css loaded
  locales: [
    {
      name: 'English',
      code: 'en',
      iso: 'en-GB'
    }
  ],
  defaultLocale: 'en',
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en }
  }
}

module.exports = I18N
