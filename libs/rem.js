function setRem() {
  var baseFontSize = 100
  var baseWidth = 375
  var clientWidth =
    document.documentElement.clientWidth || window.innerWidth || 375
  var innerWidth = clientWidth
  var rem = 100
  if (innerWidth >= 414) {
    rem = Math.floor((innerWidth / baseWidth) * baseFontSize * 0.98)
  } else {
    rem = Math.floor((innerWidth / baseWidth) * baseFontSize)
  }
  console.log('11', rem)
  var dhtml = document.querySelector('html')
  dhtml.style.fontSize = rem + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function() {
  setRem()
}
