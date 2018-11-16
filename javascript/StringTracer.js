var StringTracer = function (options) {
	this.options = options;
	this.ctx = this.options.canvas.getContext("2d");
	this._ctx = this.options._canvas.getContext("2d");
	this.row_height = this.options.fontSize;
	this.letter_radius = (this.row_height/4) + (this.row_height/20);
	this.fontWeight = this.options.fontWeight ? this.options.fontWeight : (this.letter_radius)/4;
	this.color = this.options.color? this.options.color : 'black';
	this.char_offset_x = 0;
	this.char_offset_y = 0;
	this.init_offset = this.options.xpos;
	this.init_offset_y = this.options.ypos;
	this.char_num = 0;
	this._draw_letter();
};

StringTracer.prototype._draw_letter = function () {
	if (this.char_num >= this.options.string.length) {
		clearInterval(this.interval);
		this.options.complete();
	}else{
		var me = this;
		var character = this.options.string.charAt(this.char_num);
		this.strokes = this._letter_strokes(character);
		this.stroke_num = 0;
		
		if(this.options.animationSpeed) {
			this.interval = setInterval(function () {
				me._draw_stroke();
			}, 100/this.options.animationSpeed);
		} else {
			me._draw_stroke();
		}
	}
	
}


StringTracer.prototype._letter_strokes = function (character) {
	switch (character) {
		case 'a':
			return [
				{
					type: 'circle',
					angle: 0,
					angleS: 0,
					angleLimit: -2,
					angleIncrement: 0.02,
					greaterCheck : true,
					cx: this.init_offset + this.letter_radius - this.fontWeight + this.char_offset_x,
					cy: this.init_offset_y + (this.row_height/2) + (this.row_height/4) + this.char_offset_y,
					radius: this.letter_radius - this.fontWeight,
					counterClockWise: true,
					fill: false
				},
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius*2) - (this.fontWeight*2) + this.char_offset_x,
					ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius*2) - (this.fontWeight*2) + this.char_offset_x,
					_ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					lineEndPosY: this.init_offset_y + (this.row_height) + this.char_offset_y,
					lineIncrementY: 2,
					yIncrement: false,
					yDecrement: true,
					xIncrement: false,
					xDecrement: false
				}
			];
			
		case 'b':
			return [
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius/2) - (this.fontWeight*2) + this.char_offset_x,
					ly: this.init_offset_y + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius/2) - (this.fontWeight*2) + this.char_offset_x,
					_ly: this.init_offset_y + this.char_offset_y,
					lineEndPosY: this.init_offset_y + (this.row_height) + this.char_offset_y,
					lineIncrementY: 2,
					yIncrement: false,
					yDecrement: true,
					xIncrement: false,
					xDecrement: false
				},
				{
					type: 'circle',
					angle: 1,
					angleS: 1,
					angleLimit: 3,
					angleIncrement: 0.02,
					greaterCheck : false,
					cx: this.init_offset + this.letter_radius - this.fontWeight + this.char_offset_x,
					cy: this.init_offset_y + (this.row_height/2) + (this.row_height/4) + this.char_offset_y,
					radius: this.letter_radius - this.fontWeight,
					counterClockWise: false,
					fill: false
				}
			];
			
		case 'c':
			return [
				{
					type: 'circle',
					angle: -0.2,
					angleS: -0.2,
					angleLimit: -1.8,
					angleIncrement: 0.02,
					greaterCheck : true,
					cx: this.init_offset + this.letter_radius - this.fontWeight + this.char_offset_x,
					cy: this.init_offset_y + (this.row_height/2) + (this.row_height/4) + this.char_offset_y,
					radius: this.letter_radius - this.fontWeight,
					counterClockWise: true,
					fill: false
				}
			];
			
		case 'd':
			return [
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius*2) - (this.fontWeight*2) + this.char_offset_x,
					ly: this.init_offset_y + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius*2) - (this.fontWeight*2) + this.char_offset_x,
					_ly: this.init_offset_y + this.char_offset_y,
					lineEndPosY: this.init_offset_y + (this.row_height) + this.char_offset_y,
					lineIncrementY: 2,
					yIncrement: false,
					yDecrement: true,
					xIncrement: false,
					xDecrement: false
				},
				{
					type: 'circle',
					angle: 0,
					angleS: 0,
					angleLimit: -2,
					angleIncrement: 0.02,
					greaterCheck : true,
					cx: this.init_offset + this.letter_radius - this.fontWeight + this.char_offset_x,
					cy: this.init_offset_y + (this.row_height/2) + (this.row_height/4) + this.char_offset_y,
					radius: this.letter_radius - this.fontWeight,
					counterClockWise: true,
					fill: false
				}
			];
		
		case 'e':
			return [
				{
					type: 'line',
					lx: this.init_offset + this.char_offset_x,
					ly: this.init_offset_y + (this.row_height/2) + (this.row_height/4) - (this.row_height/40) + this.char_offset_y,
					_lx: this.init_offset + this.char_offset_x,
					_ly: this.init_offset_y + (this.row_height/2) + (this.row_height/4) - (this.row_height/40) + this.char_offset_y,
					lineEndPosX: this.init_offset + (this.letter_radius*2) - (this.fontWeight*2) + this.char_offset_x,
					lineIncrementX: 2,
					yIncrement: false,
					yDecrement: false,
					xIncrement: true,
					xDecrement: false
				},
				{
					type: 'circle',
					angle: 0,
					angleS: 0,
					angleLimit: -1.8,
					angleIncrement: 0.02,
					greaterCheck : true,
					cx: this.init_offset + this.letter_radius - this.fontWeight + this.char_offset_x,
					cy: this.init_offset_y + (this.row_height/2) + (this.row_height/4) + this.char_offset_y,
					radius: this.letter_radius - this.fontWeight,
					counterClockWise: true,
					fill: false
				}
			];
			
		case 'f':
			return [
				{
					type: 'circle',
					angle: -0.1,
					angleS: -0.1,
					angleLimit: -1,
					angleIncrement: 0.02,
					greaterCheck : true,
					cx: this.init_offset + (this.letter_radius - Math.ceil(this.letter_radius/5)) + ((this.letter_radius - Math.ceil(this.letter_radius/5))/2) - this.fontWeight + this.char_offset_x,
					cy: this.init_offset_y + (this.row_height/4) + this.char_offset_y,
					radius: (this.letter_radius - Math.ceil(this.letter_radius/5)) - this.fontWeight,
					counterClockWise: true,
					fill: false
				},
				{
					type: 'line',
					lx: this.init_offset + ((this.letter_radius - Math.ceil(this.letter_radius/5))/2) + this.char_offset_x,
					ly: this.init_offset_y + (this.row_height/4) - (this.row_height/26.66) + this.char_offset_y,
					_lx: this.init_offset + ((this.letter_radius - Math.ceil(this.letter_radius/5))/2) + this.char_offset_x,
					_ly: this.init_offset_y + (this.row_height/4) - (this.row_height/26.66) + this.char_offset_y,
					lineEndPosY: this.init_offset_y + this.row_height + this.char_offset_y,
					lineIncrementY: 2,
					yIncrement: false,
					yDecrement: true,
					xIncrement: false,
					xDecrement: false
				},
				{
					type: 'line',
					lx: this.init_offset + this.char_offset_x,
					ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					_lx: this.init_offset + this.char_offset_x,
					_ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					lineEndPosX: this.init_offset + this.char_offset_x + ((this.letter_radius - Math.ceil(this.letter_radius/5))) + ((this.letter_radius - Math.ceil(this.letter_radius/5))/2),
					lineIncrementX: 2,
					yIncrement: false,
					yDecrement: false,
					xIncrement: true,
					xDecrement: false
				}
			];
			
		case 'g':
			return [
				{
					type: 'circle',
					angle: 0,
					angleS: 0,
					angleLimit: -2,
					angleIncrement: 0.02,
					greaterCheck : true,
					cx: this.init_offset + this.letter_radius - this.fontWeight + this.char_offset_x,
					cy: this.init_offset_y + (this.row_height/2) + (this.row_height/4) + this.char_offset_y,
					radius: this.letter_radius - this.fontWeight,
					counterClockWise: true,
					fill: false
				},
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius*2) - (this.fontWeight*2) + this.char_offset_x,
					ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius*2) - (this.fontWeight*2) + this.char_offset_x,
					_ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					lineEndPosY: this.init_offset_y + this.row_height + (this.row_height/4) + this.char_offset_y,
					lineIncrementY: 2,
					yIncrement: false,
					yDecrement: true,
					xIncrement: false,
					xDecrement: false
				},
				{
					type: 'circle',
					angle: -2,
					angleS: -2,
					angleLimit: -1,
					angleIncrement: 0.02,
					greaterCheck : false,
					cx: this.init_offset + this.letter_radius - this.fontWeight + this.char_offset_x,
					cy: this.init_offset_y + this.row_height + (this.row_height/4) + this.char_offset_y,
					radius: this.letter_radius - this.fontWeight,
					counterClockWise: false,
					fill: false
				}
			];
			
		case 'h':
			return [
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius/2) - (this.fontWeight*2) + this.char_offset_x,
					ly: this.init_offset_y + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius/2) - (this.fontWeight*2) + this.char_offset_x,
					_ly: this.init_offset_y + this.char_offset_y,
					lineEndPosY: this.init_offset_y + this.row_height + this.char_offset_y,
					lineIncrementY: 2,
					yIncrement: false,
					yDecrement: true,
					xIncrement: false,
					xDecrement: false
				},
				{
					type: 'circle',
					angle: 1,
					angleS: 1,
					angleLimit: 2,
					angleIncrement: 0.02,
					greaterCheck : false,
					cx: this.init_offset + this.letter_radius - this.fontWeight + this.char_offset_x,
					cy: this.init_offset_y + (this.row_height/2) + (this.row_height/4) + this.char_offset_y,
					radius: this.letter_radius - this.fontWeight,
					counterClockWise: false,
					fill: false
				},
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius*2) - (this.fontWeight*2) + this.char_offset_x,
					ly: this.init_offset_y + (this.row_height/2) + (this.row_height/4) - (this.row_height/26.66) + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius*2) - (this.fontWeight*2) + this.char_offset_x,
					_ly: this.init_offset_y + (this.row_height/2) + (this.row_height/4) - (this.row_height/26.66) + this.char_offset_y,
					lineEndPosY: this.init_offset_y + (this.row_height) + this.char_offset_y,
					lineIncrementY: 1,
					yIncrement: false,
					yDecrement: true,
					xIncrement: false,
					xDecrement: false
				}
			];
			
		case 'i':
			return [
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius/2) - (this.fontWeight*2) + this.char_offset_x,
					ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius/2) - (this.fontWeight*2) + this.char_offset_x,
					_ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					lineEndPosY: this.init_offset_y + (this.row_height) + this.char_offset_y,
					lineIncrementY: 2,
					yIncrement: false,
					yDecrement: true,
					xIncrement: false,
					xDecrement: false
				},
				{
					type: 'dot',
					angle: 2,
					angleS: 0,
					angleLimit: 2,
					angleIncrement: 2,
					cx: this.init_offset + (this.letter_radius/2) - (this.fontWeight*2) + this.char_offset_x,
					cy: this.init_offset_y + (this.row_height/4) + (this.row_height/18) + this.char_offset_y,
					radius: (this.fontWeight/3),
					counterClockWise: false,
					fill: true,
					delayCount: 0,
				}
			];
			
		case 'j':
			return [
				{
					type: 'line',
					lx: this.init_offset + ((this.letter_radius - Math.ceil(this.letter_radius/5))*2) - (this.fontWeight*2) + this.char_offset_x,
					ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					_lx: this.init_offset + ((this.letter_radius - Math.ceil(this.letter_radius/5))*2) - (this.fontWeight*2) + this.char_offset_x,
					_ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					lineEndPosY: this.init_offset_y + this.row_height + (this.row_height/4) + this.char_offset_y,
					lineIncrementY: 2,
					yIncrement: false,
					yDecrement: true,
					xIncrement: false,
					xDecrement: false
					
				},
				{
					type: 'circle',
					angle: -2,
					angleS: -2,
					angleLimit: -1,
					angleIncrement: 0.02,
					cx: this.init_offset + ((this.letter_radius - Math.ceil(this.letter_radius/5))) - (this.fontWeight) + this.char_offset_x,
					cy: this.init_offset_y + this.row_height + (this.row_height/4) + this.char_offset_y,
					radius: (this.letter_radius - Math.ceil(this.letter_radius/5)) - this.fontWeight,
					counterClockWise: false,
					fill: false
				},
				{
					type: 'dot',
					angle: 2,
					angleS: 0,
					angleLimit: 2,
					angleIncrement: 2,
					greaterCheck : false,
					cx: this.init_offset + ((this.letter_radius - Math.ceil(this.letter_radius/5))*2) - (this.fontWeight*2) + this.char_offset_x,
					cy: this.init_offset_y + (this.row_height/4) + (this.row_height/18) + this.char_offset_y,
					radius: (this.fontWeight/3),
					counterClockWise: false,
					fill: true,
					delayCount: 0,
				}
			];
			
		case 'k':
			return [
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius/2) - (this.fontWeight*2) + this.char_offset_x,
					ly: this.init_offset_y + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius/2) - (this.fontWeight*2) + this.char_offset_x,
					_ly: this.init_offset_y + this.char_offset_y,
					lineEndPosY: this.init_offset_y + this.row_height + this.char_offset_y,
					lineIncrementY: 2,
					yIncrement: false,
					yDecrement: true,
					xIncrement: false,
					xDecrement: false
				},
				{
					type: 'line',
					lx: this.init_offset + ((this.letter_radius - Math.ceil(this.letter_radius/20))*2) - (this.fontWeight*2) + this.char_offset_x,
					ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					_lx: this.init_offset + ((this.letter_radius - Math.ceil(this.letter_radius/20))*2) - (this.fontWeight*2) + this.char_offset_x,
					_ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					lineEndPosX: this.init_offset + this.char_offset_x,
					lineEndPosY: this.init_offset_y + (this.row_height/1.5) + this.char_offset_y,
					lineIncrementX: 2,
					lineIncrementY: 1,
					yIncrement: false,
					yDecrement: true,
					xIncrement: false,
					xDecrement: true
				},
				{
					type: 'line',
					lx: this.init_offset + ((this.letter_radius - Math.ceil(this.letter_radius/20))/2) - (this.fontWeight*2) + this.char_offset_x,
					ly: this.init_offset_y + (this.row_height/2) + (this.row_height/8) + this.char_offset_y,
					_lx: this.init_offset + ((this.letter_radius - Math.ceil(this.letter_radius/20))/2) - (this.fontWeight*2) + this.char_offset_x,
					_ly: this.init_offset_y + (this.row_height/2) + (this.row_height/8) + this.char_offset_y,
					lineEndPosX: this.init_offset + ((this.letter_radius - Math.ceil(this.letter_radius/20))*2) - (this.fontWeight*2) + this.char_offset_x,
					lineEndPosY: this.init_offset_y + this.row_height + this.char_offset_y,
					lineIncrementX: 1,
					lineIncrementY: 1,
					yIncrement: false,
					yDecrement: true,
					xIncrement: true,
					xDecrement: false
				}
			];
			
		case 'l':
			return [
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius/2) - (this.fontWeight*2) + this.char_offset_x,
					ly: this.init_offset_y + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius/2) - (this.fontWeight*2) + this.char_offset_x,
					_ly: this.init_offset_y + this.char_offset_y,
					lineEndPosY: this.init_offset_y + this.row_height + this.char_offset_y,
					lineIncrementY: 2,
					yIncrement: false,
					yDecrement: true,
					xIncrement: false,
					xDecrement: false
				}
			];
			
		case 'm':
			return [
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius/2) - (this.fontWeight*2) + this.char_offset_x,
					ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius/2) - (this.fontWeight*2) + this.char_offset_x,
					_ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					lineEndPosY: this.init_offset_y + this.row_height + this.char_offset_y,
					lineIncrementY: 2,
					yIncrement: false,
					yDecrement: true,
					xIncrement: false,
					xDecrement: false
				},
				{
					type: 'circle',
					angle: 1,
					angleS: 1,
					angleLimit: 2,
					angleIncrement: 0.02,
					greaterCheck : false,
					cx: this.init_offset + ((this.letter_radius - Math.ceil(this.row_height/20))) - (this.fontWeight) + this.char_offset_x,
					cy: this.init_offset_y + (this.row_height/2) + (this.row_height/4) - (this.row_height/40) + this.char_offset_y,
					radius: (this.letter_radius - Math.ceil(this.row_height/20)) - this.fontWeight,
					counterClockWise: false,
					fill: false
				},
				{
					type: 'line',
					lx: this.init_offset + ((this.letter_radius - Math.ceil(this.row_height/20))*2) - (this.fontWeight*2) + this.char_offset_x,
					ly: this.init_offset_y + (this.row_height/2) + (this.row_height/4) - (this.row_height/26.66) + this.char_offset_y,
					_lx: this.init_offset + ((this.letter_radius - Math.ceil(this.row_height/20))*2) - (this.fontWeight*2) + this.char_offset_x,
					_ly: this.init_offset_y + (this.row_height/2) + (this.row_height/4) - (this.row_height/26.66) + this.char_offset_y,
					lineEndPosY: this.init_offset_y + this.row_height + this.char_offset_y,
					lineIncrementY: 1,
					yIncrement: false,
					yDecrement: true,
					xIncrement: false,
					xDecrement: false
				},
				{
					type: 'circle',
					angle: 1,
					angleS: 1,
					angleLimit: 2,
					angleIncrement: 0.02,
					greaterCheck : false,
					cx: this.init_offset + ((this.letter_radius - Math.ceil(this.row_height/20))*2) + ((this.letter_radius - Math.ceil(this.row_height/20))/2) - (this.fontWeight*(2.6/2)) + this.char_offset_x,
					cy: this.init_offset_y + (this.row_height/2) + (this.row_height/4) - (this.row_height/40) + this.char_offset_y,
					radius: (this.letter_radius - Math.ceil(this.row_height/20)) - this.fontWeight,
					counterClockWise: false,
					fill: false
				},
				{
					type: 'line',
					lx: this.init_offset + ((this.letter_radius - Math.ceil(this.row_height/20))*4) - (this.fontWeight*4) + this.char_offset_x,
					ly: this.init_offset_y + (this.row_height/2) + (this.row_height/4) - (this.row_height/26.66) + this.char_offset_y,
					_lx: this.init_offset + ((this.letter_radius - Math.ceil(this.row_height/20))*4) - (this.fontWeight*4) + this.char_offset_x,
					_ly: this.init_offset_y + (this.row_height/2) + (this.row_height/4) - (this.row_height/26.66) + this.char_offset_y,
					lineEndPosY: this.init_offset_y + this.row_height + this.char_offset_y,
					lineIncrementY: 1,
					yIncrement: false,
					yDecrement: true,
					xIncrement: false,
					xDecrement: false
				}
			];
			
		case 'n':
			return [
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius/2) - (this.fontWeight*2) + this.char_offset_x,
					ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius/2) - (this.fontWeight*2) + this.char_offset_x,
					_ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					lineEndPosY: this.init_offset_y + this.row_height + this.char_offset_y,
					lineIncrementY: 2,
					yIncrement: false,
					yDecrement: true,
					xIncrement: false,
					xDecrement: false
				},
				{
					type: 'circle',
					angle: 1,
					angleS: 1,
					angleLimit: 2,
					angleIncrement: 0.02,
					greaterCheck : false,
					cx: this.init_offset + ((this.letter_radius - Math.ceil(this.row_height/20))) - (this.fontWeight) + this.char_offset_x,
					cy: this.init_offset_y + (this.row_height/2) + (this.row_height/4) - (this.row_height/40) + this.char_offset_y,
					radius: (this.letter_radius - Math.ceil(this.row_height/20)) - this.fontWeight,
					counterClockWise: false,
					fill: false
				},
				{
					type: 'line',
					lx: this.init_offset + ((this.letter_radius - Math.ceil(this.row_height/20))*2) - (this.fontWeight*2) + this.char_offset_x,
					ly: this.init_offset_y + (this.row_height/2) + (this.row_height/4) - (this.row_height/26.66) + this.char_offset_y,
					_lx: this.init_offset + ((this.letter_radius - Math.ceil(this.row_height/20))*2) - (this.fontWeight*2) + this.char_offset_x,
					_ly: this.init_offset_y + (this.row_height/2) + (this.row_height/4) - (this.row_height/26.66) + this.char_offset_y,
					lineEndPosY: this.init_offset_y + this.row_height + this.char_offset_y,
					lineIncrementY: 1,
					yIncrement: false,
					yDecrement: true,
					xIncrement: false,
					xDecrement: false
				}
			];
		case 'o':
			return [
				{
					type: 'circle',
					angle: 0,
					angleS: 0,
					angleLimit: -2,
					angleIncrement: 0.02,
					greaterCheck : true,
					cx: this.init_offset + this.letter_radius - this.fontWeight + this.char_offset_x,
					cy: this.init_offset_y + (this.row_height/2) + (this.row_height/4) + this.char_offset_y,
					radius: this.letter_radius - this.fontWeight,
					counterClockWise: true,
					fill: false
				}
			];
			
		case 'p':
			return [
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius/2) - (this.fontWeight*2) + this.char_offset_x,
					ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius/2) - (this.fontWeight*2) + this.char_offset_x,
					_ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					lineEndPosY: this.init_offset_y + this.row_height + (this.row_height/2) - (this.row_height/16) + this.char_offset_y,
					lineIncrementY: 2,
					yIncrement: false,
					yDecrement: true,
					xIncrement: false,
					xDecrement: false
					
				},
				{
					type: 'circle',
					angle: 1,
					angleS: 1,
					angleLimit: 3,
					angleIncrement: 0.02,
					greaterCheck : false,
					cx: this.init_offset + this.letter_radius - this.fontWeight + this.char_offset_x,
					cy: this.init_offset_y + (this.row_height/2) + (this.row_height/4) + this.char_offset_y,
					radius: this.letter_radius - this.fontWeight,
					counterClockWise: false,
					fill: false
				}
				
			];
			
		case 'q':
			return [
				{
					type: 'circle',
					angle: 0,
					angleS: 0,
					angleLimit: -2,
					angleIncrement: 0.02,
					greaterCheck : true,
					cx: this.init_offset + this.letter_radius - this.fontWeight + this.char_offset_x,
					cy: this.init_offset_y + (this.row_height/2) + (this.row_height/4) + this.char_offset_y,
					radius: this.letter_radius - this.fontWeight,
					counterClockWise: true,
					fill: false
				},
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius*2) - (this.fontWeight*2) + this.char_offset_x,
					ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius*2) - (this.fontWeight*2) + this.char_offset_x,
					_ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					lineEndPosY: this.init_offset_y + this.row_height + (this.row_height/2) - (this.row_height/16) + this.char_offset_y,
					lineIncrementY: 2,
					yIncrement: false,
					yDecrement: true,
					xIncrement: false,
					xDecrement: false
				},
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius*2) - (this.fontWeight*2) + this.char_offset_x,
					ly: this.init_offset_y + this.row_height + (this.row_height/2) - (this.row_height/16) - 1 + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius*2) - (this.fontWeight*2) + this.char_offset_x,
					_ly: this.init_offset_y + this.row_height + (this.row_height/2) - (this.row_height/16) - 1 + this.char_offset_y,
					lineEndPosX: this.init_offset + (this.letter_radius*2) + (this.letter_radius) - (this.fontWeight*2) + this.char_offset_x,
					lineEndPosY: this.init_offset_y + this.row_height + (this.row_height/4) - (this.row_height/16) + this.char_offset_y,
					lineIncrementY: 1,
					lineIncrementX: 1,
					yIncrement: true,
					yDecrement: false,
					xIncrement: true,
					xDecrement: false
				}
			];
			
		case 'r':
			return [
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius/2) - (this.fontWeight*2) + this.char_offset_x,
					ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius/2) - (this.fontWeight*2) + this.char_offset_x,
					_ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					lineEndPosY: this.init_offset_y + this.row_height + this.char_offset_y,
					lineIncrementY: 2,
					yIncrement: false,
					yDecrement: true,
					xIncrement: false,
					xDecrement: false
				},
				{
					type: 'circle',
					angle: 1,
					angleS: 1,
					angleLimit: 1.7,
					angleIncrement: 0.02,
					greaterCheck : false,
					cx: this.init_offset + this.letter_radius - this.fontWeight + this.char_offset_x,
					cy: this.init_offset_y + (this.row_height/2) + (this.row_height/4) + this.char_offset_y,
					radius: this.letter_radius - this.fontWeight,
					counterClockWise: false,
					fill: false
				}
			];
			
		case 's':
			return [
				{
					type: 'ellipse',
					angle: 0,
					angleS: 0,
					angleLimit: -4.8,
					angleIncrement: 0.05,
					greaterCheck : true,
					cx: this.init_offset + this.letter_radius - 1 - (this.fontWeight*3) + this.char_offset_x,
					cy: this.init_offset_y + (this.row_height/2) + (this.row_height/7) + this.char_offset_y,
					radiusX: this.letter_radius - (this.letter_radius/12) - (this.fontWeight*2),
					radiusY: this.letter_radius - (this.row_height/8) - this.fontWeight,
					counterClockWise: true,
					fill: false,
					rotation: 0
				},
				{
					type: 'ellipse',
					angle: -1.5,
					angleS: -1.5,
					angleLimit: 3,
					angleIncrement: 0.05,
					greaterCheck : false,
					cx: this.init_offset + this.letter_radius - (this.row_height/10) - (this.fontWeight*2) + this.char_offset_x,
					cy: this.init_offset_y + (this.row_height/2) + (this.row_height/4) + (this.row_height/8.88) + this.char_offset_y,
					radiusX: this.letter_radius - (this.letter_radius/24) - (this.fontWeight*2),
					radiusY: this.letter_radius - (this.row_height/9) - this.fontWeight,
					counterClockWise: false,
					fill: false,
					rotation: 0
				}
			];
			
		case 't':
			return [
				{
					type: 'line',
					lx: this.init_offset + this.char_offset_x  + ((this.letter_radius + (this.letter_radius/4))/2),
					ly: this.init_offset_y + (this.letter_radius/2) + this.char_offset_y,
					_lx: this.init_offset + this.char_offset_x + ((this.letter_radius + (this.letter_radius/4))/2),
					_ly: this.init_offset_y + (this.letter_radius/2) + this.char_offset_y,
					lineEndPosY: this.init_offset_y + this.row_height + this.char_offset_y,
					lineIncrementY: 2,
					yIncrement: false,
					yDecrement: true,
					xIncrement: false,
					xDecrement: false
				},
				{
					type: 'line',
					lx: this.init_offset + this.char_offset_x - (this.letter_radius/2) + (this.fontWeight*2),
					ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					_lx: this.init_offset + this.char_offset_x - (this.letter_radius/2) + (this.fontWeight*2),
					_ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					lineEndPosX: this.init_offset + this.char_offset_x + (this.letter_radius + (this.letter_radius/4)) - (this.letter_radius/2) + (this.fontWeight*2),
					lineIncrementX: 2,
					yIncrement: false,
					yDecrement: false,
					xIncrement: true,
					xDecrement: false
				}
			];
			
		case 'u':
			return [
				{
					type: 'line',
					lx: this.init_offset - (this.fontWeight) + this.char_offset_x,
					ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					_lx: this.init_offset - (this.fontWeight) + this.char_offset_x,
					_ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					lineEndPosY: this.init_offset_y + (this.row_height/2) + (this.row_height/4) + 1 + this.char_offset_y,
					lineIncrementY: 1,
					yIncrement: false,
					yDecrement: true,
					xIncrement: false,
					xDecrement: false
				},
				{
					type: 'circle',
					angle: 1,
					angleS: 1,
					angleLimit: 0,
					angleIncrement: 0.02,
					greaterCheck : true,
					cx: this.init_offset + this.letter_radius - (this.fontWeight*2) + this.char_offset_x,
					cy: this.init_offset_y + (this.row_height/2) + (this.row_height/4) + this.char_offset_y,
					radius: this.letter_radius - this.fontWeight,
					counterClockWise: true,
					fill: false
				},
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius*2) - (this.fontWeight*3) + this.char_offset_x,
					ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius*2) - (this.fontWeight*3) + this.char_offset_x,
					_ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					lineEndPosY: this.init_offset_y + this.row_height + this.char_offset_y,
					lineIncrementY: 2,
					yIncrement: false,
					yDecrement: true,
					xIncrement: false,
					xDecrement: false
				}
			];
			
		case 'v':
			return [
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius/2) - ((this.fontWeight/1.2)*2) + this.char_offset_x,
					ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius/2) - ((this.fontWeight/1.2)*2) + this.char_offset_x,
					_ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					lineEndPosX:  this.init_offset + (this.letter_radius/2) + (this.row_height/4) - ((this.fontWeight/1.2)*2) + this.char_offset_x,
					lineEndPosY: this.init_offset_y + this.row_height + this.char_offset_y,
					lineIncrementX: 1,
					lineIncrementY: 2,
					yIncrement: false,
					yDecrement: true,
					xIncrement: true,
					xDecrement: false,
					fontWeight: (this.fontWeight/1.2)
				},
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius/2) + (this.row_height/4) - ((this.fontWeight/1.2)*2) + this.char_offset_x,
					ly: this.init_offset_y + this.row_height + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius/2) + (this.row_height/4) - ((this.fontWeight/1.2)*2) + this.char_offset_x,
					_ly: this.init_offset_y + this.row_height + this.char_offset_y,
					lineEndPosX:  this.init_offset + (this.letter_radius/2) + (this.row_height/2) - ((this.fontWeight/1.2)*2) + this.char_offset_x,
					lineEndPosY: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					lineIncrementX: 1,
					lineIncrementY: 2,
					yIncrement: true,
					yDecrement: false,
					xIncrement: true,
					xDecrement: false,
					fontWeight: (this.fontWeight/1.2)
				}
			];
			
		case 'w':
			return [
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius/2) - (this.fontWeight*2) + this.char_offset_x,
					ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius/2) - (this.fontWeight*2) + this.char_offset_x,
					_ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					lineEndPosX:  this.init_offset + (this.letter_radius/2) + (this.row_height/8) - (this.fontWeight*2) + this.char_offset_x,
					lineEndPosY: this.init_offset_y + this.row_height + this.char_offset_y,
					lineIncrementX: 0.5,
					lineIncrementY: 2,
					yIncrement: false,
					yDecrement: true,
					xIncrement: true,
					xDecrement: false
				},
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius/2) + (this.row_height/8) - (this.fontWeight*2) + this.char_offset_x,
					ly: this.init_offset_y + this.row_height + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius/2) + (this.row_height/8) - (this.fontWeight*2) + this.char_offset_x,
					_ly: this.init_offset_y + this.row_height + this.char_offset_y,
					lineEndPosX:  this.init_offset + (this.letter_radius/2) + (this.row_height/4) - (this.fontWeight*2) + this.char_offset_x,
					lineEndPosY: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					lineIncrementX: 0.5,
					lineIncrementY: 2,
					yIncrement: true,
					yDecrement: false,
					xIncrement: true,
					xDecrement: false
				},
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius/2) + (this.row_height/4) - (this.fontWeight*2) + this.char_offset_x,
					ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius/2) + (this.row_height/4) - (this.fontWeight*2) + this.char_offset_x,
					_ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					lineEndPosX:  this.init_offset + (this.letter_radius/2) + (this.row_height/4) + (this.row_height/8) - (this.fontWeight*2) + this.char_offset_x,
					lineEndPosY: this.init_offset_y + this.row_height + this.char_offset_y,
					lineIncrementX: 0.5,
					lineIncrementY: 2,
					yIncrement: false,
					yDecrement: true,
					xIncrement: true,
					xDecrement: false
				},
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius/2) + (this.row_height/4) + (this.row_height/8) - (this.fontWeight*2) + this.char_offset_x,
					ly: this.init_offset_y + this.row_height + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius/2) + (this.row_height/4) + (this.row_height/8) - (this.fontWeight*2) + this.char_offset_x,
					_ly: this.init_offset_y + this.row_height + this.char_offset_y,
					lineEndPosX:  this.init_offset + (this.letter_radius/2) + (this.row_height/2) - (this.fontWeight*2) + this.char_offset_x,
					lineEndPosY: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					lineIncrementX: 0.5,
					lineIncrementY: 2,
					yIncrement: true,
					yDecrement: false,
					xIncrement: true,
					xDecrement: false
				}
				
			];
			
		case 'x':
			return [
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius/2) - (this.fontWeight*2) + this.char_offset_x,
					ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius/2) - (this.fontWeight*2) + this.char_offset_x,
					_ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					lineEndPosX:  this.init_offset + (this.letter_radius/2) + (this.row_height/4) + (this.row_height/8) - (this.fontWeight*2) + this.char_offset_x,
					lineEndPosY: this.init_offset_y + this.row_height + this.char_offset_y,
					lineIncrementX: 1.5,
					lineIncrementY: 2,
					yIncrement: false,
					yDecrement: true,
					xIncrement: true,
					xDecrement: false
				},
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius/2) + (this.row_height/4) + (this.row_height/8) - (this.fontWeight*2) + this.char_offset_x,
					ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius/2) + (this.row_height/4) + (this.row_height/8) - (this.fontWeight*2) + this.char_offset_x,
					_ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					lineEndPosX:  this.init_offset + (this.letter_radius/2) - (this.fontWeight*2) + this.char_offset_x,
					lineEndPosY: this.init_offset_y + this.row_height + this.char_offset_y,
					lineIncrementX: 1.5,
					lineIncrementY: 2,
					yIncrement: false,
					yDecrement: true,
					xIncrement: false,
					xDecrement: true
				}
				
			];
			
		case 'y':
			return [
				{
					type: 'line',
					lx: this.init_offset + ((this.letter_radius - Math.ceil(this.letter_radius/10))/2) - (this.fontWeight) + this.char_offset_x,
					ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					_lx: this.init_offset + ((this.letter_radius - Math.ceil(this.letter_radius/10))/2) - (this.fontWeight) + this.char_offset_x,
					_ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					lineEndPosY: this.init_offset_y + (this.row_height/2) + (this.row_height/4) + 1 + this.char_offset_y,
					lineIncrementY: 1,
					yIncrement: false,
					yDecrement: true,
					xIncrement: false,
					xDecrement: false
				},
				{
					type: 'circle',
					angle: 1,
					angleS: 1,
					angleLimit: 0,
					angleIncrement: 0.02,
					greaterCheck : true,
					cx: this.init_offset + (this.letter_radius - Math.ceil(this.letter_radius/10)) + ((this.letter_radius - Math.ceil(this.letter_radius/10))/2) - (this.fontWeight*2) + this.char_offset_x,
					cy: this.init_offset_y + (this.row_height/2) + (this.row_height/4) + this.char_offset_y,
					radius: (this.letter_radius - Math.ceil(this.letter_radius/10)) - this.fontWeight,
					counterClockWise: true,
					fill: false
				},
				{
					type: 'line',
					lx: this.init_offset + ((this.letter_radius - Math.ceil(this.letter_radius/10))*2) - 1 - (this.fontWeight) + this.char_offset_x,
					ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					_lx: this.init_offset + ((this.letter_radius - Math.ceil(this.letter_radius/10))*2) - 1 - (this.fontWeight) + this.char_offset_x,
					_ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					lineEndPosY: this.init_offset_y + this.row_height + (this.row_height/4) + this.char_offset_y,
					lineIncrementY: 2,
					yIncrement: false,
					yDecrement: true,
					xIncrement: false,
					xDecrement: false
					
				},
				{
					type: 'circle',
					angle: -2,
					angleS: -2,
					angleLimit: -1,
					angleIncrement: 0.02,
					greaterCheck : false,
					cx: this.init_offset + ((this.letter_radius - Math.ceil(this.letter_radius/10))) - 1 + this.char_offset_x,
					cy: this.init_offset_y + this.row_height + (this.row_height/4) + this.char_offset_y,
					radius: (this.letter_radius - Math.ceil(this.letter_radius/10)) - this.fontWeight,
					counterClockWise: false,
					fill: false
				}
				
				
			];
			
		case 'z':
			return [
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius/2) - ((this.fontWeight/1.2)*2) + this.char_offset_x,
					ly: this.init_offset_y + (this.row_height/2) + ((this.fontWeight/(1.2*2))) + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius/2) - ((this.fontWeight/1.2)*2) + this.char_offset_x,
					_ly: this.init_offset_y + (this.row_height/2) + ((this.fontWeight/(1.2*2))) + this.char_offset_y,
					lineEndPosX: this.init_offset + (this.letter_radius/2) + ((this.letter_radius - Math.ceil(this.letter_radius/20))*2) - ((this.fontWeight/1.2)*2) + this.char_offset_x,
					lineIncrementX: 2,
					yIncrement: false,
					yDecrement: false,
					xIncrement: true,
					xDecrement: false,
					fontWeight: (this.fontWeight/1.2)
				},
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius/2) + ((this.letter_radius - Math.ceil(this.letter_radius/20))*2) - ((this.fontWeight/1.2)*2) + this.char_offset_x,
					ly: this.init_offset_y + (this.row_height/2) + ((this.fontWeight/(1.2*2))) + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius/2) + ((this.fontWeight/(1.2*2))) + ((this.letter_radius - Math.ceil(this.letter_radius/20))*2) - ((this.fontWeight/1.2)*2) + this.char_offset_x,
					_ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					lineEndPosX:  this.init_offset + (this.letter_radius/2) - ((this.fontWeight/1.2)*2) + this.char_offset_x,
					lineEndPosY: this.init_offset_y + this.row_height - ((this.fontWeight/(1.2*2))) + this.char_offset_y,
					lineIncrementX: 2.4,
					lineIncrementY: 2,
					yIncrement: false,
					yDecrement: true,
					xIncrement: false,
					xDecrement: true,
					fontWeight: (this.fontWeight/1.2)
				},
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius/2) - ((this.fontWeight/1.2)*2) + this.char_offset_x,
					ly: this.init_offset_y + this.row_height - ((this.fontWeight/(1.2*2))) + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius/2) - ((this.fontWeight/1.2)*2) + this.char_offset_x,
					_ly: this.init_offset_y + this.row_height - ((this.fontWeight/(1.2*2))) + this.char_offset_y,
					lineEndPosX: this.init_offset + (this.letter_radius/2) + ((this.letter_radius - Math.ceil(this.letter_radius/20))*2) - ((this.fontWeight/1.2)*2) + this.char_offset_x,
					lineIncrementX: 2,
					yIncrement: false,
					yDecrement: false,
					xIncrement: true,
					xDecrement: false,
					fontWeight: (this.fontWeight/1.2)
				}
				
			];
			
		case '0':
			return [
				{
					type: 'ellipse',
					angle: -1.3,
					angleS: -1.3,
					angleLimit: -8,
					angleIncrement: 0.05,
					greaterCheck : true,
					cx: this.init_offset + (this.letter_radius + (this.letter_radius/4)) - this.fontWeight + this.char_offset_x,
					cy: this.init_offset_y + (this.row_height/2) + (this.row_height/16) + this.char_offset_y,
					radiusX: (this.letter_radius + (this.letter_radius/4)) - this.fontWeight,
					radiusY: (this.letter_radius + (this.letter_radius/2) + (this.letter_radius/12)) - this.fontWeight,
					counterClockWise: true,
					fill: false,
					rotation: 0
				}
			];
			
		case '1':
			return [
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius/2) - (this.fontWeight*2) + this.char_offset_x,
					ly: this.init_offset_y + this.letter_radius + (this.letter_radius/12) + 1 + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius/2) - (this.fontWeight*2) + this.char_offset_x,
					_ly: this.init_offset_y + this.letter_radius + (this.letter_radius/12) + 1 + this.char_offset_y,
					lineEndPosX: this.init_offset + (this.letter_radius) - (this.fontWeight*2) + this.char_offset_x,
					lineEndPosY: (this.letter_radius + (this.letter_radius/4)) + this.char_offset_y,
					lineIncrementX: 1,
					lineIncrementY: 1,
					yIncrement: true,
					yDecrement: false,
					xIncrement: true,
					xDecrement: false
				},
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius) - (this.fontWeight*2) + this.char_offset_x,
					ly: this.init_offset_y + (this.letter_radius/2) + 1 + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius) - (this.fontWeight*2) + this.char_offset_x,
					_ly: this.init_offset_y + (this.letter_radius/2) + 1 + this.char_offset_y,
					lineEndPosY: this.init_offset_y + this.row_height + this.char_offset_y,
					lineIncrementY: 2,
					yIncrement: false,
					yDecrement: true,
					xIncrement: false,
					xDecrement: false
				}
			];
			
		case '2':
			return [
				
				{
					type: 'ellipse',
					angle: -2.0,
					angleS: -2.0,
					angleLimit: 1.60,
					angleIncrement: 0.05,
					greaterCheck : false,
					cx: this.init_offset + this.letter_radius + 1 - this.fontWeight + this.char_offset_x,
					cy: this.init_offset_y + (this.row_height/2) - (this.row_height/16) + this.char_offset_y,
					radiusX: this.letter_radius + (this.letter_radius/8) - this.fontWeight,
					radiusY: this.letter_radius + (this.letter_radius/8) - this.fontWeight,
					counterClockWise: false,
					fill: false,
					rotation: -0.8
				},
				{
					type: 'line',
					lx: this.init_offset + ((this.letter_radius)*1.7) - (this.fontWeight) + this.char_offset_x,
					ly: this.init_offset_y + (this.row_height/2) + (this.row_height/9) + this.char_offset_y,
					_lx: this.init_offset + ((this.letter_radius)*1.7) - (this.fontWeight) + this.char_offset_x,
					_ly: this.init_offset_y + (this.row_height/2) + (this.row_height/9) + this.char_offset_y,
					lineEndPosX: this.init_offset + this.char_offset_x - this.fontWeight,
					lineEndPosY: this.init_offset_y + this.row_height - (this.row_height/26.66) + this.char_offset_y,
					lineIncrementX: 1.35,
					lineIncrementY: 1,
					yIncrement: false,
					yDecrement: true,
					xIncrement: false,
					xDecrement: true
				},
				{
					type: 'line',
					lx: this.init_offset + this.char_offset_x + (this.fontWeight/2) - this.fontWeight,
					ly: this.init_offset_y + this.row_height - (this.row_height/26.66) + this.char_offset_y,
					_lx: this.init_offset + this.char_offset_x + (this.fontWeight/2) - this.fontWeight,
					_ly: this.init_offset_y + this.row_height - (this.row_height/26.66) + this.char_offset_y,
					lineEndPosX: this.init_offset + ((this.letter_radius+1)*2) - (this.fontWeight) + this.char_offset_x,
					lineEndPosY: this.init_offset_y + this.row_height - (this.row_height/26.66) + this.char_offset_y,
					lineIncrementX: 2,
					yIncrement: false,
					yDecrement: false,
					xIncrement: true,
					xDecrement: false
				}
				
			];
			
		case '3':
			return [
				{
					type: 'circle',
					angle: 1.1,
					angleS: 1.1,
					angleLimit: 2.5,
					angleIncrement: 0.02,
					greaterCheck : false,
					cx: this.init_offset + this.letter_radius - (this.letter_radius/6) - this.fontWeight + this.char_offset_x,
					cy: this.init_offset_y + this.letter_radius + (this.letter_radius/6) + this.char_offset_y,
					radius: this.letter_radius - (this.letter_radius/6) - this.fontWeight,
					counterClockWise: false,
					fill: false
				},
				{
					type: 'circle',
					angle: 1.5,
					angleS: 1.5,
					angleLimit: 2.9,
					angleIncrement: 0.02,
					greaterCheck : false,
					cx: this.init_offset + this.letter_radius - (this.letter_radius/6) - this.fontWeight + this.char_offset_x,
					cy: this.init_offset_y + (this.row_height/2) + (this.row_height/4) + this.char_offset_y,
					radius: this.letter_radius - 1 - this.fontWeight,
					counterClockWise: false,
					fill: false
				}
				
			];
		
		case '4':
			return [
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius/2) - (this.fontWeight*2) + this.char_offset_x,
					ly: this.init_offset_y + (this.letter_radius/2) + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius/2) - (this.fontWeight*2) + this.char_offset_x,
					_ly: this.init_offset_y + (this.letter_radius/2) + this.char_offset_y,
					lineEndPosY: this.init_offset_y + (this.letter_radius*2) + (this.letter_radius/26.66) + this.char_offset_y,
					lineIncrementY: 1,
					lineIncrementX: 0.5,
					yIncrement: false,
					yDecrement: true,
					xIncrement: false,
					xDecrement: false
				},
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius/2) - (this.fontWeight*2.5) + this.char_offset_x,
					ly: this.init_offset_y + (this.letter_radius*2) + 1 + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius/2) - (this.fontWeight*2.5) + this.char_offset_x,
					_ly: this.init_offset_y + (this.letter_radius*2) + 1 + this.char_offset_y,
					lineEndPosX: this.init_offset + (this.letter_radius*2.4) - (this.fontWeight*2) + this.char_offset_x,
					lineIncrementX: 2,
					yIncrement: false,
					yDecrement: false,
					xIncrement: true,
					xDecrement: false
				},
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius) + (this.fontWeight*1.4) + this.char_offset_x,
					ly: this.init_offset_y + (this.letter_radius/2) + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius) + (this.fontWeight*1.4) + this.char_offset_x,
					_ly: this.init_offset_y + (this.letter_radius/2) + this.char_offset_y,
					lineEndPosY: this.init_offset_y + this.row_height + this.char_offset_y,
					lineIncrementY: 2,
					yIncrement: false,
					yDecrement: true,
					xIncrement: false,
					xDecrement: false
				}
				
			];
			
		case '5':
			return [
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius) + (this.fontWeight*2) + this.char_offset_x,
					ly: this.init_offset_y + (this.letter_radius/2) + (this.fontWeight/2) + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius) + (this.fontWeight*2) + this.char_offset_x,
					_ly: this.init_offset_y + (this.letter_radius/2) + (this.fontWeight/2) + this.char_offset_y,
					lineEndPosX: this.init_offset + (this.letter_radius/2) - (this.fontWeight*2) + this.char_offset_x,
					lineIncrementX: 2,
					yIncrement: false,
					yDecrement: false,
					xIncrement: false,
					xDecrement: true
				},
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius/2) - (this.fontWeight*2) + this.char_offset_x,
					ly: this.init_offset_y + (this.letter_radius/2) + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius/2) - (this.fontWeight*2) + this.char_offset_x,
					_ly: this.init_offset_y + (this.letter_radius/2) + this.char_offset_y,
					lineEndPosY: this.init_offset_y + (this.row_height/2) + (this.fontWeight/2) - 1 + this.char_offset_y,
					lineIncrementY: 2,
					yIncrement: false,
					yDecrement: true,
					xIncrement: false,
					xDecrement: false
				},
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius/2) - (this.fontWeight*2) + this.char_offset_x,
					ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius/2) - (this.fontWeight*2) + this.char_offset_x,
					_ly: this.init_offset_y + (this.row_height/2) + this.char_offset_y,
					lineEndPosX: this.init_offset + (this.letter_radius) - (this.fontWeight/2) + this.char_offset_x,
					lineIncrementX: 1,
					yIncrement: false,
					yDecrement: false,
					xIncrement: true,
					xDecrement: false
				},
				{
					type: 'ellipse',
					angle: -0.9,
					angleS: -0.9,
					angleLimit: 3.3,
					angleIncrement: 0.05,
					greaterCheck : false,
					cx: this.init_offset + (this.letter_radius - (this.letter_radius/12)) - (this.fontWeight) + this.char_offset_x,
					cy: this.init_offset_y + (this.row_height/1.367) + this.char_offset_y,
					radiusX: this.letter_radius + 1 - this.fontWeight,
					radiusY: this.letter_radius + 1 - this.fontWeight,
					counterClockWise: false,
					fill: false,
					rotation: -0.5
				}
				
			];
			
		case '6':
			return [
				{
					type: 'ellipse',
					angle: -1,
					angleS: -1,
					angleLimit: -4.6,
					angleIncrement: 0.05,
					greaterCheck : true,
					cx: this.init_offset + (this.letter_radius) - (this.fontWeight) + this.char_offset_x,
					cy: this.init_offset_y + (this.row_height/2) + (this.row_height/16) + this.char_offset_y,
					radiusX: this.letter_radius + (this.letter_radius/6) - this.fontWeight,
					radiusY: (this.row_height/2) - (this.row_height/40) - this.fontWeight,
					counterClockWise: true,
					fill: false,
					rotation: 0
				},
				{
					type: 'ellipse',
					angle: 0.8,
					angleS: 0.8,
					angleLimit: -4,
					angleIncrement: 0.05,
					greaterCheck : true,
					cx: this.init_offset + (this.letter_radius) - (this.fontWeight) -1 + this.char_offset_x,
					cy: this.init_offset_y + (this.row_height/2) + (this.row_height/4) - 1 + this.char_offset_y,
					radiusX: this.letter_radius - 1 - this.fontWeight,
					radiusY: this.letter_radius - this.fontWeight,
					counterClockWise: true,
					fill: false,
					rotation: 0.8
				}
			];
			
		case '7':
			return [
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius/2) - (this.fontWeight) + this.char_offset_x,
					ly: this.init_offset_y + (this.row_height/4) - (this.row_height/16) + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius/2) - (this.fontWeight) + this.char_offset_x,
					_ly: this.init_offset_y + (this.row_height/4) - (this.row_height/16) + this.char_offset_y,
					lineEndPosX: this.init_offset + (this.letter_radius*2) - (this.fontWeight) + this.char_offset_x,
					lineIncrementX: 2,
					yIncrement: false,
					yDecrement: false,
					xIncrement: true,
					xDecrement: false
				},
				{
					type: 'line',
					lx: this.init_offset + (this.letter_radius*2) - (this.fontWeight) + 1 + this.char_offset_x,
					ly: this.init_offset_y + (this.letter_radius/2) + 1 + this.char_offset_y,
					_lx: this.init_offset + (this.letter_radius*2) - (this.fontWeight) + 1 + this.char_offset_x,
					_ly: this.init_offset_y + (this.letter_radius/2) + 1 + this.char_offset_y,
					lineEndPosX: this.init_offset + (this.letter_radius/2) - (this.fontWeight) + this.char_offset_x,
					lineEndPosY: this.init_offset_y + this.row_height + this.char_offset_y,
					lineIncrementY: 2,
					lineIncrementX: 0.75,
					yIncrement: false,
					yDecrement: true,
					xIncrement: false,
					xDecrement: true
				}
				
			];
			
		case '8':
			return [
				{
					type: 'circle',
					angle: -0.5,
					angleS: -0.5,
					angleLimit: -1.5,
					angleIncrement: 0.02,
					greaterCheck : true,
					cx: this.init_offset + ((this.letter_radius - (this.letter_radius/6))*2) - (this.fontWeight*2) + this.char_offset_x,
					cy: this.init_offset_y + this.letter_radius + (this.letter_radius/6) + this.char_offset_y,
					radius: (this.letter_radius - (this.letter_radius/6)) - this.fontWeight,
					counterClockWise: true,
					fill: false
				},
				{
					type: 'circle',
					angle: 1.5,
					angleS: 1.5,
					angleLimit: 3.4,
					angleIncrement: 0.02,
					greaterCheck : false,
					cx: this.init_offset + ((this.letter_radius - (this.letter_radius/6))*2) - (this.fontWeight*2) + this.char_offset_x,
					cy: this.init_offset_y + (this.row_height/2) + (this.row_height/4) + this.char_offset_y,
					radius: this.letter_radius - this.fontWeight,
					counterClockWise: false,
					fill: false
				},
				{
					type: 'circle',
					angle: 0.5,
					angleS: 0.5,
					angleLimit: -0.7,
					angleIncrement: 0.02,
					greaterCheck : true,
					cx: this.init_offset + ((this.letter_radius - (this.letter_radius/6))*2) - (this.fontWeight*2) + this.char_offset_x,
					cy: this.init_offset_y + this.letter_radius + (this.letter_radius/6) + this.char_offset_y,
					radius: (this.letter_radius - (this.letter_radius/6)) - this.fontWeight,
					counterClockWise: true,
					fill: false
				},
				
			];
			
		case '9':
			return [
				{
					type: 'circle',
					angle: 0,
					angleS: 0,
					angleLimit: -2,
					angleIncrement: 0.02,
					greaterCheck : true,
					cx: this.init_offset + (this.letter_radius - 1) + this.char_offset_x,
					cy: this.init_offset_y + this.letter_radius + (this.letter_radius/4) + this.char_offset_y,
					radius: (this.letter_radius - 1) - this.fontWeight,
					counterClockWise: true,
					fill: false
				},
				{
					type: 'line',
					lx: this.init_offset + ((this.letter_radius - 1)*2) - (this.fontWeight) + this.char_offset_x,
					ly: this.init_offset_y + (this.letter_radius/2) + 1 + this.char_offset_y,
					_lx: this.init_offset + ((this.letter_radius - 1)*2) - (this.fontWeight) + this.char_offset_x,
					_ly: this.init_offset_y + (this.letter_radius/2) + 1 + this.char_offset_y,
					lineEndPosY: this.init_offset_y + this.row_height + this.char_offset_y,
					lineIncrementY: 2,
					yIncrement: false,
					yDecrement: true,
					xIncrement: false,
					xDecrement: false
				}
				
			];
	}
}

