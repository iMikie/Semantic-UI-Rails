# Semantic-UI-Rails

Thanks for stopping by.  

[Semantic-UI](www.semantic-ui.com) is one of the newest and most promising user interface toolkits. 

This **README** describes step-by-step how to add Semantic-UI to a new Rails app and then use it to build the UI for the example shown in the screenshot below.  This example also takes advantage of Semantic-UI's support for mobile responsive design and its surprisingly awesome validation support.

This **repo** contains the Rails 4.2.3 app as described in this readme.  You can fork this repo and be running immediately. (FYI, I use Postgres for my database and the gemfile will include the Postgres gem.  If you use sqlite then remove the pg gem from the gemfile and add in the gem for sqlite3.  Remember to do  rake db:create before rails s.)

I try (intentionally) to keep to the following convention here: one semantic-ui example per web page.  If that page is named, say, `example_foo.html.erb` then the css for it can be found in `example_foo.css` and the javascript in `example_foo.js`. This is to make it easy to figure out who does what to whom.    

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
gem 'jquery-turbolinks'

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

###Let's started!

Let's add some semantic-ui to our Rails app!  Our example website will have a nice background image, a menu to take us to 4 different pages and the first page will be our user signup example. Later, we'll also create a vertical menu to demonstrate mobile responsive design.

Let's create the 4 blank web pages.  Create a new folder inside the views, **`views/semantic**` and create 4 files there

```sh
cd app/views
mkdir semantic
cd semantic
touch  signup.html.erb example_2.html.erb example_3.html.erb example_4.html.erb
```

Let's create routes for those pages in `routes.rb`:

```
  get '/signup' => 'semantic#signup'
  get '/example_2' => 'semantic#example_2'
  get '/example_3' => 'semantic#example_3'
  get '/example_4' => 'semantic#example_4'
  ```
  Let's add a **`semantic_controller file`** in **`app/controllers`** with the contents:
  ```
  class SemanticController < ApplicationController
  
  def signup
    render :signup
  end

  def example_2
    render :example_2
  end

  def example_3
    render :example_3
  end

  def example_4
    render :example_4
  end
end
```
##Let's run this thing
Edit signup.html.erb and put in a line of text so we can test that the file is loading.
```
<h1> HeSemantic World </h1>
```
in the terminal run
```
bin/rake db:create
rails s
```
Now in your browser go to URL **`http://localhost:3000**` or whatever port the output of the `rails s` command indicates.

##Create a background layout
Let's create the header layout that will appear on every page. We are going to create a menu with four items, each one will take the user to one of our 4 pages.

Go to the [Semantic-UI](www.semantic-ui.com) website.  On the top-left of the page click the menu button to slide out the documentation panel. Take a look at collections/menu.  This extremely long page shows the amazing possibilities available with Semantic-UI just for menus.  If you click on `<>` on the page, it will show you the code for the nearby example.  

Semantic-UI works by defining meaningfully named CSS classes that you can add to HTML tags, mostly divs, to create what you want.  Sometimes you need to add a little javascript such as when you want the selection of a menu item to call one of your own JS functions.  You can also use CSS to add little bits of styling as needed.  We'll see this in action shortly.  

Edit the `application.html.erb` file to put in the following code after the `<body>` tag:

```html
<div id="header">
  <%= image_tag("Waterfall-HD-Wallpaper2.jpg", id: "bkgnd") %>
  <div id="mainHead">
    <div id="menu" class="ui pointing menu inverted fluid four item">
      <a href="/signup" class="item">      <!--Using standard web syntax -->
        <i class="menu icon"></i> User Signup
      </a>
      <a href=" <%= "#{example_2_path}" %>" class="item"> <!-- Using Rails path helper -->
        <i class="square outline icon"></i> Example 2
      </a>
      <!--Now use full Rails link_to syntax with Semantic-UI-->
      <%= link_to "<i class='browser icon'></i> Example 3".html_safe, example_3_path, class: "item" %>
      <%= link_to "<i class='cubes icon'></i> Example 4".html_safe, example_4_path, class: "item" %>
    </div>
  </div>
  <h2 id="News" class="ui center aligned icon  inverted huge header">
    <i class="circular newspaper red inverted icon "></i>
    <div class="content red">
      Semantic-UI for Rails
    </div>
  </h2>
</div>
```
I've created a `<header>` div to surround the HTML that will appear on each page, and it's followed by a Rails image tag for the background.  Then we have a div that Semantic-UI will turn into a menu bar.  You should be able to find and figure out what "ui pointing menu inverted fluid four item" does by browsing  on the semantic-ui website menu page.  Basically, you find something you want in the Semantic-UI docs, click `<>` and figure out what you need to do to recreate it as you would like on your web page.  

In the code above I have four links to our four web pages.  In the Semantic-UI pages, they'll use basic HTML style links as I've used in the link to the `/signup` page.  For the second menu item I used a standard href but used a Rails path variable, and for links 3 and 4 I use full Rails `link_to` syntax so you can see how they all compare.  They all do basically the same thing.  You can decide which you like best.  

Now, if you go back to the main Semantic_UI slide out menu and select Elements/icon, you can see the vast number of built in icons provided.  If you click on the `Definition` menu item at the top of the page you browse examples and sample code.  That's all I did to create the nice round, red `Semantic-UI-Rails` logo at the center of the page.

###Add some styling
We also need to go into the `application.css` file and add the following CSS:

**application.css**
```
body {
    padding: 0;
    margin: 0;
    /*width: 100%;*/
    /*height: 100%;*/
    font-family: "Helvetica Neue", arial, sans-serif;
    /*background: url(Waterfall-HD-Wallpaper1.jpg) no-repeat center center fixed;*/
    -webkit-font-smoothing: antialiased;
    font-weight: 200;
    background-color: #000;
}

#header {
    position: relative; /* child elements will now reflect the boundries of the parent */
    overflow: hidden;
    padding-bottom: 5em;
}

#mainHead {
    margin: 40px 40px 0px 40px;
    text-align: center; /*center the mobile menu button */
}

#menu {
    max-width: 1024px;
    margin: 0 auto;
}

#bkgnd {
    position: absolute;
    top: -10px;
    width: 100%;
    height: auto;
    z-index: -1;
}
```
This is setting some basic things like putting the background image behind everything else, `z-index`, setting some max widths and padding, how the background behaves when the window is resized and leaving space for our individual pages.  Feel free to experiment. If you don't understand what is going on here, check out Laurence

Hit reload on the browser and you should now see your menu and logo.  Pretty cool for such a few lines of code, huh?

##Adding a mobile menu
Let's add some media queries in case we are on a mobile phone and take advantage of how easy it is to get Semantic-UI to 

