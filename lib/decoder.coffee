decoder =
  setMessage: (str) ->
    $("textarea#message").val(str)

  getPassword: ->
   window.prompt('Enter password', '')

  discover: ->
    r = /http:\/\/localhost:4567\/decode\/(.+)/;
    cypher = $(location)[0].href.match(r)[1];
    password = @.getPassword();
    message = CryptoJS.AES.decrypt(cypher, password).toString(CryptoJS.enc.Utf8)
    @.setMessage(message)

module.exports = decoder
