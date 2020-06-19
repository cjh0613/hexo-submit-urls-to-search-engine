var pathFn = require('path');
var fs = require('fs');
var request = require('request');

module.exports = function(args) {
    var log = this.log;
    var config = this.config;

    var urlsPath = config.hexo_submit_urls_to_search_engine.txt_path;
    var host = config.hexo_submit_urls_to_search_engine.bing_host;
    var token = config.hexo_submit_urls_to_search_engine.bing_token;

    var publicDir = this.public_dir;
    var UrlsFile = pathFn.join(publicDir, urlsPath);
    var urls = fs.readFileSync(UrlsFile, 'utf8');

    log.info("Submitting bing urls \n" + urls)

    var options = {
        uri: 'https://ssl.bing.com/webmaster/api.svc/json/SubmitUrl?apikey='+token,
        method: 'POST',
        json: {
            "siteUrl": host,
            "url": urls
        }
    };

    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body.id) // Print the shortened url.
            console.log(body)
            console.log(response)
        }
    });
};
