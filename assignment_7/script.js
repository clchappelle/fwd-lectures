
var counter = 0;

$('button').on("click", function (){ 
	var $this = $(this);
	var classText;
	counter++;
	$this.text(counter);
	if(counter % 4 === 0) {
		classText = 'zero';
	} else if (counter % 4 === 1) {
		classText = 'one';
	} else if (counter % 4 === 2) {
		classText = 'two';
	} else {
		classText = 'three';
	}
	$this.prop('class', classText);
});