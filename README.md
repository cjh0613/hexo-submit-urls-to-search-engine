
# hexo-submit-urls-to-search-engine
![峡州仙士](https://cdn.jsdelivr.net/gh/cjh0613/blog/images/icons/CJHicon.jpg)


The project is being tested publicly, welcome to use and submit feedback!

QQ Group：[1079685183 点击直接调用 QQ 添加（凑人数）](https://qm.qq.com/cgi-bin/qm/qr?k=POn3F_D9aGvz3sBLO-qwUkaQT7kWzwkC&jump_from=webapi)

Telegram group： https://t.me/hexoseo

If you don't want to be disturbed by excessive group messages, you can join and set it to mute, and then open the communication when you need it.
## Roadmap
[Roadmap, 开发计划、路线图](https://github.com/cjh0613/hexo-submit-urls-to-search-engine/projects/1) 

## Documentation
[中文使用文档](https://cjh0613.com/20200603HexoSubmitUrlsToSearchEngine.html) 中国内地用户务必阅读！

[English docs](https://en.cjh0613.com/20200603HexoSubmitUrlsToSearchEngine.html)

## [Donate](https://www.cjh0613.com) 

Hexo plugin to submit URLs of new posts to Google, Bing, Baidu search engine to improve the quality and speed of website collection.

These three major search engines have occupied 97% of the global search engine market share (including Yahoo, ecosia, etc. using bing index). Later, I may add the function of submitting links to Yandex.

[![GitHub stars](https://img.shields.io/github/stars/cjh0613/hexo-submit-urls-to-search-engine.svg?style=social)](https://github.com/cjh0613/hexo-submit-urls-to-search-engine/stargazers)     [![GitHub forks](https://img.shields.io/github/forks/cjh0613/hexo-submit-urls-to-search-engine.svg?style=social)](https://github.com/cjh0613/hexo-submit-urls-to-search-engine/network/members)  `Please click on the top right of the page star and fork【请点击页面顶部靠右star与fork】`


[![GitHub release](https://img.shields.io/github/release/cjh0613/hexo-submit-urls-to-search-engine.svg?label=%E7%89%88%E6%9C%AC)](https://github.com/cjh0613/hexo-submit-urls-to-search-engine/releases/tag/)   ![GitHub top language](https://img.shields.io/github/languages/top/cjh0613/hexo-submit-urls-to-search-engine.svg)  ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/cjh0613/hexo-submit-urls-to-search-engine.svg)  ![GitHub repo size](https://img.shields.io/github/repo-size/cjh0613/hexo-submit-urls-to-search-engine.svg) ![GitHub](https://img.shields.io/github/license/cjh0613/hexo-submit-urls-to-search-engine.svg) ![platforms](https://img.shields.io/badge/platform-win32%20%7C%20win64%20%7C%20linux%20%7C%20osx-brightgreen.svg)     [![GitHub issues](https://img.shields.io/github/issues/cjh0613/hexo-submit-urls-to-search-engine.svg)](https://github.com/cjh0613/hexo-submit-urls-to-search-engine/issues)  [![GitHub closed issues](https://img.shields.io/github/issues-closed/cjh0613/hexo-submit-urls-to-search-engine.svg)](https://github.com/cjh0613/hexo-submit-urls-to-search-engine/issues?q=is%3Aissue+is%3Aclosed) ![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/cjh0613/hexo-submit-urls-to-search-engine.svg)   ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/cjh0613/hexo-submit-urls-to-search-engine.svg)  ![GitHub contributors](https://img.shields.io/github/contributors/cjh0613/hexo-submit-urls-to-search-engine.svg)
## Quick start
**Just "Quick start"**, visit [English docs](https://en.cjh0613.com/20200603HexoSubmitUrlsToSearchEngine.html) or [中文详细文档](https://cjh0613.com/20200603HexoSubmitUrlsToSearchEngine.html)  for more.

### 1.install
```
npm install --save hexo-submit-urls-to-search-engine
```

or

```
yarn add hexo-submit-urls-to-search-engine
```

### 2.Edit hexo _config.yml
#### (1)hexo_submit_urls_to_search_engine

> Of course, you can use environment variables to record the key, visit [English docs](https://en.cjh0613.com/20200603HexoSubmitUrlsToSearchEngine.html) or [中文详细文档](https://cjh0613.com/20200603HexoSubmitUrlsToSearchEngine.html)  for more.
 
```yaml
hexo_submit_urls_to_search_engine:
  submit_condition: count # Submitted condition, optional value: count | period, Now only supports count
  count: 10 # Submit the latest 10 links
  period: 900 # Submit a link with a modification time of 900 seconds
  google: 0 #  Whether to submit to Google, optional values: 1 | 0 (0: No; 1: Yes)
  bing: 1 #  Whether to submit to bing, optional value: 1 | 0 (0: no; 1: yes)
  baidu: 1 # Whether to submit to baidu, optional value: 1 | 0 (0: no; 1: yes)
  txt_path: submit_urls.txt ## The address of the text document, the link to be pushed will be saved in this text document
  baidu_host: https://cjh0613.github.io ## Domain name registered in Baidu webmaster platform
  baidu_token: xxxxx ## Please note that this is your secret key, so do not publish the website source code in the public repository!
  bing_host: https://cjh0613.github.io ## Domain name registered in Bing webmaster platform
  bing_token: xxxxx ## Please note that this is your secret key, so do not publish the website source code in the public repository!
  google_host: https://cjh0613.github.io ## Domain name registered in Google webmaster platform
  google_key_file: Project.json # Store the json file of the google key in the root directory of the website (same location as the hexo _config.yml file), please do not publish the source code of the website in the public warehouse!
  google_proxy: 0 # Set the proxy used to submit urls to Google
  replace: 0  # Whether to replace some substrings in links, optional value: 1 | 0 (0: no; 1: yes)
  find_what: http://cjh0613.github.io/blog
  replace_with: https://cjh0613.com
```

#### (2)deploy
```yaml
deploy:
- type: cjh_google_url_submitter
- type: cjh_bing_url_submitter
- type: cjh_baidu_url_submitter
```

If you can push successfully, please **click "Star" as support**, thank you!

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
