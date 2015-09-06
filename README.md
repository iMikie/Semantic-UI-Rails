# Semantic-UI-Rails

Thanks for stopping by.

[Semantic-UI](www.semantic-ui.com) is one of the newest and most promising user interface toolkits. 

This **README** describes how to add Semantic-UI to a new Rails app and then shows how to build the example screenshotted (or possibly in video) below.  The example uses mobile responsive design, as well as Semantic's amazing validation support.

This **repo** contains the Rails 4.2.3 app as described in this readme. You can fork this repo and be running immediately.  

![Semantic UI screenshot] (https://github.com/iMikie/Semantic-UI-Rails/blob/master/SUI_screenshot.png)

You need to know HTML-CSS-Javascript and JQuery to use Semantic-UI.   

Lawrence Turton has a non-rails [tutorial](https://webdesign.tutsplus.com/courses/getting-started-with-semantic-ui) over at Tuts.

If you liked this repo, please drop me a note. Though I've been a programmer for a while, I'm new to the Rails and Semantic-UI communities.  I've written this for others who are likewise new. I think that many people are afraid of writing to a beginner's level for fear of appearing like a beginner themselves.  No such problem here.  The truth is that it only takes a second for a reader to skip a line of explanation they didn't need whereas a line that was really needed but is missing can leave them dead in the water. 

There are many features of Semantic-UI I haven't tried yet.  If you try them before I do, please send me an email or even better, a pull request and we'll include it here.

Happy coding, <br>
Michael Farr <br>
*Tiburon CA, Sept 2015*

michaelmfarr at gmail dot com <br>
mikefarr at mac dot com

---


## Adding Semantic-UI to Rails

By itself, Semantic-UI is a set of CSS/LESS, Javascript/JQuery libraries that you include in your project.  You use Semantic-UI by writing special (and quite elegant) HTML/CSS and then calling the appropriate Javascript/JQuery routines. 

Start with a new or used Rails app.  I'm on 4.2.3, using Ruby 2.1.2 on a Macintosh. 

Add/make sure the following lines are in your Gemfile.  

```ruby
# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# Semantic UI assets
gem 'therubyracer'
gem 'less-rails-semantic_ui', '~> 2.0.7.0'
gem 'autoprefixer-rails', '~> 5.2.1.2'
```
####The order of these lines is important so don't change them unless you know what you are doing. 
* therubyracer <br>
This embeds Google's V8 javascript engine into Ruby. 
* less-rails-semantic_ui  
There are several gems out there for semantic UI.  I chose Semantic-UI-Rails-LESS because it appears to be created by the authors of Semantic-UI.  It is updated frequently and appears to use Travis CI, which if we are lucky will automatically build new versions as the main Semantic-UI library is updated.  This is the only gem I could find that allows theming.  
* autoprefixer-rails <br>
Have you seen CSS with lines like: `:-webkit-full-screen a`. That's browser specific CSS code. Autoprefixer is a CSS processor that uses a database which tracks browser specific code and modifies the output CSS. 

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
Let's add some semantic-ui to our 
