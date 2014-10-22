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
