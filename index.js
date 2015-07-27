'use strict';

module.exports = function(url) {
  var link = document.createElement('a');
  link.href = url;

  return {
    protocol: link.protocol,
    host: link.host,
    port: link.port,
    hostname: link.hostname,
    hash: link.hash,
    search: link.search,
    pathname: link.pathname,
    href: link.href
  };
};
