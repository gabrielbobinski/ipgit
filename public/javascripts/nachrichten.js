/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var pro1=1;
var pro2=1;
var pro3=1;

function chatOpen1(){
    $(".kontaktChat").load("/html/chat1.html");
    document.getElementById('kontakte').style.opacity ="0.5";
    document.getElementById('nachrichten').style.opacity ="0.5";
        pro1=2;
        pro2=1;
        pro3=1;
    $(".nachrichtenHeader").load("/html/nachrichtenHeader.html");
}

function kontakteClicked(){
    document.getElementById('kontakte').style.opacity ="1";
    document.getElementById('nachrichten').style.opacity ="0.5";
    
    $(".kontaktChat").load("/html/kontakt.html");
}

function chatClicked(){
    document.getElementById('kontakte').style.opacity ="0.5";
    document.getElementById('nachrichten').style.opacity ="1";
    
    $(".kontaktChat").load("/html/chatVerlauf.html");
}
function nachrichtenHeader(){
    $(".nachrichtenHeader").load("/html/nachrichtenHeader.html");
}

function chatExit(){
    $(".popupRechts").load("/html/nachricht.html");
}
