$(document).ready(function(){
	var el = document.getElementById('c');
	var isDrawing;
	var tpl = new ThreePeriodLesson('#canvas-wrapper',Letter,3);
	tpl.start();
});