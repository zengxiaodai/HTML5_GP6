// 自定义Loader

module.exports = function(source) {
  // console.log('txt-loader source', source)

  // do something
  let result = source.replace(/\#/img, ' ')
  // do something

  // console.log('txt-loader result', result)
  return `module.exports = ${JSON.stringify(result)}`
}
