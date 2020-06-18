var pathFn = require('path');
var fs = require('fs');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module.exports = function(args) {
    var log = this.log;
    var config = this.config;

    var urlsPath = config.hexo_submit_urls_to_searchEngine.path;
    var host = config.hexo_submit_urls_to_searchEngine.baidu_host;
    var token = config.hexo_submit_urls_to_searchEngine.baidu_token;

    var publicDir = this.public_dir;
    var baiduUrlsFile = pathFn.join(publicDir, 'submit_urls.txt');
    var urls = fs.readFileSync(baiduUrlsFile, 'utf8');

    log.info("Submitting urls \n" + urls)

    var target = "http://data.zz.baidu.com/urls?site=" + host + "&token=" + token;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', target, false);
    xhr.setRequestHeader('Content-type', 'text/plain');
    xhr.onload = function () {
        console.log(this.responseText);
    };
    xhr.send(urls);
};
