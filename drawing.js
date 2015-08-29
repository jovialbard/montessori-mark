$(document).ready(function(){
	var el = document.getElementById('c');
	var ctx = el.getContext('2d');
	var isDrawing;

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
	};
});