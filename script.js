$(document).ready(function () {
  console.log("jQuery is ready!");

  $("#name").text("Madiyar");
  $("#headline").html("Future <b>dev_ops</b> developer");
  $(".intro").text("I am a student and I like dogs.");
  $("h2").css("color", "green");

  $("#light").click(function () {
    $("body").css({ background: "white", color: "black" });
  });
  $("#dark").click(function () {
    $("body").css({ background: "#222", color: "white" });
  });

  $("#hide").click(function () {
    $("#status, #facts").hide();
  });
  $("#show").click(function () {
    $("#status, #facts").show();
  });
  $("#toggle").click(function () {
    $("#status, #facts").toggle();
  });

  $("#fadein").click(function () {
    $("img").fadeIn();
  });
  $("#fadeout").click(function () {
    $("img").fadeOut();
  });
  $("#fadetoggle").click(function () {
    $("img").fadeToggle();
  });

  $(".head").click(function () {
    $(this).next().slideToggle();
  });
  $("#open").click(function () {
    $(".box").slideDown();
  });
  $("#close").click(function () {
    $(".box").slideUp();
  });

  $("#add").click(function () {
    var skill = $("#newskill").val().trim();
    if (skill == "") {
      $("#error").text("Please enter a skill");
    } else {
      $("#error").text("");
      $("#list").append("<li>" + skill + "</li>");
      $("#newskill").val("");
    }
  });
  $("#prepend").click(function () {
    var skill = $("#newskill").val().trim();
    if (skill == "") {
      $("#error").text("Please enter a skill");
    } else {
      $("#error").text("");
      $("#list").prepend("<li>" + skill + "</li>");
      $("#newskill").val("");
    }
  });
  $("#remove").click(function () {
    $("#list li:last").remove();
  });

  var changed = false;
  $("#changelink").click(function () {
    if (changed == false) {
      $("#social").attr("href", "https://linkedin.com").text("LinkedIn");
      changed = true;
    } else {
      $("#social").attr("href", "https://github.com").text("GitHub");
      changed = false;
    }
  });

  $("#username").on("input", function () {
    $("#outname").text($(this).val());
  });
  $("#useremail").on("input", function () {
    $("#outemail").text($(this).val());
  });

  var opened = false;
  $("#animate").click(function () {
    $(".fill").each(function () {
      if (opened == false) {
        $(this).animate({ width: $(this).data("level") + "%" }, 1000);
      } else {
        $(this).animate({ width: "0%" }, 1000);
      }
    });
    opened = !opened;
  });
});
