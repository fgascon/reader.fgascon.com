var request = require('request');

module.exports = function(credentials){
	
	var baseUrl = 'http://localhost:8080/' + credentials.id + '-' + credentials.secret;
	
	function simpleRequest(urlPath, cb){
		return request({
			url: baseUrl + urlPath,
			json: true
		}, cb);
	}
	
	function list(cb){
		simpleRequest('/list', function(err, resp, body){
			if(err){
				cb(err);
			}else{
				cb(null, body);
			}
		});
		return null;
	}
	
	return {
		list: list
	};
};