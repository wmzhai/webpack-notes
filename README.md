# webpack-notes


## config
* config.output.path 需要写绝对路径，一般通过这个语句来拼接 `path.resovle(__dirname+'build')`


## Loaders

* 多个loader从右向左执行，比如下面这句先执行`css-loader`,然后再执行`style-loader`
`use: ['style-loader', 'css-loader']`