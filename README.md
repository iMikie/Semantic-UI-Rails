# Semantic-UI-Rails

Thanks for stopping by.  

[Semantic-UI](www.semantic-ui.com) is one of the newest and most promising user interface toolkits. 

This **README** describes step-by-step how to add Semantic-UI to a new Rails app and then use it to build the UI for the example shown in the screenshot below.  This example also takes advantage of Semantic-UI's support for mobile responsive design and its surprisingly awesome validation support.

This **repo** contains the Rails 4.2.3 app as described in this readme.  You can fork this repo and be running immediately. 

I try (intentionally) to keep to the following convention here: one semantic-ui example per web page.  If that page is named, say, `example_foo.html.erb` then the css for it can be found in `example_foo.css` and the javascript in `example_foo.js`. This is to make it easy to figure out who does what to whom.  The code behind the Semantic-UI website is quite elegant but with 25 examples on a page and the javascript for multiple pages lumped together, it's can be tough to track down who does what to whom.  

![Semantic UI screenshot] (https://github.com/iMikie/Semantic-UI-Rails/blob/master/SUI_screenshot.png)

You need to know HTML-CSS-Javascript and JQuery to use Semantic-UI.   

If you liked this repo, please drop me a note. Though I've been a programmer for a while, I'm new to the Rails and Semantic-UI communities.  I've written this for others who are likewise new. I think that many people are afraid of writing to a beginner's level for fear of appearing like a beginner themselves.  No such problem here.  Besides, it's my experience that what keeps you from trying somethingbleeding edge new is the fear that you'll run into a wall and your time will be wasted.  The truth is that it only takes a second for a reader to skip a line of explanation they didn't need whereas a line that was really needed but is missing can leave them dead in the water. 

There are many features of Semantic-UI I haven't tried yet.  If you try them before I do, please send me an email or even better, a pull request and we'll include it here.

Happy coding, <br>
Michael Farr <br>
*Tiburon CA, Sept 2015*

michaelmfarr at gmail dot com <br>
mikefarr at mac dot com

---


## Adding Semantic-UI to Rails

By itself, Semantic-UI is a set of CSS/LESS, Javascript/JQuery libraries that you include in your project.  You use Semantic-UI by writing special (and quite elegant) HTML/CSS and then calling the appropriate Javascript/JQuery routines. 

Start with a new or used Rails app.  I'm using Rails 4.2.3, Ruby 2.1.2, and the [postgres app](http://postgresapp.com/) on a Macintosh. 

Add or make sure the following lines are in your Gemfile.  Some will likely already be there.

```ruby
# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# Semantic UI assets
gem 'therubyracer'a
gem 'less-rails-semantic_ui', '~> 2.0.7.0'
gem 'autoprefixer-rails', '~> 5.2.1.2'
```
####The order of these lines is important so don't change them unless you know what you are doing. 
* **`therubyracer`** <br>
This embeds Google's V8 javascript engine into Ruby. 
* **`less-rails-semantic_ui`**  
There are several gems out there for semantic UI.  I chose [Semantic-UI-Rails-LESS](https://github.com/Semantic-Org/Semantic-UI-Rails-LESS/blob/master/README.md) because it appears to be created by the authors of Semantic-UI.  `'~> 2.0.7.0'` is the most recent version number as of when I wrote this. Work is ongoing and active.  This is the only gem I could find that allows theming.  
* **`utoprefixer-rails`** <br>
This gem is required by **`less-rails-semantic_ui`**.  The Have you seen CSS with lines like: `:-webkit-full-screen a`. That's browser specific CSS code. Autoprefixer is a CSS processor that uses a database which tracks browser specific code and modifies the output CSS. 

Now run bundle in the terminal:
```
    $ bundle install
```
###Adding the Semantic-UI libraries
Now we need to add the javascript, css, and configuration files provided by gem to the appropriate places in Rails. These should go in the `vendor/assets` directory.   Luckily for us the `less-rails-semantic_ui` gem provides a command to do that.  Just execute the following command in your terminal:

````
    $ rails generate semantic_ui:install
```    

Now take a look in the `vendor/assets` folder.  There are javascripts/ and stylesheets/ folders which now contain semantic_ui folders.  There is a config folder inside the `stylesheets/semantic_ui folder` that contains the files you'll need to modify, down the road, to theme Semantic-UI.

###Tell Rails where to find the javascript files.  

Add/make sure the following is in your `app/assets/javascripts/application.js` file.  Note:  this is more specific than what the semantic gem instructions say to do.  This is probably because I'm starting from a new rails app. You can google `jquery_ujs` and `turbolinks` if you need to know more deeply what is going on here.

```javascript
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require semantic_ui/semantic_ui
//= require_self
//= require_tree .
//= require turbolinks
```

###Tell Rails where to find the CSS files

Add/make sure the following is in your app/assets/stylesheets/application.css file.  

Require `semantic_ui/semantic_ui.css` in `app/assets/application.css`:
```css
/*
 *= require semantic_ui/semantic_ui
 *= require_tree .
 *= require_self
 */
```

###Let's create some UI!

Let's add some semantic-ui to our Rails app!  Take a look at our image above.  Our little example website will have a nice background image, a menu to take us to 4 different pages and the first page will be our user signup example. Later, we'll also create a vertical menu to demonstrate mobile responsive design.

-

Eventually all 4 pages in this repo should get filled out with examples so don't be surprised if you fork this repo and find them there and the "example" filenames have been changed to something more descriptive.

-

Let's create 4 blank web pages,  in a new folder, **`views/semantic**`:

```sh
cd app/views
mkdir semantic
cd semantic
touch  signup.html.erb example_2.html.erb example_3.html.erb example_4.html.erb
```

Let's create routes for those pages in `routes.rb`




Now let's add routes for these files: /signup /example_2 /example_3 /example_4
application.html.erb  we'll put a button bar that will take us to our 4 example pages.  This menu 
