"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

var port = process.env.PORT || 3001;

_app["default"].use(function (req, res) {
  var url = req.url;
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write('<h1>Enlace Funcionando</h1>');
  res.end();
}).listen(port, function () {
  console.log('listening on %s', port);
});