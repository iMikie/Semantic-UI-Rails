# Semantic-UI-Rails

[Semantic-UI](www.semantic-ui.com) is one of the newest and most promising user interface toolkits. It's designs are beautiful and it provides a remarkable set of widgets.  But what exactly is it?

---
[Semantic-UI](www.semantic-ui.com) is a set of CSS/LESS, Javascript/JQuery libraries that you include in your project.  You make use of Semantic-UI by adding  special CSS classes to your HTML tags and calling appropriate Javascript/JQuery routines.
![Semantic-UI Sidebar](https://github.com/iMikie/Semantic-UI-Rails/blob/master/readme_images/sidebar-small.png).
---

This **README** describes step-by-step how to add Semantic-UI to a new Rails app.  Next we'll build the UI for the example in the screenshot below.  In doing so we'll take advantage of Semantic-UI's rather elegant support for mobile responsive design and client side validation.  If you find you need more help with Semantic-UI itself, Lawrence Turton has a very good (but non-Rails) [ tutorial](https://webdesign.tutsplus.com/courses/getting-started-with-semantic-ui) over on Tuts which I can recommend highly.  

This **repo** contains the Rails 4.2.3 app as described in this readme.  You can fork this repo and be running immediately. (I use the [Postgres App](http://postgresapp.com) for Macintosh. (You just download the file, move it to `applications`, double click and you have a Postgres server running.)  If you use sqlite instead, then replace the pg gem with the equivalent sqlite3 gem in the Gemfile before you `rake db:create` and `rails s`.)

![Semantic UI screenshot] (https://github.com/iMikie/Semantic-UI-Rails/blob/master/readme_images/SUI_screenshot.png)

I'm trying out a new instructional convention here as I expect this may grow to several examples: one example per HTML page with separate CSS and JS files for each example. Thus, to find the CSS and JS that work on `example_foo.html.erb`, just look for `example_foo.css` and `example_foo.js`. 

You need to know HTML, CSS, Javascript and JQuery to use Semantic-UI. Semantic-UI uses the LESS preprocessor for CSS but you don't need to know LESS.

If you liked this repo, please drop me a note. Though I've been a programmer for a while, I'm new to the Rails and Semantic-UI communities. I've written the first part of this tutorial at a very basic level. It only takes a second to skip a line of explanation you didn't need whereas a line you really did need but is missing can leave you dead in the water.  I found myself there a lot.  What keeps me from trying bleeding edge stuff is the dread that I'll never even get it running.  

There are many features of Semantic-UI I haven't tried yet.  If you try them before I do, please send me an email or even better, add it to a new page (with it's own CSS and JS files) and send me a pull request
Happy coding, <br>
Michael Farr <br>
*Tiburon CA, Sept 2015*

michaelmfarr at gmail dot com <br>
mikefarr at mac dot com

---


## Adding Semantic-UI to Rails

 Let's get started.

Start with a new or used Rails app.  I'm using Rails 4.2.3, Ruby 2.1.2, and the [postgres app](http://postgresapp.com/) on a Macintosh. 

Add or make sure the following lines are in your Gemfile.  Some will likely already be there, others not.

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

###Let's get started!

Let's add some semantic-ui to our Rails app!  Our example website will have a nice background image, a menu to take us to 4 different pages and the first page will be our user signup example. Later, we'll also create a vertical menu to demonstrate mobile responsive design.

Let's create the 4 blank web pages.  Create a new folder inside the views, **`views/semantic**` and create 4 files there

```sh
cd app/views
mkdir semantic
cd semantic
touch  signup.html.erb example_2.html.erb example_3.html.erb example_4.html.erb
```

Let's create routes for those pages in `routes.rb`:

```ruby
  get '/signup' => 'semantic#signup'
  get '/example_2' => 'semantic#example_2'
  get '/example_3' => 'semantic#example_3'
  get '/example_4' => 'semantic#example_4'
  ```
  Let's add a **`semantic_controller file`** in **`app/controllers`** with the contents:
  ```ruby
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
Add the following line to `signup.html.erb` so we can see that the file is loading.
```html
<h1> Hello Semantic World </h1>
```
In the terminal run
```sh
bin/rake db:create
rails s
```
Now in your browser go to URL **`http://localhost:3000**` or whatever port the output of the `rails s` command indicates.

##Create a background layout
Let's create the header layout that will appear on every page. We are going to create a menu with four items, each one will take the user to one of our 4 pages.

Go to the [Semantic-UI](www.semantic-ui.com) website.  On the top-left of the page click the menu button to slide out the documentation panel. Take a look at collections/menu.  This extremely long page shows the amazing possibilities available with Semantic-UI just for menus.  If you click on `<>` on the page, it will show you the code for the nearby example.  

Semantic-UI works by defining meaningfully named CSS classes that you can add to HTML tags, mostly divs, to create what you want.  Sometimes you need to add a little javascript such as when you want the selection of a menu item to call one of your own javascript functions.  You can also use CSS to add little bits of styling as needed.  We'll see this in action shortly.  

Edit the `application.html.erb` file to put the following code after the `<body>` tag:

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
I've created a `<header>` div to surround the HTML that will appear on each page,.  It's followed by a Rails image tag for the background.  Use whatever image you like.  Then we have a <div> that Semantic-UI will turn into a menu bar.  You should be able to find and figure out what "ui pointing menu inverted fluid four item" does by browsing  on the Semantic-UI  website menu page.  Basically, you find something you want in the Semantic-UI docs, click `<>` and figure out what you need to do to recreate it as you would like on your web page.  

In the menu code above there are four links to our four web pages.  I wrote the link to the  `/signup` page in standard web format.  For the second menu item I used a Rails path variable, and for links 3 and 4 I use full Rails `link_to` syntax.  They all do the same thing.  You can decide which you like best.  

Now, if you go back to the main Semantic_UI slide out menu and select Elements/icon, you can see the vast number of built-in icons provided.  If you click on the `Definition` menu item at the top of the page you browse examples and sample code.  That's what I did to create the nice round, red `Semantic-UI-Rails` logo at the center of the page.

###Add some styling
We also need to go into the `application.css` file and add the following CSS:

**application.css**
```css
body {
    padding: 0;
    margin: 0;
    /*width: 100%;*/
    /*height: 100%;*/
    font-family: "Helvetica Neue", arial, sans-serif;
    /*background: url(Waterfall-HD-Wallpaper1.jpg) no-repeat center center fixed;*/
    -webkit-font-smoothing: antialiased; //a modifier for fonts on macintosh I like 
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
This is setting some basic things like putting the background image behind everything else, `z-index`, setting some max widths and padding, how the background behaves when the window is resized and leaving space for our individual pages.  Feel free to experiment.

Hit reload on the browser and you should now see your menu and logo.  Pretty cool for such a few lines of code, huh?

##Adding a mobile menu
Let's add a menu specifically for the case of our website being viewed on a mobile phone.  Let's add a slide out menu like the one the Semantic-UI website has. Above our #header div, add the following div:

```erb
<div id="m_menu" class="ui floating sidebar inverted vertical  menu">
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
```
To understand what's going on here, look up the examples on the menu page on semantic-ui.com.  Take a look at sidebar and inverted and the other classes on the id="m_menu" div.  The menu items themselves are identical to the main menu so let's refactor these into a partial. Take the four links and put them in a new file inside  `app/views/layouts`:

**`_nav_linkshtml.erb`**
```
<a href="/signup" class="item">      <!--Using standard web syntax -->
  <i class="menu icon"></i> User Signup
</a>
<a href=" <%= "#{example_2_path}" %>" class="item"> <!-- Using Rails path helper -->
  <i class="square outline icon"></i> Example 2
</a>
<%= link_to "<i class='browser icon'></i> Example 3".html_safe, example_3_path, class: "item" %>
<%= link_to "<i class='cubes icon'></i> Example 4".html_safe, example_4_path, class: "item" %>
```
Then inside `application.html.erb` replace those lines both times they appear with the following line:
``` ruby
  <%= render partial: "layouts/nav_links" %>
```

A sidebar looks for the items it needs to push aside to be wrapped in a div with the class `pusher`.  We'll also need a button that will take the place of our main menu on the smaller screen of a phone that we can push to show the sidebar menu.  We'll also need a smaller version of our logo. Here's what your complete `application.html.erb` file should look like:

**`application.html.erb`**

```html
<!DOCTYPE html>
<html>
<head>
  <title>TestSemantic</title>
  <%= stylesheet_link_tag 'application', media: 'all', 'data-turbolinks-track' => true %>
  <%= javascript_include_tag 'application', 'data-turbolinks-track' => true %>
  <%= csrf_meta_tags %>
</head>
<body>
<div id="m_menu" class="ui floating sidebar inverted vertical  menu">
  <a href="/signup" class="item">
    <i class="menu icon"></i> User Signup
  </a>
  <a href=" <%= "#{signup_path}" %>" class="item">
    <i class="square outline icon"></i> Buttons
  </a>
  <%= link_to "<i class='browser icon'></i> Collections".html_safe, collections_path, class: "item" %>
  <%= link_to "<i class='cubes icon'></i> Modules".html_safe, modules_path, class: "item" %>
</div>

<div class="pusher">
  <div id="header">

    <%= image_tag("Waterfall-HD-Wallpaper2.jpg", id: "bkgnd") %>

    <div id="mainHead">
      <div id="menu" class="ui pointing menu inverted fluid four item">
        <a href="/signup" class="item">      <!--Using standard web syntax -->
          <i class="menu icon"></i> User Signup
        </a>
        <a href=" <%= "#{signup_path}" %>" class="item"> <!-- Using Rails path helper -->
          <i class="square outline icon"></i> Buttons
        </a>
        <!--Now use full Rails link_to syntax with Semantic-UI-->
        <%= link_to "<i class='browser icon'></i> Collections".html_safe, collections_path, class: "item" %>
        <%= link_to "<i class='cubes icon'></i> Modules".html_safe, modules_path, class: "item" %>
      </div>
      <button id="m_btn" class="ui labeled icon button black">
        <i class="list layout icon"></i>
        Menu
      </button>
    </div>

    <!--Note that everything in the body must be in the "pusher"-->
    <h2 id="News" class="ui center aligned icon  inverted huge header">
      <i class="circular newspaper red inverted icon "></i>

      <div class="content red">
        Semantic-UI for Rails
      </div>
    </h2>
    <h2 id="smallNews" class="ui center aligned header inverted">
      <i class="newspaper inverted icon "></i>

      <div class="content">
        Semantic-UI for Rails
      </div>
    </h2>
  </div>

  <%= yield %>

</div>
<!--end of pusher -->
</body>

</html>
```

###Adding the media queries

If the screen is larger than 630 pixels in width, I want to hide the mobile menu button and, if it's displayed, the mobile menu as well: the user could have rotated a tablet or resized the window on a laptop.  If the screen is smaller that 630px, then I want to display the mobile button and hide the regular menu.  

Add the following media queries to the `application.css` file:
```css
#m_btn {
    display: none; /* m_btn must hidden initially and placed before its media query in this file */
}
@media all and (min-width: 631px) {
    #smallNews {
        display: none;
    }
}
@media all and (max-width: 630px) {
    #menu {
        display: none;
    }

    #News.ui.center.aligned.icon {
        display: none;
    }

    #smallNews {
        display: inline-block;
        margin-left: 35%
    }

    #m_btn {
        display: inline-block;
        /*note that we can't center here because it's an inline-block, must center from the parent*/
    }
}
```

The first query will disappear the small news item if the screen is larger than mobile size.  The second will hide the main menu when the screen is 630px or less, as well as hiding the large logo, and displaying the mobile menu button and small logo.

Refresh your browser and you'll see there's just a couple more things to do. 

###Adding some Javascript
We need to add some JQuery to attach a toggle action to our mobile menu button so that it will toggle the slide out menu when clicked.  We also need some javascript to hide the slide out menu if our screen is resized to be greater than, say, 730px.  We need javascript here and not a media query because the slide out menu is too complex and we have to call it's `hide` method explicitly.  Add this javascript to your `application.js` file:

```javascript
$(document)
    .ready(function () {

        $('#m_btn').on('click', function () {
            $('#m_menu').sidebar('toggle');
        })

        // when goto > 631px hide the mobile sidebar
        var mq = window.matchMedia('all and (min-width: 631px)');
        mq.addListener(function (changed) {
            if (changed.matches) {               // if the width of browser is more then 631px...
                $('#m_menu').sidebar('hide');    //have to call hide because setting css of display: isn't enough
            }
        });
    }
)
;
```

Now there's a couple of more tweaks I'd like to make: reducing the fontsize on the menu logo text as the user reduces the width of the sindow and and setting a margin of 10% on the top of the main header when the window is very wide.  Add the following to the `application.css` file:

```css
@media all and (max-width: 730px) {
    #News {
        font-size: 1.7em;
    }
}
@media all and (max-width: 900px) {
    #mainHead .News {
        margin-top: 10%;
    }
}
```
###Try it out
Now reload the browser and try it out.  Shrink the width of the window until the menu disappears.  Next, click the mobile menu button and watch the slideout menu do its thing.  Select a menu item and it disappears.  

###Add menu highlighting
I'd like the menu item of the page we're on to be highlighted, thus the signup menu item should be selected if we are on the signup page.  

Let's put a hidden <div> on each page that contains the item number of the menu item we need to highlight, 0 for the signup page, 1,2,3 for the other pages.

```HTML
<div which_page="0" hidden="true"></div>
```
Add the following to the `application.js` file right after the #m_btn callback. 
```javascript
        //highlight top menu element based on page number embedded in the hidden which_page div
        var menu_item_index = $('div[which_page]').attr('which_page') - 1; //DOM siblings are zero indexed
        $('#menu a:eq(' + menu_item_index + '), #m_menu a:eq(' + menu_item_index + ')').addClass('active'); 
