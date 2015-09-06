// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require semantic_ui/semantic_ui
//= require_self
//= require_tree .
//= require turbolinks

$(document)
    .ready(function () {

        $('#m_btn').on('click', function () {
            $('#m_menu').sidebar('toggle');
        })
        //highlight top menu element based on page number embedded in the hidden which_page div
        var menu_item_index = $('div[which_page]').attr('which_page');
        $('#menu a:eq(' + menu_item_index + '), #m_menu a:eq(' + menu_item_index + ')').addClass('active');

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