var maxX = 0;
var minX = 0;
var count_track = 0;

StringTracer.prototype._draw_stroke = function () {
	if (this.stroke_num >= this.strokes.length) {
		clearInterval(this.interval);
		if(this.options.string.charAt(this.char_num) == 't' || this.options.string.charAt(this.char_num) == 'v')
			this.char_offset_x += this.fontWeight*2;
		else if(this.options.string.charAt(this.char_num) == '0')
			this.char_offset_x += this.fontWeight*4;
		else if(this.options.string.charAt(this.char_num) == '1' || this.options.string.charAt(this.char_num) == '4')
			this.char_offset_x += this.fontWeight;
		this.char_num++;
		var char_length = maxX - minX;

		this.char_offset_x += char_length + letter_spacing; 
		/* if(this.char_offset_x >= this.options.canvas.width - this.letter_radius - 90){
			this.char_offset_x = 0;
			this.char_offset_y = this.char_offset_y + 140;
		} */
		maxX = 0;
		minX = 0;
		count_track = 0;
		this._draw_letter();
		return;
	}
	this.animate = true;
	this._restore_state();
	this.stroke = this.strokes[this.stroke_num];
	if(this.stroke.type == 'circle' && this.stroke.fill == false){
		var cmp_val_max, cmp_val_min;
		cmp_val_max = this.stroke.counterClockWise == true ? this.stroke.cx + this.stroke.radius + this.fontWeight : this.stroke.cx + this.stroke.radius + this.fontWeight;
		maxX = maxX < cmp_val_max ? cmp_val_max : maxX;
		cmp_val_min = this.stroke.counterClockWise == true ? this.stroke.cx - this.stroke.radius - this.fontWeight : this.stroke.cx - this.stroke.radius - this.fontWeight;
		minX = count_track == 0 ? cmp_val_min : cmp_val_min < minX ? cmp_val_min : minX;
	}else if(this.stroke.type == 'line'){
		maxX = maxX < this.stroke._lx ? this.stroke._lx + this.fontWeight : maxX; 
		minX = count_track == 0 ? this.stroke._lx - this.fontWeight : this.stroke._lx < minX ? this.stroke._lx - this.fontWeight : minX;
	}else if(this.stroke.type == 'ellipse'){
		var cmp_val_max, cmp_val_min;
		cmp_val_max = this.stroke.counterClockWise == true ? this.stroke.cx + this.fontWeight: this.stroke.cx + this.fontWeight;
		maxX = maxX < cmp_val_max ? cmp_val_max : maxX;
		cmp_val_min = this.stroke.counterClockWise == true ? this.stroke.cx - this.stroke.radiusX - this.fontWeight : this.stroke.cx - this.stroke.radiusX - this.fontWeight;
		minX = count_track == 0 ? cmp_val_min : cmp_val_min < minX ? cmp_val_min : minX;
	}
	count_track++;
	switch (this.stroke.type) {
	
		case 'ellipse':
			if(this.options.animationSpeed === 0){
				this.stroke.angle = this.stroke.angleLimit
				//return;
			}
			if(this.stroke.greaterCheck == true){
				if (this.stroke.angle > this.stroke.angleLimit) {
					this.stroke.angle -= this.stroke.angleIncrement;
				}
				this._draw_ellipse(this.stroke.cx, this.stroke.cy, this.stroke.radiusX, this.stroke.radiusY, this.stroke.rotation, this.stroke.angleS, this.stroke.angle, this.stroke.counterClockWise,this.stroke.fill);
				if (this.stroke.angle <= this.stroke.angleLimit) {
					break;
				}
				return;
			}else{
				//console.log(this.stroke.angleS*Math.PI+'-'+this.stroke.angle);
				if (this.stroke.angle < this.stroke.angleLimit) {
					this.stroke.angle += this.stroke.angleIncrement;
				}
				this._draw_ellipse(this.stroke.cx, this.stroke.cy, this.stroke.radiusX, this.stroke.radiusY,  this.stroke.rotation, this.stroke.angleS, this.stroke.angle, this.stroke.counterClockWise,this.stroke.fill);
				if (this.stroke.angle >= this.stroke.angleLimit) {
					break;
				}
				return;
			}
		case 'circle':
			if(this.options.animationSpeed === 0){
				this.stroke.angle = this.stroke.angleLimit
				//return;
			}
			if(this.stroke.greaterCheck == true){
				if (this.stroke.angle > this.stroke.angleLimit) {
					this.stroke.angle -= this.stroke.angleIncrement;
				}
				this._draw_circle(this.stroke.cx, this.stroke.cy, this.stroke.radius, this.stroke.angleS*Math.PI, this.stroke.angle, this.stroke.counterClockWise,this.stroke.fill);
				if (this.stroke.angle <= this.stroke.angleLimit) {
					break;
				}
				return;
			}else{
				if (this.stroke.angle < this.stroke.angleLimit) {
					this.stroke.angle += this.stroke.angleIncrement;
				}
				this._draw_circle(this.stroke.cx, this.stroke.cy, this.stroke.radius, this.stroke.angleS*Math.PI, this.stroke.angle, this.stroke.counterClockWise,this.stroke.fill);
				if (this.stroke.angle >= this.stroke.angleLimit) {
					break;
				}
				return;
			}
			
		case 'dot':
			if(this.options.animationSpeed === 0){
				this._draw_circle(this.stroke.cx, this.stroke.cy, this.stroke.radius, this.stroke.angleS*Math.PI, this.stroke.angle, this.stroke.counterClockWise,this.stroke.fill);
				break;
			}
			if (this.stroke.delayCount >= 12) {
				this._draw_circle(this.stroke.cx, this.stroke.cy, this.stroke.radius, this.stroke.angleS*Math.PI, this.stroke.angle, this.stroke.counterClockWise,this.stroke.fill);
				break;
			}
			this.stroke.delayCount++;
			return;
			
		case 'line':
			if(this.options.animationSpeed === 0){
				if(this.stroke.lineEndPosY)
					this.stroke._ly = this.stroke.lineEndPosY;
				if(this.stroke.lineEndPosX)
					this.stroke._lx = this.stroke.lineEndPosX;
				//return;
			}
			if(this.stroke.yDecrement == true && this.stroke.xDecrement == false && this.stroke.yIncrement == false && this.stroke.xIncrement == false){
				if (this.stroke._ly < this.stroke.lineEndPosY) {
					this.stroke._ly += this.stroke.lineIncrementY;
				}
				this._draw_line(this.stroke.lx, this.stroke.ly, this.stroke._lx, this.stroke._ly);
				if (this.stroke._ly >= this.stroke.lineEndPosY) {
					break;
				}
				return;
			}else if(this.stroke.xDecrement == false && this.stroke.yDecrement == false && this.stroke.yIncrement == false && this.stroke.xIncrement == true){
				if (this.stroke._lx < this.stroke.lineEndPosX) {
					this.stroke._lx += this.stroke.lineIncrementX;
				}
				this._draw_line(this.stroke.lx, this.stroke.ly, this.stroke._lx, this.stroke._ly);
				if (this.stroke._lx >= this.stroke.lineEndPosX) {
					break;
				}
				return;
			}else if(this.stroke.xDecrement == true && this.stroke.yDecrement == true && this.stroke.yIncrement == false && this.stroke.xIncrement == false){
				if (this.stroke._lx > this.stroke.lineEndPosX) {
					this.stroke._lx -= this.stroke.lineIncrementX;
				}
				if (this.stroke._ly < this.stroke.lineEndPosY) {
					this.stroke._ly += this.stroke.lineIncrementY;
				}
				this._draw_line(this.stroke.lx, this.stroke.ly, this.stroke._lx, this.stroke._ly);
				if (this.stroke._lx <= this.stroke.lineEndPosX) {
					break;
				}
				if (this.stroke._ly >= this.stroke.lineEndPosY) {
					break;
				}
				return;
			}else if(this.stroke.xDecrement == false && this.stroke.yDecrement == true && this.stroke.yIncrement == false && this.stroke.xIncrement == true){
				if (this.stroke._lx < this.stroke.lineEndPosX) {
					this.stroke._lx += this.stroke.lineIncrementX;
				}
				if (this.stroke._ly < this.stroke.lineEndPosY) {
					this.stroke._ly += this.stroke.lineIncrementY;
				}
				this._draw_line(this.stroke.lx, this.stroke.ly, this.stroke._lx, this.stroke._ly);
				if (this.stroke._lx >= this.stroke.lineEndPosX) {
					break;
				}
				if (this.stroke._ly >= this.stroke.lineEndPosY) {
					break;
				}
				return;
			}
			else if(this.stroke.xDecrement == false && this.stroke.yDecrement == false && this.stroke.yIncrement == true && this.stroke.xIncrement == true){
				if (this.stroke._lx < this.stroke.lineEndPosX) {
					this.stroke._lx += this.stroke.lineIncrementX;
				}
				if (this.stroke._ly > this.stroke.lineEndPosY) {
					this.stroke._ly -= this.stroke.lineIncrementY;
				}
				this._draw_line(this.stroke.lx, this.stroke.ly, this.stroke._lx, this.stroke._ly);
				if (this.stroke._lx >= this.stroke.lineEndPosX) {
					break;
				}
				if (this.stroke._ly <= this.stroke.lineEndPosY) {
					break;
				}
				return;
			}else if(this.stroke.yDecrement == false && this.stroke.xDecrement == true && this.stroke.yIncrement == false && this.stroke.xIncrement == false){
				if (this.stroke._lx > this.stroke.lineEndPosX) {
					this.stroke._lx -= this.stroke.lineIncrementX;
				}
				this._draw_line(this.stroke.lx, this.stroke.ly, this.stroke._lx, this.stroke._ly);
				if (this.stroke._lx <= this.stroke.lineEndPosX) {
					break;
				}
				return;
			}
	}
	this._save_state();
	this.stroke_num++;
	this._draw_stroke();
};

