var Magnacarto = require('magnacarto'),
    semver = require('semver'),
    _ = require('lodash');

var mc = function (project) {
    this.project = project;
};

mc.prototype.render = function () {
    var opts = {
            baseDir: this.project.root,
        },
        mapnikVersion = this.project.mml.mapnik_version || this.project.config.parsed_opts.mapnik_version,
        mml = '';

    if (semver.gte(mapnikVersion, '3.0.0')) {
        opts.builderType = 'mapnik3';
    }
    else {
        opts.builderType = 'mapnik2';
    }

    if (typeof this.project.mml === 'object') {
        mml = _.assign({}, this.project.mml);
        if (_.has(mml, 'Stylesheet')) {
            mml.Stylesheet = _.map(mml.Stylesheet, function (value) {
                // move from {id: 'x', data: 'y'} format to plain string so that Magnacarto can read it
                if (_.has(value, 'data')) {
                    return value.data;
                }
                return value;
            });
        }
        mml = JSON.stringify(mml);
    }
    else {
        mml = this.project.mml;
    }

    this.project.config.log('Using mapnik version', mapnikVersion);
    return new Magnacarto(opts).buildFromString(mml);
};

exports.Renderer = mc;
