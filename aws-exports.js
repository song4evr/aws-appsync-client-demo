"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    HOST: 'API-URL.REGION.amazonaws.com',
    REGION: 'REGION',
    PATH: '/graphql',
    ENDPOINT: '',
};
config.ENDPOINT = "https://" + config.HOST + config.PATH;
exports.default = config;