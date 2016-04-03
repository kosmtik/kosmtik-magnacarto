var path = require('path');

exports.Plugin = function (config) {
    config.registerRenderer('magnacarto', path.join(__dirname, 'Magnacarto.js'));
};
