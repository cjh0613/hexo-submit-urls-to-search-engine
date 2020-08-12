var pathFn = require('path');
var fs = require('fs');
var cjhreadline = require('./cjhreadline');
var request = require('request');

module.exports = function (args) {
    var log = this.log;
    var config = this.config;
    var bing = config.hexo_submit_urls_to_search_engine.bing;
    if (bing == 1) {
        var urlsPath = config.hexo_submit_urls_to_search_engine.txt_path;
        var host = config.hexo_submit_urls_to_search_engine.bing_host;
        var token = config.hexo_submit_urls_to_search_engine.bing_token;
        if (token == 0) {
            token = process.env.BING_TOKEN;
        }
        var publicDir = this.public_dir;
        var UrlsFile = pathFn.join(publicDir, urlsPath);
        cjhreadline.readFileToArr(UrlsFile, function (data) {
            log.info("Submitting bing urls \n")
            for (let i = 0; i < data.length; ++i) {
                log.info("Bing Submitting: " + data[i]);


                var options = {
                    uri: 'https://ssl.bing.com/webmaster/api.svc/json/SubmitUrl?apikey=' + token,
                    method: 'POST',
                    json: {
                        "siteUrl": host,
                        "url": data[i]
                    }
                };

                request(options, function (error, response, body) {
                    console.log("Bing response: ", body)
                });
            }
        });
    } else {
        console.log("Bing submit: off ");
    }
};


