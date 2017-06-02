$(document).ready(function(){
	$("#searchButton").on("click", function(){
		var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		url += '?' + $.param({
			'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
			'q': "pearl harbour",
			'begin_date': "20150402",
			'end_date': "20170522",
			'hl': "true",
			'page': 0
		});
		$.ajax({
			url: url,
			method: 'GET',
		}).done(function(result) {
			console.log(result);
		}).fail(function(err) {
			throw err;
		});
	});
});