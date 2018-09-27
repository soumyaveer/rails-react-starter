# README

A minimal starting point for applications based on

* Rails 5.2
* PostgreSQL 10
* React v16
* Webpack
* Heroku
* CircleCI

### Developing

* run `rails db:setup` to setup the database.
* Run `foreman start -f Procfile.development` to start the app at http://localhost:5000.
* Run `heroku apps:create --app <some-app-name>` to create a Heroku app.
* Run `git push heroku master` to deploy.


```
rails new --database postgresql \
          --skip-active-storage \
          --skip-sprockets \
          --skip-spring \
          --skip-coffee \
          --skip-turbolinks \
          --skip-bootsnap \
          --webpack=react \
          react-rails-starter
```