```
The variable `menu_item_index` will be set to the number of this page and used to add the `active` attribute of the mobile and desktop menus.

##Now for the the user signup page

First, start by checking out [Form](http://semantic-ui.com/elements/form.html) on the Semantic-UI's website.  Click `<>` to see the HTML for the first example.  

We'll put this form in a [segment](http://semantic-ui.com/elements/segment.html). If you need to surround an element or group a set of elements, use a segment. 

In the case of a form, you need only add the `segment` class to the form tag.  In general, you can mix and match the SUI CSS classes.  Unlike a Java parameter which might be a pointer to a data type with a particular length and format, these CSS classes are extremely high-level parameters.  One CSS class might have the meaning "put everything in this `<div>` inside a raised border and compute whatever you need to to make that happen."   Rather than being a call to run some fragile piece of code, these extremely high level parameters have a meaning, hence the name "Semantic-UI". 

In our form we'll have three `<div>` tags that will each contain two fields.  To tell SUI to group them this way we simply add the two CSS classes `two fields` to a `<div>` and have that div surround the two fields and their labels.  

Look up the SUI classes used below on the SUI website to get a better idea of how you might use them, then add the following code to your `signup.html.erb` file.  Note the line generating the `authenticity_token`.  You'll have to have that with any Rails form to guard against a [cross-site forgery attack](cross-site-request-forgery-csrf).  More about that later. 

**`signup.html.erb`**
```html
<div which_page="1" hidden="true"></div>
<form id="signup" class="ui form segment raised">
  <div id="to-slide-up">
    <p>Let's go ahead and get you signed up.</p>
    <input name="authenticity_token" value="<%= form_authenticity_token %>" type="hidden">
    <div class="two fields">
      <div class="field">
        <label>First Name</label>
        <input placeholder="First Name" name="first-name" type="text">
      </div>
      <div class="field">
        <label>Last Name</label>
        <input placeholder="Last Name" name="last-name" type="text">
      </div>
    </div>
    <div class="two fields">
      <div class="required field">
        <label>Username</label>
        <input placeholder="Username" name="username" type="text">
      </div>
      <div class="required field">
        <label>Email</label>
        <input type="email" placeholder="you@example.com" name="email">
      </div>
    </div>
    <div class="two fields">
      <div class="required field">
        <label>Password</label>
        <input type="password" placeholder="password" name="password">
      </div>
      <div class="required field">
        <label>Confirm Password</label>
        <input type="password" placeholder="confirm password" name="password-confirm">
      </div>
    </div>
  </div>
 <div id="terms" class="ui segment">
    <div class="inline required field">
      <div class="ui checkbox">
        <input type="checkbox" name="terms">
        <label>I agree to the Terms and Conditions</label>
      </div>
      <div id='submit1' class="ui button red submit icon labeled ">
        <i class="icon edit"></i>
        Submit
      </div>
    </div>
  </div>
  <div class="ui segment inverted green center aligned">
    <h1 class="ui header">
      <i class="icon checkmark sign"></i>
      Thank you!
    </h1>
  </div>
