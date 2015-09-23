var tweetboxField = $('.tweetbox__field');
var tweets = $('.tweets');

$('.tweetbox').on('submit', function (event) {
	event.preventDefault();

	var newTweet = $('.tweet').first().clone();

	var textAreaValue = tweetboxField.val();

	newTweet.find('.tweet__content').text(textAreaValue);
	newTweet.find('.tweet__time').text('now');

	tweets.prepend(newTweet);

	tweetboxField.val('');

});

var calculateRemainingCharacters = function() {
	var textAreaValue = tweetboxField.val();
	var textAreaLength = textAreaValue.length;

	//$('.tweetbox__button').prop('disabled', textAreaLength > maxCharacters);

	//$('.tweetbox__counter').text(maxCharacters - textAreaLength);

};
calculateRemainingCharacters();

$('.tweetbox__field').on('keyup', calculateRemainingCharacters);

$('.retweet').on('click', function() { 
	$(this).closest('.tweet').toggleClass('retweeted');
});

$('.favorite').on('click', function() { 
	$(this).closest('.tweet').toggleClass('favorited');
});

