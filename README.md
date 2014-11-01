This is a CodeFellows exercise to learn the technologies involved.

### The server

After trying with Node (with Express), I ended up using a very thin Sinatra server.

```ruby
require 'sinatra'
require 'sinatra/reloader' if :development

get '/' do
  erb :index
end

get '/encode?' do
  erb :encode
end

get '/decode/*' do
  erb :decode
end
```

Only 3 routes, and 3 very simple associated views.
Start the server like this:

```
$ ruby nsa_server.rb
```

### The JavaScript Code

I used CoffeeScript to code things and Grunt to compile them into two JS modules, one for encoding and a different for decoding.

Browserify allows me to bundle them both for the client side. I keep both modules plus the bundle available at the public/javascript folder.

It is important to note that when browserifying:

1. you need to specify the flag -r to make be able to call the module object into your html.
2. from where you browserify and where you create the bundle will determine how you call the require in terms of path.

The way I include the module inside the view is as follows:

```html
<script src="./javascript/bundle.js"></script>
<script>
  var encoder = require('./encoder.js');
</script>
```

To play with it, after having started your server in port 4567, point the browser to 'http://localhost:4567/'

For tests I use Mocha with Chai and Grunt

