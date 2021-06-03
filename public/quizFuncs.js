//places elements based on size navbar for diffferent screen sizes
function getHeight() {
  var nav = document.getElementById('navbar-custom').getBoundingClientRect();
  document.getElementById('quizHeader').style.top = nav.height;
  document.getElementById('quizOverlay').style.top = nav.height;
  document.getElementById('quizQs').style.top = nav.height;
  document.getElementById('resultPg').style.top = nav.height;
}

window.addEventListener('DOMContentLoaded', getHeight());

//variables to keep track of how many times each of the 4 options are selected
var op1count = 0;
var op2count = 0;
var op3count = 0;
var op4count = 0;

//keeps track of how many questions have been answered
var qCounter = 0;

//variable for the current question number; set at 2 since #qNum = Question 1
var headingNumber = 2;

//an array of question strings
var questions = ["QuestionOne Text here", "Which one of these feels most like home?",
"An ally gets injured during a fight. What do you do?", "Your most valuable weapon in a fight is: ",
"Which best describes what you like to do in your free time?",
"Favorite animal?", "How would your friends describe you?",
"Who, of these four, is your favorite member of the Garde?"]

//arrays of answer strings for each option
var op1 = ["op1", "op2", "Dig around in my chest. There must be something in there that can help.",
"A bracelet that opens up into a shield when I'm attacked.", "op5",
"Dog.", "A leader.", "Four/John."];

var op2 = ["op1", "op2", "Fall back and make sure nothing else gets to them.",
"My years spent training for battle.", "op5", "Panther.", "Fearless.", "Six."];

var op3 = ["op1", "op2", "Get to them when the fight is over. They can take care of themselves.",
"A staff I can use to fight with.", "op5", "Cheetah.", "Sarcastic.", "Nine."];

var op4 = ["op1", "op2", "Get them out of there!", "Charisma.",
"op5", "Rabbit.", "Funny.", "Eight."];

//to start the quiz by hiding #quizOverlay and displaying #quizQs
function startQuiz() {
  document.getElementById("quizOverlay").style.display="none";
  document.getElementById("quizQs").style.display = "block";
}

//to increase the count of an option based on what user clicks and to display
//the next question and options
function storeAns(answer){
  if (answer.id == "op1") {
    op1count ++;
  }
  else if (answer.id == "op2") {
    op2count++;
  }
  else if (answer.id == "op3") {
    op3count++;
  }
  else if (answer.id == "op4") {
    op4count++;
  }

  qCounter++;

  //if-statments that check qCounter to know when to display a btn or img
  //question, simply update the question and answer texts, or change to the
  //result page
  if (qCounter == 1) {
    //show the first picture option question
    setTimeout(function(){
      document.getElementById("btnOps").style.display = "none";
      document.getElementById("imgOps1").style.display = "block";
    }, 200);
  }

  if (qCounter == 2) {
    //change back to button option question
    setTimeout(function(){
      document.getElementById("btnOps").style.display = "block";
      document.getElementById("imgOps1").style.display = "none";
    }, 200);
  }

  if (qCounter == 4) {
    //show the second picture option question
    setTimeout(function(){
      document.getElementById("btnOps").style.display = "none";
      document.getElementById("imgOps2").style.display = "block";
    }, 200);
  }

  if (qCounter == 5) {
    //change back to button option question
    setTimeout(function(){
      document.getElementById("btnOps").style.display = "block";
      document.getElementById("imgOps2").style.display = "none";
    }, 200);
  }

  if (qCounter != 8) {
    //updates the text in #qNum using headingNumber, plus #qTxt and the options
    //by accessing strings from the above arrays using qCounter as index
    setTimeout(function(){
      document.getElementById("qNum").innerHTML = `Question ${headingNumber++}`;
      document.getElementById("qTxt").innerHTML = questions[qCounter];
      document.getElementById("op1").innerHTML = op1[qCounter];
      document.getElementById("op2").innerHTML = op2[qCounter];
      document.getElementById("op3").innerHTML = op3[qCounter];
      document.getElementById("op4").innerHTML = op4[qCounter];
    }, 200);
  }

  if (qCounter == 8) {
    //hides #quizQs and the background image, and displays the result page
    setTimeout(function(){
      document.getElementById("resultPg").style.display = "block";
      document.getElementById("quizHeader").style.display="none";
      document.getElementById("quizQs").style.display = "none";
      calc(op1count, op2count, op3count, op4count);
    }, 550);
  }

}

