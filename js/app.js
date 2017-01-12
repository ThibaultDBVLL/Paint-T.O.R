 $(document).ready(function(){


 $(':button').each(function(){
    //pour chaque button on applique la fonction suiv

        var color = $(this).attr('data-color');
        //crée une variable avec l'attribut data-color
        //de ce button désigné par each
        $(this).css('background', color);
        // applique a CE button du css avec comme
        //couleur la variable color
        });

$(':button').click(function(){
  color = $(this).attr('data-color');
});   // Attribue la couleur du carré au pinceau

context = document.getElementById('paper').getContext("2d");

    // définie la fonction redraw
function redraw(){
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
}

//définit la fonction "dessiner en fonction des coordonnées de la souris"
$('#paper').mousedown(function(e){
  var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;
  paint = true;
  addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  redraw();                   //cette ligne me semble optionnelle
    });

$('#paper').mousemove(function(e){
   if(paint){
     addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
     redraw();
   }
 });
$('#paper').mouseup(function(e){
  paint = false;
});

$('#paper').mouseleave(function(e){
   paint = false;
 });
 var clickX = [];
 var clickY = [];
 var clickDrag = [];
 var paint;

  function addClick(x, y, dragging)
 {
   clickX.push(x);
   clickY.push(y);
   clickDrag.push(dragging);
 }


});
