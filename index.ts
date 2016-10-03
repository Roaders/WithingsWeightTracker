
/// <reference path="typings/main.d.ts" />
/// <reference path="typings/globals/node/index.d.ts" />

import express = require('express');
var commandLineArgs = require('command-line-args');

var app = express();

app.use('/', express.static( __dirname ));
app.use( '/assets', express.static('assets'));
app.use( '/css', express.static('css'));

const commandOptions = commandLineArgs([{ name: "port", type: Number, alias: "p", defaultValue: "80" }]);

const serverPort = commandOptions.port;

app.listen(serverPort, function () {
  console.log(`Weight Tracker running on port ${serverPort}`);
});
