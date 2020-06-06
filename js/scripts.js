$(document).ready(function () {
    $('#mycarousel').carousel({ interval: 2000 });

    // function to be executed when the pause/play button is clicked
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });

    // function to be executed when the play button is clicked
    // $('#carousel-play').click(function () {
    //     $('#mycarousel').carousel('cycle');
    // });

    // function for opening the Reserve Modal
    $("#reserveModalButton").click(function () {
        $("#reserveModal").modal('show');
    });

    // function for oepning the Login Modal
    $("#loginButton").click(function () {
        $("#loginModal").modal('show');
    });
});