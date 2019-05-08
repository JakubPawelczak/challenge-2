function findStartup (startup) {
  var startups = require('startups');
  var result;
  if(typeof startup !== 'undefined') {
    for(let i in startups) {
      if(i === startup.toString()) result = startups[i];
    }
  }
  
  return result;
};

module.exports.function = findStartup;
