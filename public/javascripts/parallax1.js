
var fensterHoehe = 0;
var balkenHoehe = 500;
var seitenBreite =0;

function bezieheDimensionen() {
    
	fensterHoehe = $( window ).height(),
	seitenHoehe = $( document ).height();
        seitenBreite = $( document ).width();
    $( '.CoverSection' ).css('height', fensterHoehe );
    $( '.FooterSection' ).css('height', fensterHoehe );
    $( '.ContentContainer' ).css('margin-left', -seitenBreite );
}

function verticalParallaxNew(){
    
    //var YPosition = "100% "+ -0 + "px";
    var YPosition = 0;
    
    var balken2 = document.getElementById('balken2');
    var balken4 = document.getElementById('balken4');
    var balken6 = document.getElementById('balken6');
    
    YPosition = "100% " + ((window.pageYOffset / 2) - fensterHoehe ) + "px";
    balken2.style.backgroundPosition = YPosition; 
    
    YPosition = "100% " + ((window.pageYOffset / 2) - fensterHoehe - balkenHoehe) + "px";
    balken4.style.backgroundPosition = YPosition;
    
    YPosition = "100% " + ((window.pageYOffset / 2) - fensterHoehe - 2 * balkenHoehe) + "px";
    balken6.style.backgroundPosition = YPosition;
}

function horizontalParallax(){
    
    var scrollTop = $(window).scrollTop();
    var xPosition = 0;
    
    // content1
    xPosition = window.pageYOffset *3 - balkenHoehe*5.5; // x*2 -1
    if( ( xPosition > -seitenBreite ) && ( xPosition < seitenBreite*0.05 )){ 
        document.getElementById("ContentContainer1").style.marginLeft = xPosition + "px";
    }else if(scrollTop > fensterHoehe + 0.6*balkenHoehe){
        document.getElementById("ContentContainer1").style.marginLeft = seitenBreite*0.05 +"px";
    }
    // content2
    xPosition = window.pageYOffset *3 - balkenHoehe*11.5; // x*4 -1
    if(( xPosition > -seitenBreite) &&( xPosition < seitenBreite*0.05 )){ 
        document.getElementById("ContentContainer2").style.marginLeft = xPosition + "px";
    }else if( (scrollTop > fensterHoehe + 2.5*balkenHoehe) && (1) ){
        document.getElementById("ContentContainer2").style.marginLeft = seitenBreite*0.05 +"px";
    }
    
}

window.addEventListener("scroll",verticalParallaxNew,false);
window.addEventListener("scroll",horizontalParallax,false);

$( document ).ready(function() {
    bezieheDimensionen();
});
$( window ).resize( function() {
	bezieheDimensionen();
});