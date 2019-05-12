const en = require('./en-GB.js')

const I18N = {
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
