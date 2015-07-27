'use strict';

var url = require('./');
var test = require('tape');

test('parse url', function(t) {
  t.deepEqual(url('http://localhost').protocol, 'http:', 'protocol');
  t.deepEqual(url('http://localhost:8080').host, 'localhost:8080', 'host');
  t.deepEqual(url('http://localhost:8080').port, '8080', 'port');
  t.deepEqual(url('http://localhost').hostname, 'localhost', 'hostname');
  t.deepEqual(url('http://localhost/#main').hash, '#main', 'hash');
  t.deepEqual(url('http://localhost/?query=foo').search, '?query=foo', 'search');
  t.deepEqual(url('http://localhost/index.html').pathname, '/index.html', 'pathname');
  t.deepEqual(url('http://localhost').href, 'http://localhost/', 'href');
  t.end();
});
