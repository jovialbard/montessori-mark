$(document).ready(function(){
	var el = document.getElementById('c');
	var ctx = el.getContext('2d');
	var isDrawing;

	draw();
	text();

		function draw(){
			el.onmousedown = function(e) {
			  isDrawing = true;
			  ctx.moveTo(e.clientX-this.offsetLeft, e.clientY-this.offsetTop);
			};
			el.onmousemove = function(e) {
			  if (isDrawing) {
			    ctx.lineTo(e.clientX-this.offsetLeft, e.clientY-this.offsetTop);
			    ctx.stroke();
			  }
			};
			el.onmouseup = function() {
			  isDrawing = false;
			}
		}

		function text(){
			alert(el.width);
			ctx.font = "300px sans-serif";
			ctx.fillStyle = "red";
			ctx.textAlign = "center";
			ctx.fillText("A", el.width/2, 300); 
		};



	
});