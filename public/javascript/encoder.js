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
