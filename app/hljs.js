
var Highlight = require('../node_modules/highlight.js/lib/highlight'),
    hljs      = new Highlight()

hljs.registerLanguage('xml', require('../node_modules/highlight.js/lib/languages/xml'));
hljs.registerLanguage('css', require('../node_modules/highlight.js/lib/languages/css'));
hljs.registerLanguage('markdown', require('../node_modules/highlight.js/lib/languages/markdown'));
hljs.registerLanguage('javascript', require('../node_modules/highlight.js/lib/languages/javascript'));
hljs.registerLanguage('json', require('../node_modules/highlight.js/lib/languages/json'));
hljs.registerLanguage('livescript', require('../node_modules/highlight.js/lib/languages/livescript'));
hljs.registerLanguage('makefile', require('../node_modules/highlight.js/lib/languages/makefile'));
hljs.registerLanguage('scss', require('../node_modules/highlight.js/lib/languages/scss'));

// hljs.registerLanguage('http', require('./languages/http'));

module.exports = hljs;
