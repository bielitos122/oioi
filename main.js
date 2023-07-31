var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 1;
    canvas.addEventListener("mousedown", my_mousedown);
    function myMouseDown(e)
    {
    //Atividade Adicional Início
     color = document.getElementById("color").value; 
     widthLine = document.getElementById("widthLine").value;
    //Atividade Adicional Final
    radius = document.getElementById("radius").value; 
    mouseEvent = "mouseDown";
    }


    function myMouseMove(e)
{
PositionMouseX = e.clientX - canvas.offsetLeft; 
PositionMouseY = e.clienty-canvas.offsetTop; 

if (mouseEvent == "mouseDown") 
console.log("Current position of x and y coordinates = ");
console.log("x = " + PositionMouseX + "y = " + PositionMouseY);
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = widthLine;
ctx.arc(PositionMouseX, PositionMouseY, radius ,0 , 2 * Math.PI);
ctx.stroke();

mouseEvent = "mouseDown";
}

    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }


//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
