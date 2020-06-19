module.exports = function (locals) {
    var log = this.log;
    var config = this.config;
    var count = config.hexo_submit_urls_to_search_engine.count;
    var period = config.hexo_submit_urls_to_search_engine.period;
    var urlsPath = config.hexo_submit_urls_to_search_engine.txt_path;

    log.info("Generating Baidu urls for last " + period + " posts");

    // get last posts
    var urls = [].concat(locals.posts.toArray())
                     .map(function(post) {
                       return {
                         "date": post.updated || post.date,
                         "permalink": post.permalink
                       }
                     })
                     .sort(function(a, b) {
                       return b.date - a.date;
                     })
                     .slice(0, count)
                     .map(function(post) {
                       return post.permalink
                     })
                     .join('\n');

    log.info("Posts urls generated in " + urlsPath + "\n" + urls);

    return {
     path: urlsPath,
     data: urls
    };
};