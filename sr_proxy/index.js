var http = require('http'),
  httpProxy = require('http-proxy'),
  argv = require('yargs').argv;

// require('tls').checkServerIdentity = function () { return null; };

var proxy = httpProxy.createProxyServer();

proxy.on('error', function(e) {
  console.log('error', e);
});

var server = http.createServer(function (req, res) {
  console.log(req.url, req.method);

  if (req.headers.origin) {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  }
  req.headers['Origin'] = 'tigertext.me';

  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Cache-Control, TT-X-Features, TT-X-Organization-Key');
  res.setHeader('Access-Control-Expose-Headers', 'Content-Type, Authorization, Cache-Control, TT-X-Features, TT-X-Organization-Key, tt_log_account_token');
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  try {
    proxy.web(req, res, {
      target: 'https://api.sportradar.us',
      secure: true,
      rejectUnauthorized: false,
      changeOrigin: true
    });
  }
  catch (e) {
    console.log('err', e);
    res.end('error');
  }
});

var port = +argv.port || +argv.p || 8000;

console.log('Running on http://localhost:' + port);

server.listen(port);
