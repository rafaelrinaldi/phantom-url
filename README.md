# phantom-url [![Build Status](https://travis-ci.org/rafaelrinaldi/phantom-url.svg?branch=master)](https://travis-ci.org/rafaelrinaldi/phantom-url)

> Node's native URL parser to work with PhantomJS.

## Install

```sh
$ npm install phantom-url
```

## Usage

### Example

```javascript
var url = require('phantom-url');

url('http://localhost:8080/index.html');
// {
//    "hash": "",
//    "host": "localhost:8080",
//    "hostname": "localhost",
//    "href": "http://localhost:8080/index.html",
//    "pathname": "/index.html",
//    "port": "8080",
//    "protocol": "http:",
//    "search": ""
// }
```

## Why

1. Node's `url` module is not available on the PhantomJS running context;
2. [Parsing URLs is a pain in the ass](https://github.com/joyent/node/blob/master/lib/url.js);
3. I'm lazy.

## License

MIT © [Rafael Rinaldi](http://rinaldi.io)
