module.exports = {
    publicPath:'./',
    
    configureWebpack:{
        externals: {
            "BMap": "BMap"
        },
        resolve:{
             alias:{
                 'assets':'@/assets',
                 'components':'@/components',
                 'network':'@/network',
                 'views':'@/views',
                 'common':'@/common',
                 
             }
        },
       

    },
}