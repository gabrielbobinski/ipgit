/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var peopleStatus =0;
   
function peopleClicked(){
    document.getElementById('shopleiste').style.backgroundColor = "transparent";
    document.getElementById('peopleleiste').style.backgroundColor = "#585858";
    document.getElementById('showroomleiste').style.backgroundColor = "transparent";
    document.getElementById('rewardsleiste').style.backgroundColor = "transparent";
    
    document.getElementById('shopleiste').style.color = "#585858";
    document.getElementById('peopleleiste').style.color = "white";
    document.getElementById('showroomleiste').style.color = "#585858";
    document.getElementById('rewardsleiste').style.color = "#585858";

    localStorage.setItem("actualPage", 'explore');
    
    if(peopleStatus===0){
        $(".middleContent").load("/html/explore/peopleMenu.html");
    }else{
        $(".middleContent").load("/html/explore/people.html");
    }
    
    
    
    document.getElementById('popupMiddle').style.zIndex =1;
     $(".popupMiddle").load("/html/leer.html");
    
    audio.pause();           
    p=2;
  
    filterStatus = 4;
    
    $(".filterContent").load("/html/filterPeople.html");
    
};

function peopleZuruck(){
    peopleStatus =0;
    $(".middleContent").load("/html/explore/peopleMenu.html");
}


function peopleProfilClicked(){
    $(".middleContent").load("/html/explore/peopleProfil.html");
}

function setHeight2(){
    $(".people").height((document.getElementById('peopleProfil').offsetWidth)/3.5);
    $(".imgpeople").width((document.getElementById('peopleProfil').offsetWidth)/3.5); 
    $(".imgpeople").height((document.getElementById('peopleProfil').offsetWidth)/3.5);
}
var test1 = (document.getElementById('peopleProfil').offsetWidth);

function peopleMenuClicked(){
    $(".middleContent").load("/html/explore/people.html");
    peopleStatus = 1;
}
function openProfilFoto(){
    $(".popupMiddle").load("/html/explore/profilFotoDetail.html");
    document.getElementById('popupMiddle').style.zIndex =20;
    document.getElementById('back').style.opacity =0;
}
function peopleFotoClicked(){
     $(".middleContent").load("/html/explore/profilFotoMenu.html");
}
function setHeightFoto(){
    $(".foto").height((document.getElementById('fotoWidth').offsetWidth));
}

