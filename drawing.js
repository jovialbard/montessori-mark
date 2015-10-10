$(document).ready(function(){
	function threePeriodLesson() {
		var letters = [];
		letters[0] = chooseLetter(letters);
		introduceLetter(letters[0], function(){
			clearScreen();
			letters[1] = chooseLetter(letters);
			introduceLetter(letters[1], function() {
				clearScreen();
				letters[2] = chooseLetter(letters);
				introduceLetter(letters[2], function() {
					firstPeriod(letters,function(){
						secondPeriod(letters,function(){
							thirdPeriod(letters,function(){
								playSound('6-thank-you.wav');
								clearScreen();
							});
						});
					});
				});
			});
		});
	}
	
	function firstPeriod(letters,onComplete) {
		//@todo show the three letters die by side
		//@todo highlight and unhighlight the letters as we play them
		playSound(letters[0]+'.wav');
		setTimeout(function(){						
			playSound(letters[1]+'.wav');
		},2000);
		setTimeout(function(){						
			playSound(letters[2]+'.wav');
		},4000);
		if(onComplete) {
			onComplete();
		}
	}
	
	function secondPeriod(letters,onComplete) {
		/*
		 * @todo say the sound and ask the child to touch that letter in the following order:
		 * last, first, second, random, random from other two, remaining
		 */
		if(onComplete) {
			onComplete();
		}
	}

	function thirdPeriod(letters,onComplete) {
		// @todo ask what sound each letter makes randomly until they get them all right or we realize they're not ready
		if(onComplete) {
			onComplete();
		}
	}
	
	function chooseLetter(exclude) {
		//@todo value more common letters higher
		//@todo track which letters have been used recently so we can be strategic in what we present
		var possible = "abcdefghijklmnopqrstuvwxyz";
		do {
			var letter = possible.charAt(Math.floor(Math.random() * possible.length));
		} while(exclude && typeof(exclude) === 'object' && exclude.indexOf(letter) !== -1)
		return letter;
	}

	function introduceLetter(letter,onComplete) {
		drawLetter(letter);
		playSound(letter+'-intro.wav');
		setTimeout(function(){
			demonstrateLetter(letter,onComplete);
		},4000); //@todo, is there any way to calculate playSound + 1s?
	}
	
	function demonstrateLetter(letter,onComplete) {
		playSound(letter+'.wav',1000,3); //@todo is there any way to just play the sound 3 times with a brief pause between, or do we need to specify how long we wait between each play?
		//@todo trace the letter with a colored line to show how it should be traced
		//@todo have an animated hand lead the tracing
		setTimeout(function(){
			playSound('3-your-turn.wav');
			waitForInput(onComplete);
		},4000); //@todo, is there any way to calculate playSound + 1s?
		
	}
	
	function waitForInput(letter,onComplete) {
		//@todo evaluate success
		var acceptable = true;
		if(acceptable) {
			if(onComplete) {
				onComplete();
			}
		} else {
			demonstrateLetter(letter,onComplete);
		}
	}
	
	
	function drawLetter(letter) {
		//@todo implement
	}
	
	function clearScreen() {
		//@todo clear the screen so that the next thing can be drawn
	}
	
	function playSound(file,duration,repeat) {
		//@todo play the sound file, optional: 'repeat' number of times for 'duration' miliseconds each
	}
	
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