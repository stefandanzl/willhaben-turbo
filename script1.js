const willhaben = require('willhaben')

willhaben.getListings('https://www.willhaben.at/iad/kaufen-und-verkaufen/marktplatz/pc-komponenten/-5882?keyword=rtx&rows=1000').then(json => {
    console.log(json)
})