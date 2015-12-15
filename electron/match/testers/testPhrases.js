var regMatch = require('../regMatch');
module.exports = function (phrases, _actionPrefix) {
  for (var phrase in phrases) {
    if (regMatch(phrases[phrase], _actionPrefix)) {
      return phrase;
    };
  }
  return false;
};
