56/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var actualPage = 0;
var actualSubPage = 0;
var p =1;
var wk = 1;
var fl = 1;
var cl = 1;
var rw=1;
var fol=1;
var fo=1;
var d=1;
var los=1;

function setDimensions(){
        
    //localStorage.setItem("actualPage", 'feed');
    actualPage = localStorage.getItem("actualPage");
    
    
    if( actualPage === 'feed' ){
        feedClicked();
    }else if( actualPage === 'explore' ){
        exploreClicked();
    }else if( actualPage === 'you' ){
        youClicked();
    }else{
        feedClicked(); 
    };
};

function feedClicked(){
    document.getElementById('feedIcon').style.color = "#424242";
    document.getElementById('exploreIcon').style.color = "#BDBDBD";
    document.getElementById('youIcon').style.color = "#BDBDBD";
    
    localStorage.setItem("actualPage", 'feed');
    
    $(".content").load("/html/feed/feed.html");
    $(".middleContent").load("/html/leer.html");
    audio.pause();           
    //document.getElementById('musicButton').src ="Pictures/musicicon.png";
    document.getElementById('popupMiddle').style.zIndex =1;
    $(".popupMiddle").load("/html/leer.html");
    p=1;
    
    filterStatus = 5;
    $(".filterContent").load("/html/filterFeed.html");
   
};

function exploreClicked(){
    document.getElementById('feedIcon').style.color = "#BDBDBD";
    document.getElementById('exploreIcon').style.color = "#424242";
    document.getElementById('youIcon').style.color = "#BDBDBD";
    
    localStorage.setItem("actualPage", 'explore');
    
    $(".content").load("/html/explore/explore.html");
    $(".middleContent").load("/html/leer.html");
    audio.pause();           
    document.getElementById('popupMiddle').style.zIndex =1;
     $(".popupMiddle").load("/html/leer.html");
    p=1;
    
    filterStatus = 6;
    $(".filterContent").load("/html/filterExplore.html");
};

function youClicked(){
    document.getElementById('feedIcon').style.color = "#BDBDBD";
    document.getElementById('exploreIcon').style.color = "#BDBDBD";
    document.getElementById('youIcon').style.color = "#424242";
    
    localStorage.setItem("actualPage", 'you');
    
    $(".content").load("/html/you/you.html");
    $(".middleContent").load("/html/leer.html");
    document.getElementById('popupMiddle').style.zIndex =1;
     $(".popupMiddle").load("/html/leer.html");
    p=1;
    
    filterStatus = 7;
    $(".filterContent").load("/html/filterYou.html");
};

function rewardsClicked(){
    document.getElementById('shopleiste').style.backgroundColor = "transparent";
    document.getElementById('peopleleiste').style.backgroundColor = "transparent";
    document.getElementById('showroomleiste').style.backgroundColor = "transparent";
    document.getElementById('rewardsleiste').style.backgroundColor = "#585858";
    
    document.getElementById('shopleiste').style.color = "#585858";
    document.getElementById('peopleleiste').style.color = "#585858";
    document.getElementById('showroomleiste').style.color = "#585858";
    document.getElementById('rewardsleiste').style.color = "white";
    
    document.getElementById('popupMiddle').style.zIndex =1;
     $(".popupMiddle").load("/html/leer.html");
    
    localStorage.setItem("actualPage", 'explore');
    
    $(".middleContent").load("/html/explore/rewards.html");
    
    audio.pause();           
    p=1;
    
    filterStatus = 2;
    $(".filterContent").load("/html/filterRewards.html");
};

$(document).ready(function() {
    setDimensions();
});

var audio,seek_bar;

function initAudioPlayer(){
    
    audio = new Audio();
    audio.src = "audio/summerVibes.mp3";
   
    
}

function initAudioPlayer2(){
    
    audio2 = new Audio();
    audio2.src = "/audio/summerVibes.mp3";
    
    
}

function playPause(){
        if(audio.paused){
            audio.play();           
            document.getElementById('musicButton').src ="Pictures/pause.png";
            audio2.pause();
        }
        else{
            audio.pause();           
            document.getElementById('musicButton').src ="Pictures/musicicon.png";
        }
    }
window.addEventListener("load", initAudioPlayer); 

function playPause2(){
        if(audio2.paused){
            audio2.play();           
            audio.pause();
            document.getElementById('musicButton').src ="/images/elements/musicicon.png";
            document.getElementById('theSoundYouNeed').src ="/images/elements/theSoundYouNeedPause.png";
        }
        else{
            audio2.pause();           
            document.getElementById('theSoundYouNeed').src ="/images/elements/theSoundYouNeedPlay.png";
        }
    }    
    
window.addEventListener("load", initAudioPlayer2);

function warenkorbClicked(){
        if(wk===1){
           
            document.getElementById('warenkorbButton').src ="/images/elements/warenkorbVoll.png";
            document.getElementById('nachrichtenButton').src ="/images/elements/nachricht.png";
            
            
            $(".popupRechts").load("/html/warenkorb.html");
            wk=2;
            fo=1;
            rw=1;
            
           
            $(".artikelWarenkorb").height(1.5*(document.getElementById('test3').offsetWidth));
    }
    else{
            document.getElementById('warenkorbButton').src ="/images/elements/warenkorb.png";
            $(".popupRechts").load("/html/leer.html");
            wk=1;
        
    }
};

function eraseClicked(){
    document.getElementById('filterButton').src ="/images/elements/filter.png";
    document.getElementById('closetButton').src ="/images/elements/closet.png";
    $(".popupLinks").load("/html/leer.html");
    
    cl =1;
    fl=1;
    
};

