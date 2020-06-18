hexo.extend.generator.register('baidu_url_generator', require('./lib/generator'));
hexo.extend.deployer.register('baidu_url_submitter', require('./lib/baidu_submitter'));
hexo.extend.deployer.register('bing_url_submitter', require('./lib/bing_submitter'));
hexo.extend.deployer.register('google_url_submitter', require('./lib/google_submitter'));
