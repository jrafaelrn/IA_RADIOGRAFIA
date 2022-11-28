const PROXY_CONFIG = [

  {
      context: ['/'],
      target: 'http://localhost:5000/',
      secure: false,
      logLevel: 'debug',
  }
];

module.exports = PROXY_CONFIG;