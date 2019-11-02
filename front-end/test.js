$('[data-toggle="popover-click"]').popover({
  html: true,
  trigger: "click",
  placement: "bottom",
  content: function() {
    return $("#popover_content_wrapper").html();
  }
});

$(document).on("click", "#confirm", function() {
  $('[data-toggle="popover-click"]').popover("hide");
  toastr.info('You clicked "yes"!');
});

$(document).on("click", "#deny", function() {
  $('[data-toggle="popover-click"]').popover("hide");
  toastr.error('You clicked "no"!');
});
