hexo.extend.generator.register('cjh_url_generator', require('./lib/generator'));
hexo.extend.deployer.register('cjh_baidu_url_submitter', require('./lib/baidu_submitter'));
hexo.extend.deployer.register('cjh_bing_url_submitter', require('./lib/bing_submitter'));
hexo.extend.deployer.register('cjh_google_url_submitter', require('./lib/google_submitter'));
