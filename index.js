var path = require('path');

class Plugin {
    constructor(config) {
        config.registerRenderer('magnacarto', path.join(__dirname, 'Magnacarto.js'));
    }
}

exports = module.exports = { Plugin };
