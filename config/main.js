var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        root: rootPath,
        app: {
            name: 'dc'
        },
        port: 3000,
        db: 'mongodb://localhost:27017/dc'
    },

    test: {
        root: rootPath,
        app: {
            name: 'dc'
        },
        port: 3000,
        db: 'mongodb://localhost:27017/dc'
    },

    production: {
        root: rootPath,
        app: {
            name: 'dc'
        },
        port: 3000,
        db: 'mongodb://localhost:27017/dc'
    }
};

module.exports = config[env];