$(".start-button").click(function() {
    $("h1").hide();
    $(".bush").fadeOut("slow");
    $(".hungryporo").show();
    $(".title").text("It's a hungry poro! They get closer to sniff you. It smells the poro snax in your pocket!");
    $(".message-1").show();
    $(".or").show();
    $(".runoption").show();
    $(".start-button").hide();

});

$(".hungryporo").dblclick(function() {
    $(".hungryporo").fadeOut("slow");
    $(".thirdImage").show();
    $(".title").text("It really wants your poro snax! Will you....");
    $(".petoption").show();
    $(".runoption").text("Run away!");
    $("p").hide();

});

$(".petoption").click(function() {
    $(".hungryporo").hide();
    $(".thirdImage").fadeOut("slow");
    $(".fifthImage").show();
    $(".title").text("The poro quickly gobbled the snax! But you hear footsteps behind you...");
    $(".petoption").hide();
    $(".runoption").hide();
    $(".turnoption").show();

});

$(".turnoption").click(function() {
    $(".thirdImage").fadeOut("slow");
    $(".title").text("Braum appears!");
    $(".petoption").hide();
    $(".turnoption").hide();
    $(".braum").show();
    $(".braumtalk").show();
    $(".fifthImage").fadeOut("slow");
    $(".porodance").fadeIn("fast");


});

$(".runoption").click(function() {
    $(".thirdImage").fadeOut("slow");
    $(".hungryporo").fadeOut("slow");
    $(".fourthImage").show();
    $(".title").text("You run away, and the poro makes sad noises. Maybe next time...");
    $("p").hide();
    $(".petoption").hide();
    $(".runoption").hide();

});