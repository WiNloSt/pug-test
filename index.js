const pug = require('pug')

const html = pug.renderFile('template.pug', {name : 'test'})
console.log(html)
// <p>test's Pug source code</p>
