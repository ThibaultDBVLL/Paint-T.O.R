$(document).ready(function(){
  var btn=$("input");
  for (var i=0; i<btn.length; i++) {
    var btnColor=$(btn[i]).attr("data-color");
    $(btn[i]).css("background", btnColor);
  }


    var paint=false;
    var clickX, clickY;
    context = document.getElementById('paper').getContext("2d");


    $(':button').click(function(){
      color = $(this).attr('data-color');
    });   // Attribue la couleur du carré au pinceau

    //création de la gomme
    $('gomme').click(function(){

    });

    //création de la gomme
    $('.clear').click(function(){
        location.reload();
    });

    /*
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);  // Clears the canvas

    // propriétés du crayon
    context.strokeStyle = color;
    context.lineJoin = "round";
    context.lineWidth = 5;

    for(var i=0; i < clickX.length; i++) {
    context.beginPath();
    if(clickDrag[i] && i){
    context.moveTo(clickX[i-1], clickY[i-1]);
  }else{
  context.moveTo(clickX[i]-1, clickY[i]);
}
context.lineTo(clickX[i], clickY[i]);
context.closePath();
context.stroke();
}
}*/

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

// définie la fonction redraw
function redraw(x, y, dragging){
  if(dragging) {
    context.beginPath();
    context.strokeStyle=color;
    context.lineWidth="5";
    context.lineJoin="round";
    context.moveTo(clickX, clickY);
    context.lineTo(x, y);
    context.closePath();
    context.stroke();
  }
  clickX=x;
  clickY=y;
}


});
