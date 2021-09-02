# README

## Steps to reproduce the bug

1.  clone the app, run `rails db:create`, and `rails s`
2. navigate to `http://localhost:3000/test_models/index`
3. Click the `new` link to load the form
4  Click `cancel` to dismiss the form
5. click the `new` link again. The form is not loaded the second time, demonstrating the bug.
6. inspect the turbo-frame with id="test_model_form" and remove the `src` attribute value.
7. click the `new` link again, the form should load.

## How the demo app was built

`rails new TurboBugDemo`
Add turbo-rails and stimulus-rails to Gemfile
`bundle install`
`rails turbo-rails:install`
`rails stimulus-rails:install`

Generated controllers and views, added stimulus controller, etc.



