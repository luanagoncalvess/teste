const proxy = [
  {
    context: ['/api'],
    target: 'https://query2.finance.yahoo.com',
    pathRewrite: {'^/api' : ''},
    secure: true,
  }
];

module.exports = proxy;