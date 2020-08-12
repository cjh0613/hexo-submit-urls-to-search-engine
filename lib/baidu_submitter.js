var pathFn = require('path');
var fs = require('fs');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module.exports = function (args) {
    var log = this.log;
    var config = this.config;
    var baidu = config.hexo_submit_urls_to_search_engine.baidu;
    if (baidu == 1) {
        var urlsPath = config.hexo_submit_urls_to_search_engine.txt_path;
        var host = config.hexo_submit_urls_to_search_engine.baidu_host;
        var token = config.hexo_submit_urls_to_search_engine.baidu_token;
        if (token == 0) {
            token = process.env.BAIDU_TOKEN;
        }

        var publicDir = this.public_dir;
        var UrlsFile = pathFn.join(publicDir, urlsPath);
        var urls = fs.readFileSync(UrlsFile, 'utf8');

        log.info("Submitting baidu urls \n" + urls)

        var target = "http://data.zz.baidu.com/urls?site=" + host + "&token=" + token;

        var xhr = new XMLHttpRequest();
        xhr.open('POST', target, false);
        xhr.setRequestHeader('Content-type', 'text/plain');
        xhr.onload = function () {
            console.log("Baidu response: ", this.responseText);
        };
        xhr.send(urls);
    } else {
        console.log("Baidu submit: off ");
    }
};