//uses the count of each option to determine the user's result
function calc(op1count, op2count, op3count, op4count){
  //some more manageable variable names to replace op1count etc.
  var p1 = op1count;
  var p2 = op2count;
  var p3 = op3count;
  var p4 = op4count;

  //if-statments to determine which option(s) was/were picked the most which
  //determines the background and text on the result page

  //user picked mostly option 1
  if (p1 > p2 && p1 > p3 && p1 > p4) {
    //They have lumen
    document.getElementById("legacyName").innerHTML = "Your legacy is: Lumen";
    document.getElementById("resultPg").style.backgroundImage = "url('https://vignette.wikia.nocookie.net/iamnumberfour/images/c/cd/Iamnumberfour-glowhandsbigphoto.jpg/revision/latest?cb=20140426192044')";
    document.getElementById("legacyDescription").innerHTML = "Lumen is one of Four's legacies! It means you can shine lights from your hands, not to mention that you're also pyrokinetic! Have fun making fire balls and never being burned again.";
  }
  //user picked mostly option 2
  else if (p2 > p1 && p2 > p3 && p2 > p4) {
    //They have invisibility
    document.getElementById("legacyName").innerHTML = "Your legacy is: Invisibility";
    document.getElementById("resultPg").style.backgroundImage = "url('public/1_B7ez4QN43JFiyLY2YyYhsA.jpeg')";
    document.getElementById("legacyDescription").innerHTML = "Invisibility is one of Six's legacies. Not only can you and whatever you're wearing turn invisible, but you can also turn anything or anyone you touch invisible too. Now you can make that career change to secret spy!";
  }
  //user picked mostly option 3
  else if (p3 > p1 && p3 > p2 && p3 > p4) {
    //They have antigravity
    document.getElementById("legacyName").innerHTML = "Your legacy is: Antigravity!";
    document.getElementById("resultPg").style.backgroundImage = "url('public/be4494514f290afed9f6636f63362498.jpg')";
    document.getElementById("legacyDescription").innerHTML = "Antigravity is one of Nine's legacies. Walk on walls, walk on the ceiling, walk up the side of buildings; see the world from a new angle!";
  }
  //user picked mostly option 4
  else if (p4 > p1 && p4 > p3 && p4 > p2) {
    //They have teleportation
    document.getElementById("legacyName").innerHTML = "Your legacy is: Teleportation";
    document.getElementById("resultPg").style.backgroundImage = "url('public/teleportation.jpg')";
    document.getElementById("legacyDescription").innerHTML = "Teleportation is one of Eight's legacies. Teleport short distances and, if you happen to be near a large loralite rock, teleport across the world! In other words, never be late again.";
  }
  //user picked both option 2 and option 4 equally more than other options
  else if (p2 == p4 && p2 > p1 && p2 > p3) {
    //They can control the weather
    document.getElementById("legacyName").innerHTML = "Your legacy is: Control of Weather";
    document.getElementById("resultPg").style.backgroundImage = "url('https://3.bp.blogspot.com/-MXGNfwJoysg/V039PqG2ZkI/AAAAAAAAAfw/Uqi45dEkzhU4JpoeorruIvZbT3p9oZfjwCLcB/s1600/tumblr_o1h7ip4eUw1uz2g97o1_1280.jpg')";
    document.getElementById("legacyDescription").innerHTML = "Controlling the weather is one of Six's legacies. Clear the skies for some sun. Call up a storm and strike your enemies with lighting (or not). Try not to use it to get out of outdoor commitments too often.";
  }
  //user picked both option 2 and option 3 equally more than other options
  else if (p2 == p3 && p2 > p1 && p2 > p4) {
    //They can fly
    document.getElementById("legacyName").innerHTML = "Your legacy is: Flight";
    document.getElementById("resultPg").style.backgroundImage = "url('public/1200px-Levitaatio.jpg')";
    document.getElementById("legacyDescription").innerHTML = "Flight is one of Five's legacies. Shoot up into the sky and go for a fly! It's much faster than, say, riding a bike. Watch out for lightning, birds, and planes."
  }
  //user picked both option 1 and option 3 equally more than other options
  else if (p1 == p3 && p1 > p2 && p1 > p4) {
    //They can communicate with animals
    document.getElementById("legacyName").innerHTML = "Your legacy is: Animal Telepathy";
    document.getElementById("resultPg").style.backgroundImage = "url('https://hitherandyarn.files.wordpress.com/2011/08/a-devon-man-and-his-dog.jpg')";
    document.getElementById("legacyDescription").innerHTML = "Animal telepathy is one of both Four's and Nine's legacies. It's the ability to communicate back and forth with animals. Ever wondered what that squirrel in the tree was thinking? Now you can ask it."
  }
  //user picked both option 1 and option 2 equally more than other options
  else if (p1 == p2 && p1 > p3 && p1 > p4) {
    //They can control seismic waves
    document.getElementById("legacyName").innerHTML = "Your legacy is: Control of Seismic Waves";
    document.getElementById("resultPg").style.backgroundImage = "url('https://cdn5.eyeem.com/thumb/ecddb990f8b04710440144ad0499420059f0a43c-1487605631148/w/750')";
    document.getElementById("legacyDescription").innerHTML = "The ability to create and control seismic waves is One's legacy, and later, Adam's. Create anything from a mild rumble that makes someone stumble to a full on earthquake (but like, don't actually just randomly create earthquakes...)"
  }
  //user picked both option 1 and option 4 equally more than other options
  else if (p1 == p4 && p1 > p2 && p1 > p3) {
    //They have healing
    document.getElementById("legacyName").innerHTML = "Your legacy is: Healing";
    document.getElementById("resultPg").style.backgroundImage = "url('https://www.amethystrecovery.org/wp-content/uploads/2015/08/Free-Referral-Service-4-e1440915238938.jpg')";
    document.getElementById("legacyDescription").innerHTML = "Healing is one of Marina's, and later, John's legacies. Heal a paper cut, cure a disease, bring a flower back from the brink of death. There's so much good you can do!"
  }
  //user picked both option 3 and option 4 equally more than other options
  else if (p3 == p4 && p3 > p1 && p4 > p2) {
    //They have shapeshifting
    document.getElementById("legacyName").innerHTML = "Your legacy is: Shapeshifting";
    document.getElementById("resultPg").style.backgroundImage = "url('https://i.pinimg.com/originals/6b/56/2a/6b562ac74bd5e5bfe21fb4eb68f78525.jpg')";
    document.getElementById("legacyDescription").innerHTML = "Shapeshifting is one of Eight's legacies. Transform yourself into all kinds of creatures; you can literally be the fly on the wall, or like something much cooler. "
  }
  //user picked all the options the same amount of times
  else if (p1 == p2 && p1 == p3 && p1 == p4) {
    //They have ximic
    document.getElementById("legacyName").innerHTML = "Your legacy is: Ximic";
    document.getElementById("resultPg").style.backgroundImage = "url('http://www.bloodyloud.com/wp-content/gallery/stephen-criscolo/6943328556_72871dba7c_b.jpg')";
    document.getElementById("legacyDescription").innerHTML = "Ximic is one of Four's legacies and it was one of Pittacus Lore's legacies too. Ximic is the ultimate legacy because the person who has it can copy all other legacies. USE IT RESPONSIBLY!"
  }
}
