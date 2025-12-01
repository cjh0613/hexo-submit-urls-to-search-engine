module.exports = function (locals) {
    var log = this.log;
    var config = this.config;
    var submit_condition = config.hexo_submit_urls_to_search_engine.submit_condition
    var count = config.hexo_submit_urls_to_search_engine.count;
    var period = config.hexo_submit_urls_to_search_engine.period;
    var urlsPath = config.hexo_submit_urls_to_search_engine.txt_path;
    var cjh_replace = config.hexo_submit_urls_to_search_engine.replace;
    if (submit_condition == 'count') {
        log.info("Generating urls for last " + count + " posts");

        // get last posts
        var urls = [].concat(locals.posts.toArray())
            .map(function (post) {
                return {
                    "date": post.updated || post.date,
                    "permalink": post.permalink
                }
            })
            .sort(function (a, b) {
                return b.date - a.date;
            })
            .slice(0, count)
            .map(function (post) {
                var cjhLink = post.permalink
                if (cjh_replace == 1) {
                    var find_what = config.hexo_submit_urls_to_search_engine.find_what;
                    var replace_with = config.hexo_submit_urls_to_search_engine.replace_with;
                    cjhLink = cjhLink.replace(find_what, replace_with);
                }
                return cjhLink;
            })
            .join('\n');
        log.info("Posts urls generated in " + urlsPath + "\n" + urls);
        return {
            path: urlsPath,
            data: urls
        };
    } else if (submit_condition == 'period') {
        // time
        var now = new Date();
        log.info("Generating urls for posts updated in last " + period + " seconds");
        var urls = [].concat(locals.posts.toArray())
            .map(function (post) {
                return {
                    "date": post.updated || post.date,
                    "permalink": post.permalink
                }
            })
            .filter(function (post) {
                return (now - post.date) / 1000 <= period;
            })
            .sort(function (a, b) {
                return b.date - a.date;
            })
            .map(function (post) {
                var cjhLink = post.permalink
                if (cjh_replace == 1) {
                    var find_what = config.hexo_submit_urls_to_search_engine.find_what;
                    var replace_with = config.hexo_submit_urls_to_search_engine.replace_with;
                    cjhLink = cjhLink.replace(find_what, replace_with);
                }
                return cjhLink;
            })
            .join('\n');
        if (!urls) {
            log.info("No posts updated in last " + period + " seconds");
        } else {
            log.info("Posts urls generated in " + urlsPath + "\n" + urls);
        }
        return {
            path: urlsPath,
            data: urls
        };
    } else {
        log.info("Please check config.hexo_submit_urls_to_search_engine.submit_condition!!!");
    }
};