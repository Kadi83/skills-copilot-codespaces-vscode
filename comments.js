// Create web server
// Run node comments.js
// Open browser and go to http://localhost:3000

// Load the http module to create an http server.
var http = require('http');
var url = require('url');
var fs = require('fs');
var qs = require('querystring');
var path = require('path');
var comments = [];
