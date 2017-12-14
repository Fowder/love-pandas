function main (){
	var panda = $('.panda');

	panda.click(function(){
		var type = $(this).data('type');
		var tendance = $(this).data('tendance');
		alert(type+' '+tendance);
	})
}

$(document).ready(function(){
	
main();

});