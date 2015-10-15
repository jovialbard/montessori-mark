	function threePeriodLesson() {
		var el = document.getElementById('c');
		var letters = [];
		letters[0] = new Letter(el,{exclude: letters});
		letters[0].introduce({onComplete: function(){
			clearScreen();
			letters[1] = new Letter(el,{exclude: letters});
			letters[1].introduce({onComplete: function(){
				clearScreen();
				letters[2] = new Letter(el,{exclude: letters});
				letters[2].introduce({onComplete: function(){
					firstPeriod(letters,function(){
						secondPeriod(letters,function(){
							thirdPeriod(letters,function(){
								playSound('6-thank-you.wav');
								clearScreen();
							});
						});
					});
				}});
			}});
		}});
	}
	
	function firstPeriod(letters,onComplete) {
		//@todo show the three letters side by side
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

	function clearScreen() {
		$('#c').html('');
	}
	
