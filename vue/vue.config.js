const { defineConfig } = require('@vue/cli-service')
module.exports =
    {
    pages: {
        index: {
            entry: 'src/index/main.js',
            template: 'public/index.html',
            filename: 'product_list.html'
        },
        add: {
            entry: 'src/add_product/main.js',
            template: 'public/add.html',
            filename: 'add_product.html'
        }
    }
}