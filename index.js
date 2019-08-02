var opening = $('.opening');
var info = $('#Sad');
var moreinfo = $('h2');
var button = $("button");
var input = $('.name').val();

button.on("click", help);

  function help() {
    var input = $('.name').val();
    opening.text(`Send help ${input}`);
    info.text("I'm so tired");
    button.css('backgroundColor','purple');
  }
