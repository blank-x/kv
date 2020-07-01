var loader = require('./index')

var fs = require('fs')
var path = require('path')



var content = fs.readFileSync(path.resolve(__dirname,'./test.md'),'utf-8')

var result = loader(content)

fs.writeFileSync(path.resolve(__dirname,'./s.vue'),result)
