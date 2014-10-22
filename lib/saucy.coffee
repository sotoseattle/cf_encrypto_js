encoder =
  setMessage: ->
    $("textarea#message").val()

  getPassword: () ->
    window.prompt('Enter password', '')

  setUrl: (cripto_mssg) ->
    'your message is available to anyone with the passphrase at:\n\n' +
    'http://localhost:4000/' + cripto_mssg

  replaceMessageWithUrl: (cripto_url) ->
    $("textarea#message").val(cripto_url)

  encrypt:  (mssg, pass) ->
    CryptoJS.AES.encrypt(mssg, pass)

  protect: () ->
    @.replaceMessageWithUrl(@.setUrl(@.encrypt(@.setMessage(), @.getPassword())))

  discover: () ->
    r = /http:\/\/localhost:4000\/(.+)/
    cripto_mssg = $(location)[0].href.match(r)
    console.log(cripto_mssg)





module.exports = encoder
