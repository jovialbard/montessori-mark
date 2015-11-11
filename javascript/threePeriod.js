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
	/*
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
	/*
	 * @todo say the sound and ask the child to touch that letter in the following order:
	 * last, first, second, random, random from other two, remaining
	 */
	this.thirdPeriod();
}

ThreePeriodLesson.prototype.thirdPeriod = function() {
	// @todo ask what sound each letter makes randomly until they get them all right or we realize they're not ready
}

ThreePeriodLesson.prototype.cleanup = function() {
	$(this.div).html('');
}

