require 'rubygems'
require 'sinatra'

get '/' do
  erb :index
end

get '/' do
  erb :layout
end

get '/poemas' do
  erb :'poemas'
end

get '/vos' do
  erb :'vos'
end

get '/yo' do
  erb :'yo'
end

get '/nosotros' do
  erb :'nosotros'
end
