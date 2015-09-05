# Semantic-UI-Rails

####[Semantic-UI](www.semantic-ui.com) is one of the newest and most promising user interface toolkits.  
```
It's beautiful, mobile responsive, and provides many amazing UI widgets gracefully.  
Theming support enables sites to have their own visually unique, yet consistent look and feel.
```

By itself, Semantic-UI is a set of CSS/LESS, Javascript/JQuery libraries that you include in your project.  You use Semantic-UI by writing special (and quite elegant) HTML/CSS and calling the appropriate Javascript/JQuery routines. 

1. This **README** describes how to add Semantic-UI to a new or existing Rails app.  
2. This **repo** contains a new Rails 4.2.3 app with several Semantic-UI examples integrated into routes, controller, helper, layout and views.  You can fork this repo and be running immediately.  

![Semantic UI screenshot] (https://github.com/iMikie/Semantic-UI-Rails/blob/master/SUI_screenshot.png)

You need to know HTML-CSS-Javascript and JQuery to use Semantic-UI.   

Lawrence Turton has a non-rails [tutorial](https://webdesign.tutsplus.com/courses/getting-started-with-semantic-ui) over at Tuts.

If you liked this repo, please drop me a note.  I'm new to the Rails and Semantic communities.  There are many features of Semantic-UI I haven't tried yet.  If you try them before I do, please send me an email or even better, a pull request.

Thanks, <br>
Michael Farr <br>
*Tiburon CA, Sept 2015*

michaelmfarr at gmail dot com <br>
mikefarr at mac dot com

---


## Adding Semantic-UI to Rails
Start with a new or used Rails app.  I'm on 4.2.3, using Ruby 2.1.2 on a Macintosh. 

Add the following lines to your Gemfile.  

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
To some extent, the order of these lines is important so don't change them unless you know what you are doing. 

* less-rails-semantic_ui  
There are several gems out there for semantic UI.  I chose Semantic-UI-Rails-LESS because it appears to be created by the authors of Semantic-UI,.  It is updated frequently and appears to use Travis CI, which if we are lucky will automatically build new versions as the main Semantic-UI library is updated.  This is the only gem I could find that allows theming.  