StringTracer.prototype._draw_circle = function (x, y, r, s, angle, counterClockWise,fill) {
	this.ctx.beginPath();
	this.ctx.lineWidth = this.fontWeight;
	this.ctx.strokeStyle = this.color;
	this.ctx.fillStyle = this.color;
	this.options.lineDash ? ctx.setLineDash(this.options.lineDash) : ctx.setLineDash([]);
	this.options.lineCap == 'round' ? ctx.lineCap = "round" : ctx.lineCap = "butt";
	this.ctx.arc(x, y, r, s, angle * Math.PI, counterClockWise);
	fill == true ? ctx.fill() : false;
	this.ctx.stroke();
};

StringTracer.prototype._draw_ellipse = function (x, y, rx, ry, rt, s, angle, counterClockWise,fill) {
	this.ctx.beginPath();
	this.ctx.lineWidth = this.fontWeight;
	this.ctx.strokeStyle = this.color;
	this.options.lineDash ? ctx.setLineDash(this.options.lineDash) : ctx.setLineDash([]);
	this.options.lineCap == 'round' ? ctx.lineCap = "round" : ctx.lineCap = "butt";
	this.ctx.ellipse(x, y, rx, ry, rt, s, angle, counterClockWise, fill);
	fill == true ? ctx.fill() : false;
	this.ctx.stroke();
};

StringTracer.prototype._draw_line = function (x1, y1, x2, y2) {
	this.ctx.beginPath();
	if(this.stroke.fontWeight)
		this.ctx.lineWidth = this.stroke.fontWeight;
	else
		this.ctx.lineWidth = this.fontWeight;
	this.ctx.strokeStyle = this.color;
	this.options.lineDash ? ctx.setLineDash(this.options.lineDash) : ctx.setLineDash([]);
	this.options.lineCap == 'round' ? ctx.lineCap = "round" : ctx.lineCap = "butt";
	this.ctx.moveTo(x1, y1);
	this.ctx.lineTo(x2, y2);
	this.ctx.stroke();
};

StringTracer.prototype._restore_state = function() {
	this.ctx.clearRect(0, 0, this.options.canvas.width, this.options.canvas.height); 
	this.ctx.drawImage(this._ctx.canvas, 0, 0);		
}

StringTracer.prototype._save_state = function() {
	this._ctx.clearRect(0, 0, this.options.canvas.width, this.options.canvas.height); 
	this._ctx.drawImage(this.ctx.canvas, 0, 0);		
}
