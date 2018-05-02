
$('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});


$(document).ready(function(){
    $(".drop").hide();
    $(".icon").click(function(){
        $(".drop").slideToggle("slow");
    });
});