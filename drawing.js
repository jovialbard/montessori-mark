$(document).ready(function(){
	var el = document.getElementById('c');
	var ctx = el.getContext('2d');
	var isDrawing;

	///
	//let's calulate the number of transparent pixels when we start, and then check again
	//on a #check click. If the number goes down, that means we strayed outside
	//of the letter.
	//of course, we need to take our initial calculation *after* we put a letter onscreen.
	//
	//playtesters pointed out that this isn't sufficient, since we can still win by
	//tracing nothing at all.
	//
	

	

	draw();
	text();
	var initialTransparency = calculateTransparency();
	$("#check").click(function(){
		var currentTransparency = calculateTransparency();
		if(currentTransparency<initialTransparency){alert("You failed. Refresh the page to try again.");}
		else{alert("good job!");}
		
	});

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
			//draw a letter on the canvas
			ctx.font = "300px sans-serif";
			ctx.fillStyle = "red";
			ctx.textAlign = "center";
			ctx.fillText("A", el.width/2, 300); 
		};

		function calculateTransparency(){
		

			//get image data into an array
			var pixels = ctx.getImageData(0,0,el.width,el.height);
			
			

			//cycle thru the array stepping by 4
			//i = r, i+1 = g i+2 = b i+3 =a

			var alphaPixelCount=0;
			for(i=0; i<pixels.data.length; i=i+4){
				var r = pixels.data[i];
				var g = pixels.data[i+1];
				var b = pixels.data[i+2];
				var a = pixels.data[i+3];
				// console.log(r + ":"+g);

				if(a==0){alphaPixelCount += 1;}

			}
			return alphaPixelCount;

		}
	
});