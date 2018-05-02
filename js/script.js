
$('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});

$(document).ready(function(){
    $(".icon").click(function(){
        $(".drop").slideToggle("slow");
    });
});