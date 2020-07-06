
# hexo-submit-urls-to-search-engine
![峡州仙士](https://cdn.jsdelivr.net/gh/cjh0613/blog@master/images/icons/CJHicon.jpg)
## [Donate](https://cjh0613.github.io)
Auto submit the new link of the Hexo to Google, Bing, Baidu search engine to improve the quality and speed of website collection.

These three major search engines have occupied 97% of the global search engine market share (including Yahoo, ecosia, etc. using bing index). Later, I may add the function of submitting links to Yandex.

[![GitHub stars](https://img.shields.io/github/stars/cjh0613/hexo-submit-urls-to-search-engine.svg?style=social)](https://github.com/cjh0613/hexo-submit-urls-to-search-engine/stargazers)     [![GitHub forks](https://img.shields.io/github/forks/cjh0613/hexo-submit-urls-to-search-engine.svg?style=social)](https://github.com/cjh0613/hexo-submit-urls-to-search-engine/network/members)  `Please click on the top right of the page star and fork【请点击页面顶部靠右star与fork】`


[![GitHub release](https://img.shields.io/github/release/cjh0613/hexo-submit-urls-to-search-engine.svg?label=%E7%89%88%E6%9C%AC)](https://github.com/cjh0613/hexo-submit-urls-to-search-engine/releases/tag/)   ![GitHub top language](https://img.shields.io/github/languages/top/cjh0613/hexo-submit-urls-to-search-engine.svg)  ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/cjh0613/hexo-submit-urls-to-search-engine.svg)  ![GitHub repo size](https://img.shields.io/github/repo-size/cjh0613/hexo-submit-urls-to-search-engine.svg) ![GitHub](https://img.shields.io/github/license/cjh0613/hexo-submit-urls-to-search-engine.svg) ![platforms](https://img.shields.io/badge/platform-win32%20%7C%20win64%20%7C%20linux%20%7C%20osx-brightgreen.svg)     [![GitHub issues](https://img.shields.io/github/issues/cjh0613/hexo-submit-urls-to-search-engine.svg)](https://github.com/cjh0613/hexo-submit-urls-to-search-engine/issues)  [![GitHub closed issues](https://img.shields.io/github/issues-closed/cjh0613/hexo-submit-urls-to-search-engine.svg)](https://github.com/cjh0613/hexo-submit-urls-to-search-engine/issues?q=is%3Aissue+is%3Aclosed) ![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/cjh0613/hexo-submit-urls-to-search-engine.svg)   ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/cjh0613/hexo-submit-urls-to-search-engine.svg)  ![GitHub contributors](https://img.shields.io/github/contributors/cjh0613/hexo-submit-urls-to-search-engine.svg)

## Documentation
[中文使用文档](https://cjh0613.github.io/blog/20200603HexoSubmitUrlsToSearchEngine.html)

[English doc](https://cjh0613.github.io/en/20200603HexoSubmitUrlsToSearchEngine.html)

## Roadmap
[开发计划、路线图](https://github.com/cjh0613/hexo-submit-urls-to-search-engine/projects/1) [Roadmap](https://github.com/cjh0613/hexo-submit-urls-to-search-engine/projects/1)

## Quick start
### 1.install
```
npm install --save hexo-submit-urls-to-search-engine
```

### 2.Edit hexo config.yml
#### (1)hexo_submit_urls_to_search_engine
```
hexo_submit_urls_to_search_engine:
  submit_condition: count # count/period The submitted condition, only supports count now
  count: 10 ## Submit the latest 10 links
  period: 900 #A period of time, in seconds, the update time of the article is away from the running time of the plugin. Within this period of time, the link will be submitted
  google: 1 #Submit to Google
  bing: 1 #Submit to bing
  baidu: 1 #Submit to baidu
  txt_path: submit_urls.txt ## The address of the text document, the link to be pushed will be saved in this text document
  baidu_host: https://cjh0613.github.io ## Domain name registered in Baidu webmaster platform
  baidu_token: xxxxx ## Please note that this is your secret key, so do not publish the website source code in the public repository!
  bing_host: https://cjh0613.github.io ## Domain name registered in Bing webmaster platform
  bing_token: xxxxx ## Please note that this is your secret key, so do not publish the website source code in the public repository!
  google_host: https://cjh0613.github.io ## Domain name registered in Google webmaster platform
  google_key_file: Project.json #Store the json file of the google key in the root directory of the website (same location as the hexo config.yml file), please do not publish the source code of the website in the public warehouse!
```

#### (2)deploy
```
deploy:
- type: cjh_google_url_submitter
- type: cjh_bing_url_submitter
- type: cjh_baidu_url_submitter
- type: git # If you use "hexo-deployer-git"
```

### 3.finish
Run:
```
hexo clean && hexo generate && hexo deploy
```
And enjoy!

success response:
```
Bing response:  { d: null }
Baidu response:  {"remain":2999,"success":1}
Google response:  { urlNotificationMetadata:
   { url:
      'https://cjh0613.github.io',
     latestUpdate:
      { url:
         'https://cjh0613.github.io',
        type: 'URL_UPDATED',
        notifyTime: '2020-06-12T05:37:25.701779228Z' } } }
```