//places elements based on sizes of other elements for diffferent screen sizes
function getHeight() {
  var nav = document.getElementById('navbar-custom').getBoundingClientRect();
  var vid = document.getElementById('homeHeader').getBoundingClientRect();
  document.getElementById('homeHeader').style.top = nav.height;
  document.getElementById('homeContent').style.marginTop = (vid.height/5);
}

window.addEventListener('DOMContentLoaded', getHeight());

//controls opacity scroll effects
document.getElementById("vidOverlay").onscroll = function(){
  var fromTop = $("#vidOverlay").scrollTop();
  var sideScrolled = false;

  $("#homeHeader").css("opacity", 1 - fromTop / $("#homeHeader").height());
  $("#homeTitle").css("opacity", 1 - fromTop / ($("#homeHeader").height()/5));
  $("#homeContent").css("opacity", fromTop / ($("#homeHeader").height() + $("#homeContent").height()/10));
  $(".links").css("opacity", fromTop / ($("#homeHeader").height() + $("#homeContent").height()/5));
}

//changes opacity and scale of image on hover over text
$('#cText').hover(function() {
  $('#c').css('opacity', '1');
  $('#c').css('transform', 'scale(1.2)');
}, function() {
  // on mouseout, resets opacity and scale
  $('#c').css('opacity', '0.4');
  $('#c').css('transform', 'scale(1.0)');
});

$('#bText').hover(function() {
  $('#b').css('opacity', '1');
  $('#b').css('transform', 'scale(1.2)');
}, function() {
  $('#b').css('opacity', '0.4');
  $('#b').css('transform', 'scale(1.0)');
});

$('#qText').hover(function() {
  $('#q').css('opacity', '1');
  $('#q').css('transform', 'scale(1.2)');
}, function() {
  $('#q').css('opacity', '0.4');
  $('#q').css('transform', 'scale(1.0)');
});