</form>
```

###Some simple styling
Notice that I put an inverted green segment containint a "Thank you!" message.  We'll swap this in for the submit button when the user submits.  Normally in Rails we would respond from the server but this is just a UI example and we're not really submitting anything.  I'd like to do an example wherein I connect this all up to Rails. For now, create a file, `signup.css`, in the `app/assets/stylesheets` folder with the following content:
**`signup.css`**
```css
#signup {
    margin: 1em;
}

.ui.segment.inverted.green {
    width: 100%;
    display: none;
}
```
Go ahead and reload your page.  You should see something like this:

![User signup screenshot] (https://github.com/iMikie/Semantic-UI-Rails/blob/master/readme_images/signup_screenshot_1.png)


###Adding validation
It makes sense to offload as much of the work of validating form fields to the client side as possible.  It's faster and more interactive for the user.  You still need to perform validation on the server side to guard against malicious attacks but it doesn't have to be an interactive user experience.

SUI defines a format for writing validation rules and provides a rich set of built-in tests you can draw from.  For example, SUI knows how to validate an email address, a credit card number, a URL, and provides more basic building blocks like `contains`, `regEx[expression] and many more. You pass SUI a hash of hashes that indicate which rules apply to which fields in the form.  Those field variables are referenced by id tag, name tag or data-validate tag. Go take a look at [Validation](http://semantic-ui.com/behaviors/form.html) on the Semantic_UI website.  The support is really quite amazing.  

Validations is one of those areas I had to really get in there with DevTools to get to work.  "Oh, that's how they're calling it..."  Remember that you can use DevTools to live deconstruct the Semantic-UI website itself.  It's just a new framework.  

First let's create a variable, `validations`.  This is the "hash of hashes" that contains the rules and indicates to which fields they apply.  Next, let's create a `settings` variable through which we can indicate that validation to act through the offending fields rather than by placing error messages in a list at the top or bottom of the screen.  

Next we need to submit the form, or at least show you how we would do that.  As part of our `settings` variable we can set callbacks forthe success and failure of validation. In case of success I'm just going to slide up the form which is not needed anymore and make the "Thank you!" div visible.

Finally, to trigger the validation we initialize our callbacks by calling the `form` method of our SUI form.

**`signup.js`**

```javascript
$(document)
    .ready(function () {
        var validations = {
            firstName: {
                identifier: 'first-name',
                rules: [
                    {type: 'empty', prompt: 'Please enter your first name'}
                ]
            },
            lastName: {
                identifier: 'last-name',
                rules: [
                    {type: 'empty', prompt: 'Please enter your last name'}
                ]
            },
            username: {
                identifier: 'username',
                rules: [
                    {type: 'empty', prompt: 'Please enter a username'},
                    {type: 'length[5]', prompt: 'Your username must be at least 5 characters'}
                ]
            },
            email: {
                identifier: 'email',
                rules: [
                    {type: 'email', prompt: 'Please enter a valid e-mail'}
                ]
            },
            password: {
                identifier: 'password',
                rules: [
                    {type: 'empty', prompt: 'Please enter a password'},
                    {type: 'length[6]', prompt: 'Your password must be at least 6 characters'}
                ]
            },
            passwordConfirm: {
                identifier: 'password-confirm',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please confirm your password'
                    },
                    {
                        identifier: 'password-confirm',
                        type: 'match[password]',
                        prompt: 'Please verify password matches'
                    }
                ]
            },
            terms: {
                identifier: 'terms',
                rules: [
                    {
                        type: 'checked',
                        prompt: 'You must agree to the terms and conditions'
                    }
                ]
            }
        };

        var settings = {
            inline: true,
            onFailure: function () {
                return false;
            },
            onSuccess: function () {
                //    here is the submit
                $('#to-slide-up').slideUp(400);
                $('#terms').hide();
                $('.ui.segment.inverted.green').show();
                return false;
            }
        };

        $('.ui.form').form(validations, settings); //note the '.' at the beginning.
    }
);
```
OK, that's pretty much it.  If you actually want to use this form you should not `return false;` from the onSuccess callback.  You'll need to add a route and handler for it.   
**`routes.rb`**
```ruby
 Rails.application.routes.draw do
  root 'semantic#signup'
  get '/signup' => 'semantic#signup'
  post '/signup' => 'semantic#create'
  get '/example_2' => 'semantic#example_2'
  get '/example_3' => 'semantic#example_3'
  get '/example_4' => 'semantic#example_4'
end
```
Our controller would then look like this:

**`semantic_controller.rb`**
```ruby
class SemanticController < ApplicationController
  def signup
    render :signup
  end

  #POST /signup, here's where to process our signup form
  def create
    puts params
    #redirect_to signup
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

The solution above leaves the question of how you'd really integrate Semantic-UI with Rails-Resources open just a bit.  You'd want your `user` parameters to be returned from the form in a `user` hash.  You can hand code that, but you'd really like to combine Semantic-UI with Rails form_for helpers and that is the subject of the next tutorial.

Thanks and congradulations for getting this far.

Mike Farr
September 2015
Tiburon, CA


