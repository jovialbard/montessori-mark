var ThreePeriodLesson = function(div, type, total) {
	this.div = div;
	this.type = type;
	this.total = total;
	this.elements = [];
}
ThreePeriodLesson.prototype.start = function() {
	this.introduce(this.total);
}

ThreePeriodLesson.prototype.introduce = function(total, count) {
	if(!count) {
		count = 0;
	}
	console.log(this.elements);
	console.log(count + "/" + total);
	var that = this;
	function onComplete() {
		that.cleanup(); 
		count++;
		if(count >= total) {
			that.firstPeriod(that.elements);
		} else {
			that.introduce(total, count);
		}		
	}
	var el = $('<canvas width=400 height=400>');
	$(this.div).append(el);
	this.elements[count] = new this.type(el.get(0),{exclude: this.elements});
	//* Toggle to skip introductions
	onComplete();
	/*/
	this.elements[count].introduce({onComplete: onComplete});
	//*/
}

ThreePeriodLesson.prototype.firstPeriod = function() {
	console.log(this.elements);
	var that = this;
	var el = $('<canvas width=400 height=400>');
	$(that.div).append(el);
	el.css('border','10px solid yellow');
	that.elements[0].draw(el.get(0));
	that.elements[0].playName();
	setTimeout(function(){
		el.css('border','1px solid black');
		el = $('<canvas width=400 height=400>');
		$(that.div).append(el);
		el.css('border','10px solid yellow');
		that.elements[1].draw(el.get(0));
		that.elements[1].playName();
	},2000);
	setTimeout(function(){						
		el.css('border','1px solid black');
		el = $('<canvas width=400 height=400>');
		$(that.div).append(el);
		el.css('border','10px solid yellow');
		that.elements[2].draw(el.get(0));
		that.elements[2].playName();
	},4000);
	setTimeout(function(){						
		el.css('border','1px solid black');
		that.secondPeriod(that.elements);
	},6000);
}

ThreePeriodLesson.prototype.secondPeriod = function() {
	//@todo, make this work for group sizes other than 3
	//ask in this order: last, first, middle, first, middle, last
	this.secondPeriodQuestions = [2,0,1,0,1,2];
	this.secondPeriodAsked = 0;
	this.secondPeriodTimedOut = 0;
	this.secondPeriodAsk();
}

ThreePeriodLesson.prototype.secondPeriodAsk = function() {
	var that = this;
	for(var i in this.elements) {
		this.elements[i].canvas.onclick = function(){that.secondPeriodIncorrect();};
	}
	var e = this.elements[this.secondPeriodQuestions[0]];
	e.canvas.onclick = function(){that.secondPeriodCorrect();};
	e.askRecognize();
	this.secondPeriodTimeoutID = setTimeout(function(){
		if(this.secondPeriodTimedOut > 3) {
			that.secondPeriodCancel();
		} else {
			that.secondPeriodTimedOut++;
			secondPeriodAsk();
		}
	},6000);
}

ThreePeriodLesson.prototype.secondPeriodCorrect = function() {
	//@todo indicate correct
	this.secondPeriodAnswered();
	if(this.secondPeriodQuestions.length) {
		this.secondPeriodAsk();
	} else {
		this.thirdPeriod();
	}
}

ThreePeriodLesson.prototype.secondPeriodIncorrect = function() {
	//@todo indicate incorrect
	var i = this.secondPeriodQuestions[0];
	this.secondPeriodAnswered();
	if(this.secondPeriodAsked > 12) {
		this.secondPeriodCancel();
		return;
	}
	//add a random element in at the end of the queue
	var j;
	do {
		j = Math.floor(Math.random() * this.elements.length);
	} while(j === i);
	this.secondPeriodQuestions.push(j);
	//add the missed element in at the end of the queue
	this.secondPeriodQuestions.push(i);
	this.secondPeriodAsk();
}

ThreePeriodLesson.prototype.secondPeriodAnswered = function() {
	clearTimeout(this.secondPeriodTimeoutID);
	this.secondPeriodTimedOut = 0;
	this.secondPeriodAsked++;
	//remove completed element, ensure next element is not the same
	while(this.secondPeriodQuestions.length > 1 
			&& this.secondPeriodQuestions[0] === this.secondPeriodQuestions[1]) {
		this.secondPeriodQuestions.shift();
	}
	this.secondPeriodQuestions.shift();
}

ThreePeriodLesson.prototype.secondPeriodCancel = function() {
	playSound('6-thank-you.wav');
	this.cleanup();
}

ThreePeriodLesson.prototype.secondPeriodCompleted = function() {
	for(var i in this.elements) {
		this.elements[i].canvas.onclick = function() {};
	}
	this.thirdPeriod();
}

ThreePeriodLesson.prototype.thirdPeriod = function() {
	// @todo ask what sound each letter makes randomly six times (we can't tell if they're doing it right
}

ThreePeriodLesson.prototype.cleanup = function() {
	$(this.div).html('');
}

