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
        var enableIndexNow = config.hexo_submit_urls_to_search_engine.bing_enable_indexnow;
        if (token == 0) {
            token = process.env.BING_TOKEN;
        }
        var publicDir = this.public_dir;
        var UrlsFile = pathFn.join(publicDir, urlsPath);
        cjhreadline.readFileToArr(UrlsFile, (data) => {
            if (enableIndexNow) {
                log.info("Submitting bing urls by Bing IndexNow API \n");
                var urlList = [];
                for (let i = 0; i < data.length; ++i) {
                    log.info("Bing Submitting: " + data[i]);
                    urlList.push(data[i]);
                }
                // 只获取域名,例如 https://www.baidu.com/xxx/xxx 获取 www.baidu.com
                var targetHost = urlList[0].match(/(http:\/\/|https:\/\/)?([^\/]+)/i)[2];
                var options = {
                    uri: 'https://bing.com/IndexNow',
                    method: 'POST',
                    json: {
                        "host": targetHost,
                        "key": token,
                        "keyLocation": `${host}/${token}.txt`,
                        "urlList": urlList,
                    }
                };
                request(options, function (error, response, body) {
                    console.log("Bing response: ", {
                        statusCode: response.statusCode,
                    });
                });
            } else {
                log.info("Submitting bing urls(batch) \n");
                if (data.length === 0) {
                    log.info("No urls to submit!");
                    return;
                }
                log.info("Bing Submitting: " + data.join(", "));
                var options = {
                    uri: 'https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey=' + token,
                    method: 'POST',
                    json: {
                        "siteUrl": host,
                        "urlList": data
                    }
                };
                request(options, function (error, response, body) {
                    if (error) {
                        log.error("Bing batch submit error: ", error);
                    } else {
                        log.info("Bing batch submit status: ", response && response.statusCode);
                    }
                });
            }
        });
    } else {
        console.log("Bing submit: off ");
    }
};