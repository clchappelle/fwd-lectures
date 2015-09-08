$('.add').on('click', function () {
	var newToDo = $('.to-do-list li').first().clone();
	newToDo.text($('.new-field').val());
	$('.to-do-list').append(newToDo);
});
