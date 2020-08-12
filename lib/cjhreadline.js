var fs = require('fs');
var readline = require('readline');

function readFileToArr(fReadName, callback) {
    var fRead = fs.createReadStream(fReadName, 'utf8');
    var objReadline = readline.createInterface({
        input: fRead
    });
    var arr = new Array();
    objReadline.on('line', function (line) {
        arr.push(line);
    });
    objReadline.on('close', function () {
        callback(arr);
    });
}

module.exports = {
    readFileToArr
}

