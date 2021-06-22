var mouseEvent = "empty";
var last_postion_of_x, last_position_of_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
line_width = 1;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
  mouseEvent = "mouseDown";
  color = document.getElementById("color").value;
  line_width = document.getElementById("width_of_line").value;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
  mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
  mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
  current_position_of_x = e.clientX - canvas.offsetLeft;
  current_position_of_y = e.clientY - canvas.offsetTop;

  if (mouseEvent == "mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = line_width;

    ctx.moveTo(last_postion_of_x, last_position_of_y);
    ctx.lineTo(current_position_of_x, current_position_of_y);
    ctx.stroke();
  }
  last_postion_of_x = current_position_of_x;
  last_position_of_y = current_position_of_y;
}
function clearArea() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
