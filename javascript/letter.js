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
			while(options.exclude.indexOf(this.letter) !== -1) {
				this.letter = possible.charAt(Math.floor(Math.random() * possible.length));
			}
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
	playSound(this.letter+'-intro.wav');
	var that = this;
	setTimeout(function(){
		that.demonstrate();
	},4500);
}

Letter.prototype.draw = function() {
		var context = this.canvas.getContext('2d');
		context.font = "300px sans-serif";
		context.fillStyle = "DarkKhaki";
		context.textAlign = "center";
		context.fillText(this.letter, this.canvas.width/2, 300); 
}

Letter.prototype.demonstrate = function() {
	//@todo have an animated hand lead the tracing (super hard)
	//@todo the tracing algorithm sucks... is there anything out there that can draw letters as polylines?
	playSound(this.letter+'.wav',1200,3); 
	
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

	//@todo trace the letter with a colored line to show how it should be traced
	var that = this;
	setTimeout(function(){
		playSound('3-your-turn.wav');
		that.waitForInput();
	},4100);
}

Letter.prototype.waitForInput = function() {
	//@todo evaluate success, see draw() and calculateTransparency() below
	var acceptable = true;
	if(acceptable) {
		if(this.onComplete) {
			this.onComplete();
		}
	} else {
		this.demonstrate();
	}
}