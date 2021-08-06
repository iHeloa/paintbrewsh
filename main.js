canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var width = screen.width;
var new_width = screen.width -70;
var new_height = screen.height -300;
if (width<992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}
var last_position_of_x, last_position_of_y;
canvas.addEventListener("touchstart",my_touchStart);
function my_touchStart(e){
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchMove);
function my_touchMove(e){
current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
current_position_of_y = e.touches[0].clientY - canvas.offsetTop;
ctx.beginPath();
ctx.StrokeStyle = "Blue";
ctx.lineWidth = 3;
ctx.moveTo(last_position_of_x, last_position_of_y);
ctx.lineTo(current_position_of_x, current_position_of_y);
ctx.stroke();
last_position_of_x = current_position_of_x;
last_position_of_y = current_position_of_y;
}