function eraseClickedRechts(){
    
    document.getElementById('warenkorbButton').src ="/images/elements/warenkorb.png";
    document.getElementById('nachrichtenButton').src ="/images/elements/nachricht.png";
    $(".popupRechts").load("/html/leer.html");
    
    wk =1;
    fo=1;
    
};

function eraseClickedFilter(){
    
    document.getElementById('filterButton').src ="/images/elements/filter.png";
    
    
    $(".popup").load("/html/leer.html");
    fl =1;
    
};



function filterClicked(){
    if(fl===1){
            
            document.getElementById('filterButton').src ="/images/elements/filter2.png";
            document.getElementById('closetButton').src ="/images/elements/closet.png";
            $(".popupLinks").load("/html/leer.html");
            document.getElementById('popupLinks2').style.height ='60%';
            document.getElementById('popupLinks2').style.zIndex =20;
            document.getElementById('popupLinks').style.zIndex =0;
        
            fl=2;
            cl=1;
       
    }
    else{
            document.getElementById('filterButton').src ="/images/elements/filter.png";
            document.getElementById('popupLinks2').style.height ='0%';
            fl=1;
            document.getElementById('popupLinks2').style.zIndex =0;
    }
        
};

function closetClicked(){
        if(cl===1){
            document.getElementById('popupLinks2').style.height ='0%';
            document.getElementById('closetButton').src ="/images/elements/closet2.png";
            document.getElementById('filterButton').src ="/images/elements/filter.png";
            document.getElementById('popupLinks').style.zIndex =20;
            document.getElementById('popupLinks2').style.zIndex =0;

            
            $(".popupLinks").load("/html/closet.html");
            
            cl=2;
            fl=1;
            
           
    }
    else{
            document.getElementById('closetButton').src ="/images/elements/closet.png";
            $(".popupLinks").load("/html/leer.html");
            cl=1;
            document.getElementById('popupLinks').style.zIndex =0;
    }
};



function nachrichtClicked(){
        if(fo===1){
            
            document.getElementById('nachrichtenButton').src ="/images/elements/nachricht2.png";
            document.getElementById('warenkorbButton').src ="/images/elements/warenkorb.png";
            $(".popupRechts").load("/html/nachricht.html");
            fo=2;
            wk=1; 
             
    }
    else{
            document.getElementById('nachrichtenButton').src ="/images/elements/nachricht.png";
            $(".popupRechts").load("/html/leer.html");
            fo=1;
           
    }
};

function drop(){
        if(d===1){
            document.getElementById('drop').style.backgroundColor = "transparent";
            
            
             $(".drop").load("/html/drop.html");
            
            d=2;
        
    }
    else{
            document.getElementById('drop').style.backgroundColor = "transparent";
            
             $(".drop").load("/html/leer.html");
             audio2.pause();
            d=1;
    }
};

function disableBodyScroll(){
    document.getElementById('middelContent').style.overflow = 'hidden';
}

function enableBodyScroll(){
    document.getElementById('middelContent').style.overflow = 'scroll';
}

function setHeight(){
    $(".artikelWarenkorb").height(1.5*(document.getElementById('artikelWarenkorb').offsetWidth));
}

$(window).resize(function() {
    setHeight();
    shopArtikel();
    showroomArtikel();
    setHeightFoto();
});

function openexploreTour(){
    $(".middleContent").load("/html/explore/exploreTour.html");
}

function losClicked(){
    $(".content").load("/html/explore/explore.html");
    $(".middleContent").load("/html/leer.html");
    
    los=2;
}

function filterClicked2(){
    if(fl===1){         
            document.getElementById('filterButton').src ="/images/elements/filter2.png";
            document.getElementById('closetButton').src ="/images/elements/closet.png";
            $(".popupLinks").load("/html/leer.html");
            document.getElementById('popupLinks2').style.height ='60%';
            document.getElementById('popupLinks2').style.zIndex =20;
            document.getElementById('popupLinks').style.zIndex =0;
        
            fl=2;
            cl=1;  
    }
    else{}
    
}

function validateForm() {
        var un = document.loginform.usr.value;
        var pw = document.loginform.pword.value;
        var username = "inpeoplesguest"; 
        var password = "iplogpassword";
        
        if ((un === username) && (pw === password)) {
            window.location = "home";
           
        }
        else {
            alert ("Login was unsuccessful, please check your username and password");
        }
      }

var filterStatus = 6;

function loadFilterContent(){
    if(filterStatus ===1){
        $(".filterContent").load("/html/filterShop.html");
    }
    else if(filterStatus ===2){
        $(".filterContent").load("/html/filterRewards.html");
    }
    else if(filterStatus ===3){
        $(".filterContent").load("/html/filterShowroom.html");
    }
    else if(filterStatus ===4){
        $(".filterContent").load("/html/filterPeople.html");
    }
    else if(filterStatus ===5){
        $(".filterContent").load("/html/filterFeed.html");
    }
    else if(filterStatus ===6){
        $(".filterContent").load("/html/filterExplore.html");
    }
    else if(filterStatus ===7){
        $(".filterContent").load("/html/filterYou.html");
    }


}


Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = 0, len = this.length; i < len; i++) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}


function test(){
    document.getElementById("test1").remove();
}

function adelete1(){
    document.getElementById("artikelWarenkorb").remove();
}

function adelete2(){
    document.getElementById("artikelWarenkorb1").remove();
}
