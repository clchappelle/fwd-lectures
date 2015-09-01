var tweetboxField = $('.tweetbox__field');

$('.tweetbox').on('submit', function (event) {
	event.preventDefault();

	var newTweet = $('.tweet').first().clone();

	var textAreaValue = $('.tweetbox__field').val();

	newTweet.find('.tweet__content').text(textAreaValue);
	newTweet.find('.tweet__time').text('now');

	$('.tweets').prepend(newTweet);
	$(tweetboxField).val('');
});