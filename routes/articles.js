var articleRequest = require('../lib/articleRequest');

module.exports = function(app){
	
	var articleRequester = articleRequest(app.get('appCredentials'));
	
	app.get('/', listArticles);
	
	function listArticles(req, res){
		articleRequester.list(function(err, articles){
			if(err){
				res.send("Error: " + err);
			}else{
				res.render('list', {
					title: app.get('name'),
					articles: articles
				})
			}
		});
	}
	
};