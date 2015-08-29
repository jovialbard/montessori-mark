$(document).ready(function(){
	var el = document.getElementById('c');
	var ctx = el.getContext('2d');
	var isDrawing;

	draw();
	text();

		function draw(){
			//this.offsetLeft and this.offsetTop are needed to correct for the 
			//position of the canvas on the page
			el.onmousedown = function(e) {
			  isDrawing = true;
			  ctx.moveTo(e.clientX-this.offsetLeft, e.clientY-this.offsetTop);
			};
			el.onmousemove = function(e) {
			  if (isDrawing) {
			  	ctx.lineWidth = 10;
			  	ctx.lineJoin = ctx.lineCap = "round";
			    ctx.lineTo(e.clientX-this.offsetLeft, e.clientY-this.offsetTop);
			    ctx.stroke();
			  }
			};
			el.onmouseup = function() {
			  isDrawing = false;
			}
		}

		function text(){
			ctx.font = "300px sans-serif";
			ctx.fillStyle = "red";
			ctx.textAlign = "center";
			ctx.fillText("A", el.width/2, 300); 
		};



	
});