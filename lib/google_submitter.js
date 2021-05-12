var request = require("request");
var {google} = require("googleapis");
var cjhreadline = require('./cjhreadline');
var pathFn = require('path');
var fs = require('fs');

/////////////////////////////////////////////////////////////////////////
module.exports = function (args) {

    var log = this.log;
    var config = this.config;
    var googleswitch = config.hexo_submit_urls_to_search_engine.google;
    if (googleswitch == 1) {
        var cjh_google_proxy = config.hexo_submit_urls_to_search_engine.google_proxy;
        if (cjh_google_proxy != 0) {
            google.options({proxy: cjh_google_proxy});
            process.env.HTTPS_PROXY = cjh_google_proxy;
            process.env.HTTP_PROXY = cjh_google_proxy;
        }
        var urlsPath = config.hexo_submit_urls_to_search_engine.txt_path;
        var host = config.hexo_submit_urls_to_search_engine.google_host;
        var google_key_file = config.hexo_submit_urls_to_search_engine.google_key_file;
        var rootDir = this.base_dir;
        var google_key = pathFn.join(rootDir, google_key_file);

        var key = require(google_key);

        var publicDir = this.public_dir;
        var UrlsFile = pathFn.join(publicDir, urlsPath);
        cjhreadline.readFileToArr(UrlsFile, function (data) {
            log.info("Submitting google urls \n")
            for (let i = 0; i < data.length; ++i) {
                log.info("Google Submitting: " + data[i]);
                const jwtClient = new google.auth.JWT(
                    key.client_email,
                    null,
                    key.private_key,
                    ["https://www.googleapis.com/auth/indexing"],
                    null
                );

                jwtClient.authorize(function (err, tokens) {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    let options = {
                        url: "https://indexing.googleapis.com/v3/urlNotifications:publish",
                        method: "POST",
                        // Your options, which must include the Content-Type and auth headers
                        headers: {
                            "Content-Type": "application/json"
                        },
                        auth: {"bearer": tokens.access_token},
                        // Define contents here. The structure of the content is described in the next step.
                        json: {
                            "url": data[i],
                            "type": "URL_UPDATED"
                        }
                    };
                    request(options, function (error, response, body) {
                        // Handle the response
                        console.log("Google response: ", body);
                    });
                });
            }
        })
    } else {
        console.log("google submit: off ");
    }
};