const merge = require('webpack-merge');
const base = require('../scripts/webpack.base.js');
const homolog = require('../scripts/webpack.homolog.js');

module.exports = merge(base('homolog'), homolog);
