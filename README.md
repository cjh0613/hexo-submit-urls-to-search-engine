# hexo-submit-urls-to-searchEngine
# [(Unfinished… stay tuned…)](https://github.com/cjh0613/hexo-submit-urls-to-searchEngine/projects/1)
# （开发中……[项目进度](https://github.com/cjh0613/hexo-submit-urls-to-searchEngine/projects/1) ）

[![GitHub stars](https://img.shields.io/github/stars/cjh0613/hexo-submit-urls-to-searchEngine.svg?style=social)](https://github.com/cjh0613/hexo-submit-urls-to-searchEngine/stargazers)     [![GitHub forks](https://img.shields.io/github/forks/cjh0613/hexo-submit-urls-to-searchEngine.svg?style=social)](https://github.com/cjh0613/hexo-submit-urls-to-searchEngine/network/members)  `请点击页面顶部靠右star与fork`


[![GitHub release](https://img.shields.io/github/release/cjh0613/hexo-submit-urls-to-searchEngine.svg?label=%E7%89%88%E6%9C%AC)](https://github.com/cjh0613/hexo-submit-urls-to-searchEngine/releases/tag/)   ![GitHub top language](https://img.shields.io/github/languages/top/cjh0613/hexo-submit-urls-to-searchEngine.svg)  ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/cjh0613/hexo-submit-urls-to-searchEngine.svg)  ![GitHub repo size](https://img.shields.io/github/repo-size/cjh0613/hexo-submit-urls-to-searchEngine.svg) ![GitHub](https://img.shields.io/github/license/cjh0613/hexo-submit-urls-to-searchEngine.svg) ![platforms](https://img.shields.io/badge/platform-win32%20%7C%20win64%20%7C%20linux%20%7C%20osx-brightgreen.svg)     [![GitHub issues](https://img.shields.io/github/issues/cjh0613/hexo-submit-urls-to-searchEngine.svg)](https://github.com/cjh0613/hexo-submit-urls-to-searchEngine/issues)  [![GitHub closed issues](https://img.shields.io/github/issues-closed/cjh0613/hexo-submit-urls-to-searchEngine.svg)](https://github.com/cjh0613/hexo-submit-urls-to-searchEngine/issues?q=is%3Aissue+is%3Aclosed) ![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/cjh0613/hexo-submit-urls-to-searchEngine.svg)   ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/cjh0613/hexo-submit-urls-to-searchEngine.svg)  ![GitHub contributors](https://img.shields.io/github/contributors/cjh0613/hexo-submit-urls-to-searchEngine.svg)


[中文版：开发动机和使用文档](https://cjh0613.github.io/blog)

这三大搜索引擎已占据97%的全球搜索引擎市场份额（包括使用bing索引的雅虎、ecosia等）。后期可能会加入Yandex。

<!--https://www.hui-wang.info/2016/10/23/Hexo插件之百度主动提交链接/-->



## hexo-submit-urls-to-searchEngine 配置
```
hexo_submit_urls_to_search_engine:
  submit_condition: count #被提交的条件，现仅支持count
  count: 10 ## 提交最新的10个链接
  period: 900 #一段时间，单位秒，文章更新时间距本插件运行时间在此段时间内，链接会被提交
  google: true #使用Google提交
  bing: true #使用bing提交
  baidu: true #使用baidu提交
  txt_path: submit_urls.txt ## 文本文档的地址， 新链接会保存在此文本文档里
  baidu_host: https://cjh0613.github.io ## 在百度站长平台中注册的域名
  baidu_token: xxxxx ## 请注意这是您的秘钥， 所以请不要把网站源代码发布在公众仓库里!
  bing_host: https://cjh0613.github.io ## 在bing站长平台中注册的域名
  bing_token: xxxxx ## 请注意这是您的秘钥， 所以请不要把网站源代码发布在公众仓库里!
  google_host: https://cjh0613.github.io ## 在google站长平台中注册的域名
  google_key_file: Project.json #存放google key的json文件，放于网站根目录，请不要把网站源代码发布在公众仓库里!
```

## deploy 配置
```
deploy:
- type: cjh_google_url_submitter # 谷歌
- type: cjh_bing_url_submitter # 必应
- type: cjh_baidu_url_submitter # 百度
```
