
I have used node.js with Express server. It serves 2 routes, the master/index.html (encoder page), and any other one, which returns the decoder page with the JS to pick url and decode.

I used CoffeeScript to code things though I ended up inserting the resulting compiled JS into the pages directly.
Therefore my doubt:

How do I extract the JS to modules/files so I can:

- test the functionality in each module
- load the encoder object in the index html with require ??
- insert the decoder object in the decode html (I am passing the file itself ??)

I set up grunt and tests but I didn't make tests because of the above reason.

### How to run

At root start server

```
$ node server_thingy.js
```

In browser go 'http://localhost:4000/master/index.html'
