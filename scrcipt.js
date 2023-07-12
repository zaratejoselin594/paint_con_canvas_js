const goma = document.getElementById("goma");
const canvas = document.getElementById("canvas");
const dif = canvas.getBoundingClientRect();
const ctx = canvas.getContext("2d");

let dibujo, color, anchoLinea, difX, difY, borrar;
canvas.addEventListener("mousedown", (e) => {
  difX = e.clientX - dif.left;
  difY = e.clientY - dif.top;
  dibujo = true;
  color = document.getElementById("color").value;
  anchoLinea = document.getElementById("rango").value;
  ctx.beginPath();
  borrar = true
})
canvas.addEventListener("mousemove", (e) => {
  if (dibujo) {   
    dibujar(difX, difY, e.clientX - dif.left, e.clientY - dif.top);
    difX = e.clientX - difX.left;
    difY = e.clientY - difY.top;
  }
})
goma.addEventListener("click", () => {
  console.log("click")
  canvas.addEventListener("mousedown", (e) => {
    if (borrar) {
      ctx.clearRect(difX, difY, anchoLinea, 50)
    }
  })
})
canvas.addEventListener("mouseup", (e) => {
  ctx.closePath();
  dibujo = false;
  borrar = false
})

const dibujar = (x1, y1, x2, y2) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = anchoLinea;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}


console.log(ctx)
/*
ctx.lineWidth = "5";
ctx.strokeStyle = "#f5e"
ctx.fillStyle = "#f56"
ctx.strokeRect(50, 50, 400, 200);
ctx.fillRect(50, 50, 400, 200);
ctx.lineTo(100, 300);
ctx.lineTo(150, 250);
ctx.lineTo(130, 300);
ctx.lineTo(110, 350);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.arc(250, 150, 100, 0, 50);
ctx.stroke();*/