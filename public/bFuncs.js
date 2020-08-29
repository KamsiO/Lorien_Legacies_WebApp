//places elements based on sizes of other elements for diffferent screen sizes
function getHeight() {
  var nav = document.getElementById('navbar-custom').getBoundingClientRect();
  var books = document.getElementById('booksHeader').getBoundingClientRect();
  document.getElementById('booksContent').style.marginTop = (books.height/5);
  document.getElementById('popup').style.top = (nav.height + 15);
}

window.addEventListener('DOMContentLoaded', getHeight());

//controls opacity scroll effects
document.getElementById("booksOverlay").onscroll = function(){
  var fromTop = $("#booksOverlay").scrollTop()
  // var toWhite = 0.15;
  // toWhite = toWhite - fromTop/1.15;
  // if (toWhite == 0) {
  //   return toWhite;
  // }
  // else {
  //   toWhite = toWhite - fromTop/1.15;
  // }
  //document.getElementById("booksOverlay").style.backgroundColor = 'rgba(0, 0, 0, ' + toWhite + ')';
  $("#booksHeader").css("opacity", 1 - fromTop / $("#booksHeader").height())
  $("#booksTitle").css("opacity", 1 - fromTop / ($("#booksHeader").height()/5.5))
}

//to keep track of which popup is open, so that the right popup is closed
var bookNum = 0;

//to bring up a book popup based on which book image is clicked
function popFunc(book) {
  document.getElementById("popOverlay").style.opacity = '.9';
  document.getElementById("popOverlay").style.zIndex = '1';
  document.getElementById("popup").className = 'show';
  if (book.id == "ll1") {
    document.getElementById("pop1").style.display = "block";
    bookNum = 1;
  }
  else if (book.id == "ll2") {
    bookNum = 2;
    document.getElementById("pop2").style.display = "block";
  }
  else if (book.id == "ll3") {
    bookNum = 3;
    document.getElementById("pop3").style.display = "block";
  }
  else if (book.id == "ll4") {
    bookNum = 4;
    document.getElementById("pop4").style.display = "block";
  }
  else if (book.id == "ll5") {
    bookNum = 5;
    document.getElementById("pop5").style.display = "block";
  }
  else if (book.id == "ll6") {
    bookNum = 6;
    document.getElementById("pop6").style.display = "block";
  }
  else if (book.id == "ll7") {
    bookNum = 7;
    document.getElementById("pop7").style.display = "block";
  }
  else if (book.id == "lf1") {
    bookNum = 8;
    document.getElementById("pop8").style.display = "block";
  }
  else if (book.id == "lf2") {
    bookNum = 9;
    document.getElementById("pop9").style.display = "block";
  }
  else if (book.id == "lf3") {
    bookNum = 10;
    document.getElementById("pop10").style.display = "block";
  }
  else if (book.id == "lf4") {
    bookNum = 11;
    document.getElementById("pop11").style.display = "block";
  }
  else if (book.id == "lf5") {
    bookNum = 12;
    document.getElementById("pop12").style.display = "block";
  }
}

//closes the the current popup by refrencing bookNum
function close1() {
  document.getElementById(`pop${bookNum}`).style.display = "none";
  document.getElementById("popOverlay").style.opacity = '0';
  document.getElementById("popOverlay").style.zIndex = '-1';
  document.getElementById("popup").className = '';
}
