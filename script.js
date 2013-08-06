$(document).ready(function(){
	$('#tri, #random').click(function(){
		var randomColor = function(){
			return '#' + Math.random().toString(16).slice(2,8);
		}
		var rc1 = randomColor();
		var rc2 = randomColor();
		var rc3 = randomColor();
		var rc4 = randomColor();
		var rc5 = randomColor();
		$('#tri').css("border-bottom", "100px solid " + rc1);
		$('#square').css("background", rc2);
		$('#pentagon').css("border-top-color", rc3);
		$('#top-pent').css("border-bottom-color", rc3);
		$('#circle').css('background', rc4);
		$('.container').css('background', rc5);
	})
})