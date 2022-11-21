const PROXY_CONFIG = [

    {
        context: ['/'],
        target: 'http://e5e3-35-231-64-167.ngrok.io/',
        secure: false,
        logLevel: 'debug',
    }
];

module.exports = PROXY_CONFIG;