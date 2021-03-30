// Menu 
function openMenu (){
    document.getElementById('mobile-menu').style.width="100%";
}

function closeMenu (){
    document.getElementById('mobile-menu').style.width="0";
}

// smooth scrool 
$('.menu-container ul li a, .next-icon a').on('click', function(){
    $('html, body').animate({
        scrollTop:$($.attr(this, 'href')).offset().top
    }, 2000 );
    return false
});


// wow  
new WOW({
    mobile:       true, 
}).init();


// mixitup

var mixer = mixitup('.work-grid');