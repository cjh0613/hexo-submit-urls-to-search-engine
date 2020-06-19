var request = require("request");
var google = require("googleapis");



/////////////////////////////////////////////////////////////////////////
module.exports = function(args) {

  var log = this.log;
  var config = this.config;
  var urlsPath = config.hexo_submit_urls_to_search_engine.txt_path;
  var host = config.hexo_submit_urls_to_search_engine.google_host;
  var google_key_file = config.hexo_submit_urls_to_search_engine.google_key_file;
  var key = require("./../../../"+google_key_file);

  var publicDir = this.public_dir;
  //var UrlsFile = pathFn.join(publicDir, 'submit_urls.txt');
  var UrlsFile = pathFn.join(publicDir, urlsPath);
  var urls = fs.readFileSync(UrlsFile, 'utf8');

  log.info("Submitting google urls \n" + urls)

  const jwtClient = new google.auth.JWT(
      key.client_email,
      null,
      key.private_key,
      ["https://www.googleapis.com/auth/indexing"],
      null
  );

  jwtClient.authorize(function(err, tokens) {
    if (err) {
      console.log(err);
      return;
    }
    let options = {
      url: "https://indexing.googleapis.com/v3/urlNotifications:publish",
      method: "POST",
      // Your options, which must include the Content-Type and auth headers
      headers: {
        "Content-Type": "application/json"
      },
      auth: { "bearer": tokens.access_token },
      // Define contents here. The structure of the content is described in the next step.
      json: {
        "url": urls,
        "type": "URL_UPDATED"
      }
    };
    request(options, function (error, response, body) {
      // Handle the response
      console.log(body);
    });
  });
};