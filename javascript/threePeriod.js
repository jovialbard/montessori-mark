//@todo make the three period lesson an object
//@todo allow the three period lesson to take any class
function threePeriodLesson() {
	var elements = [];
	introduce(elements,3);
}

function introduce(elements, total, count) {
	if(!count) {
		count = 0;
	}
	console.log(elements);
	console.log(count + "/" + total);
	function onComplete() {
		cleanup();
		count++;
		if(count >= total) {
			firstPeriod(elements);
		} else {
			introduce(elements, total, count);
		}		
	}
	var el = $('<canvas width=400 height=400>');
	$('#canvas-wrapper').append(el);
	elements[count] = new Letter(el.get(0),{exclude: elements});
	elements[count].introduce({onComplete: onComplete});
}

function firstPeriod(elements) {
	//@todo show the three letters side by side
	//@todo highlight and unhighlight the letters as we play them
	//@todo move sound playing responsibility into the element object for encapsulation
	console.log(elements);
	playSound(elements[0].letter+'.wav');
	setTimeout(function(){						
		playSound(elements[1].letter+'.wav');
	},2000);
	setTimeout(function(){						
		playSound(elements[2].letter+'.wav');
	},4000);
	setTimeout(function(){						
		secondPeriod(elements);
	},6000);
}

function secondPeriod(elements) {
	/*
	 * @todo say the sound and ask the child to touch that letter in the following order:
	 * last, first, second, random, random from other two, remaining
	 */
	thirdPeriod(elements);
}

function thirdPeriod(elements) {
	// @todo ask what sound each letter makes randomly until they get them all right or we realize they're not ready
	cleanup();
}

function cleanup() {
	$('#canvas-wrapper').html('');
}

