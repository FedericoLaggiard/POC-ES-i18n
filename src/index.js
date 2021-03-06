'use strict';

import I18n from './libs/i18n.js';

(function start(){

  let messageBundle_fr = {
    'Hello {0}, you have {1} in your bank account.': 'Bonjour {0}, vous avez {1} dans votre compte bancaire.'
  };
  let messageBundle_de = {
    'Hello {0}, you have {1} in your bank account.': 'Hallo {0}, Sie haben {1} auf Ihrem Bankkonto.'
  };
  let messageBundle_zh_Hant = {
    'Hello {0}, you have {1} in your bank account.': '你好{0}，你有{1}在您的銀行帳戶。'
  };
  let name = 'Bob';
  let amount = 1234.56;
  let i18n;
  let textarea = document.getElementById('txt');

  i18n = I18n.use({locale: 'fr-CA', defaultCurrency: 'CAD', messageBundle: messageBundle_fr});
  textarea.value += (i18n `Hello ${name}, you have ${amount}:c in your bank account.`);
  i18n = I18n.use({locale: 'de-DE', defaultCurrency: 'EUR', messageBundle: messageBundle_de});
  textarea.value += '\n' +  (i18n `Hello ${name}, you have ${amount}:c in your bank account.`);
  i18n = I18n.use({locale: 'zh-Hant-CN', defaultCurrency: 'CNY', messageBundle: messageBundle_zh_Hant});
  textarea.value += '\n' + (i18n `Hello ${name}, you have ${amount}:c in your bank account.`);

})();