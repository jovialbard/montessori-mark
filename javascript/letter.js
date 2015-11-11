function playSound(file,duration,repeat) {
	var audio = new Audio("audio/" + file);
	audio.play();
	if(repeat && repeat > 1) {
		var count = 1;
		var interval_id = null;
		interval_id = setInterval(function(){
			var audio = new Audio("	audio/" + file);
			audio.play();
			count++;
			if(count >= repeat) {
				clearInterval(interval_id);
			}
		},duration);
	}
}

var Letter = function(canvas,options) {
	this.canvas = canvas;
	var possible = "abcdefghijklmnopqrstuvwxyz";
	this.letter = possible.charAt(Math.floor(Math.random() * possible.length));
	if(typeof(options) === 'object') {
		if(('exclude' in options) && typeof(options.exclude) === 'object') {
			var duplicate;
			do {
				for(var i in options.exclude) {
					if(options.exclude[i].letter == this.letter) {
						duplicate = true;
						this.letter = possible.charAt(Math.floor(Math.random() * possible.length));
						break;
					} else {
						duplicate = false;
					}
				}
			} while(duplicate);
		}
	}
}

Letter.prototype.introduce = function(options) {
	if(typeof(options) === 'object') {
		if(('onComplete' in options) && typeof(options.onComplete) === 'function') {
			this.onComplete = options.onComplete;
		}
	}
	this.draw();
	this.playIntroduction();
	var that = this;
	setTimeout(function(){
		that.demonstrate();
	},4500);
}

Letter.prototype.playIntroduction = function() {
	playSound(this.letter+'-intro.wav');	
}

Letter.prototype.playName = function(count) {
	if(!count) count=1;
	playSound(this.letter+'.wav',count*400,count); 	
}

Letter.prototype.draw = function(canvas) {
	if(canvas) {
		this.canvas = canvas;
	}	
	var context = this.canvas.getContext('2d');
	context.font = "300px sans-serif";
	context.fillStyle = "DarkKhaki";
	context.textAlign = "center";
	context.fillText(this.letter, this.canvas.width/2, 300); 
}

Letter.prototype.demonstrate = function() {
	//@todo have an animated hand lead the tracing (super hard)
	//@todo the tracing algorithm sucks... is there anything out there that can draw letters as polylines?	
	this.playName(3);
	var dashLen = 80000, dashOffset = dashLen, speed = 4;

	var context = this.canvas.getContext('2d');
	context.font = "300px sans-serif";
	context.strokeStyle = context.fillStyle = "#1f2f90";
	context.textAlign = "center";
	context.lineJoin = "round";
	context.lineWidth = 30;

	var that = this;
	(function loop() {
		context.clearRect(0, 0, that.canvas.width, that.canvas.height);
		that.draw();
		context.fillText(that.letter, that.canvas.width/2, 300); 
		context.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
		dashOffset -= speed;                                         // reduce dash length
		context.strokeText(that.letter, that.canvas.width/2, 300);                               // stroke letter

		if (dashOffset > 0) requestAnimationFrame(loop);             // animate
	})();

	var that = this;
	setTimeout(function(){
		playSound('3-your-turn.wav');
		that.waitForInput();
	},4100);
}

Letter.prototype.waitForInput = function() {
	//@todo automatically check the results, don't rely on clicking a button
	//@todo improve the quality of the tracing check algorithm
	this.acceptInput();
	var that = this;
	function click() {
		if(false){
			that.demonstrate();
		}else{
			$("#check").off('click',click);
			$("#check").hide();
			if(that.onComplete) {
				that.onComplete();
			}			
		}		
	}
	$("#check").on('click',click);
	$("#check").show();
}

Letter.prototype.acceptInput = function(){
	var isDrawing = false;
	var el = this.canvas;
	var ctx = el.getContext('2d');
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