page "projects.html", layout: "no_container"

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

configure :development do
  activate :livereload
end

activate :directory_indexes

ignore "/archives"
ignore "/billjames"
