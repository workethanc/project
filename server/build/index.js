'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 4000;

app.use(_bodyParser2.default.json());
app.use((0, _expressSession2.default)({
    secret: '@#@$MYSIGN#@$#$',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 14 * 24 * 60 * 60 * 1000 // 14 DAYS
    }
}));
app.use((0, _cors2.default)());
app.use((0, _compression2.default)());
app.use('/', _express2.default.static(_path2.default.join(__dirname, './../../client/public')));

app.get('*', function (req, res) {
    res.sendFile(_path2.default.resolve(__dirname, './../../client/public/index.html'));
});

app.listen(port, function () {
    console.log('Server is listenning on port :: ' + port);
});