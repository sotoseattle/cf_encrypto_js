require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./decoder.js":[function(require,module,exports){
(function() {
  var decoder;

  decoder = {
    setMessage: function(str) {
      return $("textarea#message").val(str);
    },
    getPassword: function() {
      return window.prompt('Enter password', '');
    },
    discover: function() {
      var cypher, message, password, r;
      r = /http:\/\/localhost:4567\/decode\/(.+)/;
      cypher = $(location)[0].href.match(r)[1];
      password = this.getPassword();
      message = CryptoJS.AES.decrypt(cypher, password).toString(CryptoJS.enc.Utf8);
      return this.setMessage(message);
    }
  };

  module.exports = decoder;

}).call(this);

},{}],"./encoder.js":[function(require,module,exports){
(function() {
  var encoder;

  encoder = {
    setMessage: function() {
      return $("textarea#message").val();
    },
    getPassword: function() {
      return window.prompt('Enter password', '');
    },
    setUrl: function(cripto_mssg) {
      return 'your message is available to anyone with the passphrase at:\n\n' + 'http://localhost:4567/decode/' + cripto_mssg;
    },
    replaceMessageWithUrl: function(cripto_url) {
      return $("textarea#message").val(cripto_url);
    },
    encrypt: function(mssg, pass) {
      return CryptoJS.AES.encrypt(mssg, pass);
    },
    protect: function() {
      return this.replaceMessageWithUrl(this.setUrl(this.encrypt(this.setMessage(), this.getPassword())));
    }
  };

  module.exports = encoder;

}).call(this);

},{}]},{},[]);
