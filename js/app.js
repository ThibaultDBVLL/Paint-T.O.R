$(document).ready(function(){
  var btn=$("input");
  for (var i=0; i<btn.length; i++) {
    var btnColor=$(btn[i]).attr("data-color");
    $(btn[i]).css("background", btnColor);
  }

  var paint=false;
  var clickX, clickY;
  canvas =document.getElementById('paper');
  context = canvas.getContext('2d');



  var color = "black";

  $(':button').click(function(){
    color = $(this).attr('data-color');
      if($("#fondchange").is(':checked')){
        $('canvas').css('background-color', color);
      }
  });


  //bouton clear area
  $('.clear').click(function(){
    location.reload();
  });



  //définit la fonction "dessiner en fonction des coordonnées de la souris"
  $('#paper').mousedown(function(e){
    paint = true;
    redraw(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, false);

  });

  $('#paper').mousemove(function(e){
    if(paint){
      redraw(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
    }
  });

  $('#paper').mouseup(function(e){
    paint = false;
  });

  $('#paper').mouseleave(function(e){
    paint = false;
  });

  var largeur = "5";
  $('.val').click(function(){
    largeur = $(this).attr("data");
  });

  // définit la fonction redraw
  function redraw(x, y, dragging){
    if(dragging) {
      context.beginPath();
      context.strokeStyle=color;
      context.lineWidth=largeur;
      context.lineJoin="round";
      context.moveTo(clickX, clickY);
      context.lineTo(x, y);
      context.closePath();
      context.stroke();
    }
    clickX=x;
    clickY=y;

  }

  //création de la gomme
  $('.gomme').click(function(){
    if(dragging) {
      context.beginPath();
      context.strokeStyle= white ;
      context.lineWidth="5";
      context.lineJoin="round";
      context.moveTo(clickX, clickY);
      context.lineTo(x, y);
      context.closePath();
      context.stroke();
    }
    clickX=x;
    clickY=y;
    console.log('.gomme');
  });

});
