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
