$(document).on('turbolinks:load', function(){
	$('.review-rating').raty({
		readOnly: true,
		score: function() {
			return $(this).attr('data-score');
		},
		path: '/assets/'
	});
});

$(document).on('turbolinks:load', function(){
	$('#rating-form').raty({
		path: '/assets/',
		scoreName: 'review[rating]'
	});
});
