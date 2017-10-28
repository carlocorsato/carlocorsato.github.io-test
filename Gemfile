source "https://rubygems.org"

gem 'jekyll'

gem 'github-pages'

group :jekyll_plugins do
  gem 'jekyll-feed'
  gem 'jekyll-gist'
  gem 'jekyll-sitemap'
end


require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)
