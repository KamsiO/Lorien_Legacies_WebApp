//places element based on sizes of other elements for diffferent screen sizes
function getHeight() {
  var nav = document.getElementById('navbar-custom').getBoundingClientRect();
  var char = document.getElementById('charHeader').getBoundingClientRect();
  document.getElementById('charContent').style.marginTop = (char.height/5);
}

window.addEventListener('DOMContentLoaded', getHeight());

//controls opacity scroll effects
document.getElementById("charOverlay").onscroll = function(){
  var fromTop = $("#charOverlay").scrollTop();
  //var sideScrolled = false;

  $("#charHeader").css("opacity", 1 - fromTop / $("#charHeader").height());
  $("#charTitle").css("opacity", 1 - fromTop / ($("#charHeader").height()/5));
  $("#charContent").css("opacity", fromTop / ($("#charHeader").height() + $("#charContent").height()/20));

  // if ((document.getElementById('charHeader').style.opacity < 0) && !sideScrolled) {
  //   document.getElementById("characterContainer").className = "slide";
  //   sideScrolled = true;
  // }
  // else if (document.getElementById('subtitle').style.opacity < 1 && sideScrolled) {
  //   document.getElementById("characters").classList.remove("characters");
  //   sideScrolled = false;
  // }
}

// variables to determine if a character section is currently open
var garde = false;
var cepan = false;
var humans = false;
var mogs = false;

//opens and hides character sections when a charcter button is clicked
function toggleCharacter(character) {
  if (character.id == "gardeBtn") {
    if (garde == true) {
      //if the section is already open, simply closes the section
      undoCharacters();
    }
    else {
      undoCharacters();
      garde = true;
      document.getElementById("garde").style.display = "block";
    }
  }
  else if (character.id == "cepanBtn") {
    if (cepan == true) {
      undoCharacters();
    }
    else {
      undoCharacters();
      cepan = true;
      document.getElementById("cepan").style.display = "block";
    }
  }
  else if (character.id == "humansBtn") {
    if (humans == true) {
      undoCharacters();
    }
    else {
      undoCharacters();
      humans = true;
      document.getElementById("humans").style.display = "block";
    }
  }
  else if (character.id == "mogsBtn") {
    if (mogs == true) {
      undoCharacters();
    }
    else {
      undoCharacters();
      mogs = true;
      document.getElementById("mogadorians").style.display = "block";
    }
  }
  changeTextColor(character);
  document.getElementById("CL").scrollIntoView({behavior: "smooth"});
}

//to hide all charcter sections
function undoCharacters(){
  document.getElementById("garde").style.display = "none";
  document.getElementById("cepan").style.display = "none";
  document.getElementById("humans").style.display = "none";
  document.getElementById("mogadorians").style.display = "none";
  garde = false;
  cepan = false;
  humans = false;
  mogs = false;
}

//to switch the color of the character buttons when they are clicked
function changeTextColor(character) {
$('#characters h3').css('color', '#b3b3b3');
  if (!garde && !cepan && !humans && !mogs) {
    //returns button to grey if the corresponding section is already open and is
    //being closed
    $(character).css('color', '#b3b3b3');
  }
  else {
    $(character).css('color', '#e64919');
  }
}

//to scroll to mentioned character and flash that container red
function findCharacter(characterMention, character) {
  //checks which section charcter is under and opens that section
  if (characterMention.id == "mogMention") {
    undoCharacters();
    mogs = true;
    document.getElementById("mogadorians").style.display = "block";
    $("#humansBtn").css('color', '#b3b3b3');
    $("#gardeBtn").css('color', '#b3b3b3');
    $("#mogsBtn").css('color', '#e64919');
  }
  else if (characterMention.id == "humanMention") {
    undoCharacters();
    humans = true;
    document.getElementById("humans").style.display = "block";
    $("#cepanBtn").css('color', '#b3b3b3');
    $("#gardeBtn").css('color', '#b3b3b3');
    $("#humansBtn").css('color', '#e64919');
  }
  else if (characterMention.id == "cepanMention") {
    undoCharacters();
    cepan = true;
    document.getElementById("cepan").style.display = "block";
    $("#humansBtn").css('color', '#b3b3b3');
    $("#gardeBtn").css('color', '#b3b3b3');
    $("#cepanBtn").css('color', '#e64919');
  }
  else if (characterMention.id == "gardeMention") {
    undoCharacters();
    garde = true;
    document.getElementById("garde").style.display = "block";
    $("#humansBtn").css('color', '#b3b3b3');
    $("#cepanBtn").css('color', '#b3b3b3');
    $("#mogsBtn").css('color', '#b3b3b3');
    $("#gardeBtn").css('color', '#e64919');
  }
  //scroll to the specific character block
  document.getElementById(character).scrollIntoView({behavior: "smooth", block: "center"});
  //flash the character block red for one second
  document.getElementById(character).style.backgroundColor = "rgba(245, 101, 91, 0.3)";
  setTimeout(function(){
    document.getElementById(character).style.backgroundColor = "rgba(245, 101, 91, 0)"; }, 1000);
}
