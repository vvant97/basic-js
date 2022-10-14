const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let domain = '';
  
  for (let i = email.length - 1; i > 0; i--) {
    const currentSymbol = email[i];
    
   if (currentSymbol === '@') {
    return domain;
   }

   domain = currentSymbol + domain;
  }

  return domain;
}

module.exports = {
  getEmailDomain
};
