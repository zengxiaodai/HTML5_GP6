var QQMapWX = require('./qqmap.js')
var map = new QQMapWX({
    key: 'WOABZ-2QDEJ-DETFL-FP3XG-BDOTE-BVFJX'
})

function getAddr(pos) {
    return new Promise(resolve=>{
        map.reverseGeocoder({        
            location: pos,
            success: function(res) {
                if(res.status===0) {
                    resolve(res.result)        
                }
            },
            fail: function(err) {
              console.error('解析失败', err);
            }
          })
    })
}

function calDis(pos, list) {
    console.log('list', list)
    return new Promise(resolve=>{
        map.calculateDistance({       
            from: pos,
            to: list,
            success: function(res) {
              console.log('计算距离成功', res)
              if(res.status===0) {
                  resolve(res.result)
              }
            },
            fail: function(error) {
              console.error(error);
            }
        })
    })
}


module.exports = {
    getAddr,
    calDis
}