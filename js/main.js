$(function () {
    $(window).scroll(function() {
        $('.get-price-title').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
           
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInLeft");
            }
        });
    });

    // $(window).scroll(function() {
    //     $('.noWait-benefits-item').each(function(){
    //         var imagePos = $(this).offset().top;

    //         var topOfWindow = $(window).scrollTop();
    //         if (imagePos < topOfWindow+650) {
    //             $(this).addClass("fadeIn");
    //         }
    //     });
    // });
})


$( ".first-link" ).click(function(e) {
    e.preventDefault();
    $(".notif").removeClass("notif-close");
    $(".notif.second").addClass("notif-close");
    $(".notif.third").addClass("notif-close");
    $(".notif.fourth").addClass("notif-close");
    $(".notif.first").toggleClass("notif-show");
});
$( ".second-link" ).click(function(e) {
    e.preventDefault();
    $(".notif").removeClass("notif-close");
    $(".notif.first").addClass("notif-close");
    $(".notif.third").addClass("notif-close");
    $(".notif.fourth").addClass("notif-close");
    $(".notif.second").toggleClass("notif-show");
});
$( ".third-link" ).click(function(e) {
    e.preventDefault();
    $(".notif").removeClass("notif-close");
    $(".notif.second").addClass("notif-close");
    $(".notif.first").addClass("notif-close");
    $(".notif.fourth").addClass("notif-close");
    $(".notif.third").toggleClass("notif-show");
});
$( ".fourth-link" ).click(function(e) {
    e.preventDefault();
    $(".notif").removeClass("notif-close");
    $(".notif.second").addClass("notif-close");
    $(".notif.third").addClass("notif-close");
    $(".notif.first").addClass("notif-close");
    $(".notif.fourth").toggleClass("notif-show");
});

$( ".notif-close-btn").click(function(e) {
    e.preventDefault();
    $(".notif").removeClass("notif-show");
    $(".notif").addClass("notif-close");
});

const tl = new TimelineMax();
const toAnim = document.querySelector(".offer-content");
tl.fromTo(toAnim,1,{transform:"translateX(100%)"},{transform:"translateX(0%)"});


function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    // document.querySelector(".header-timetable").style.opacity = "1";
    // document.querySelector(".header-calls").style.opacity = "1";
    // document.querySelector(".header-btn").style.opacity = "1";
    // document.querySelector(".header-logo").style.opacity = "1";
    $(".sidenav").find("div").css('display','block');
    $(".sidenav").find("div").addClass("fadeInLeft");
    $("body").addClass("noScroll");
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.querySelector(".header-timetable").style.opacity = "0";
    // document.querySelector(".header-calls").style.opacity = "0";
    // document.querySelector(".header-btn").style.opacity = "0";
    // document.querySelector(".header-logo").style.opacity = "0";
    $(".sidenav").find("div").removeClass("fadeInLeft");
    $(".sidenav").find("div").css('display','none');
    $("body").removeClass("noScroll");
}


function revealOnScroll() {
  let scrolled = $(window).scrollTop();


  $(".noWait-benefits-item").each(function() {
    var current = $(this), 
      w_height = $(window).height(), 
      offsetTop = current.offset().top; 
   
    if (scrolled + w_height - 50 > offsetTop) {
      current.addClass("fadeInLeft");
    } else {
      current.removeClass("fadeInLeft");
    }
    
  });
}
$(window).on("scroll", revealOnScroll);


function up() {
	$("body,html").animate({
        scrollTop:0
    }, 2300);
    return false;
}
