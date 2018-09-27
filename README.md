# README

[![CircleCI](https://circleci.com/gh/soumyaveer/rails-react-starter.svg?style=svg)](https://circleci.com/gh/soumyaveer/rails-react-starter)

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

A minimal starting point for applications based on

* Rails 5.2
* PostgreSQL 10
* React v16
* Webpack
* Heroku
* CircleCI
* Rubocop, scss-lint


### Getting Started

* Copy this project or fork this repo.
* Search & replace the following:
  * `rails-react-starter` with `your-app-name`
  * `RailsReactStarter` with `YourAppName`  

### Developing

* Run `rails db:setup` to setup the database.
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
