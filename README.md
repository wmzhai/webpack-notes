# webpack-notes


## config
* config.output.path 需要写绝对路径，一般通过这个语句来拼接 `path.resovle(__dirname+'build')`


## Loaders

* 多个loader从右向左执行，比如下面这句先执行`css-loader`,然后再执行`style-loader`
`use: ['style-loader', 'css-loader']`
* image loader，设置output.publicPath来自动控制URL

## Codesplitting

* 将js分拆成多个，按需加载，提高效率
* Vender Caching: 打包成 vender.js 和 bundle.js，其中vender.js放置第三方包等很少变化的包，进而提升重复加载的效率
