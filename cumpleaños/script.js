$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var letter = $(".letter");
    var letter_text = $(".words"); // agregar esta línea
  
    envelope.click(function() {
      open();
    });
    btn_open.click(function() {
      open();
    });
    btn_reset.click(function() {
      close();
    });
  
    function open() {
      envelope.addClass("open")
        .removeClass("close");
      letter.addClass("visible");
      letter_text.addClass("show"); // agregar esta línea
    }
  
    function close() {
      envelope.addClass("close")
        .removeClass("open");
      letter.removeClass("visible");
      letter_text.removeClass("show"); // agregar esta línea
    }
  });

    