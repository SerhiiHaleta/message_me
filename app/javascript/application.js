// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

import * as jquery from "jquery"
import "semantic-ui" 

const scroll_bottom = () => {
  if ($("#messages").length > 0) {
    $("#messages").scrollTop($("#messages")[0].scrollHeight)

  }
}

const submit_message = () => {
  $("#message_body").on('keydown', function(e) {
    if (e.keyCode == 13) {
      $('button').click();

      e.target.value = "";
    }
  });
}


$(document).on("turbo:load", () => {
  $(".ui.dropdown").dropdown();
  $('.message .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade');
  });
  submit_message();
  scroll_bottom();
});
import "channels"
