<template>
  <div>
    <nuxt />
  </div>
</template>
<script>
export default {
  mounted() {
    function setRem() {
      var baseFontSize = 16 //100
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
    // setRem()
    // 改变窗口大小时重新设置 rem
    window.onresize = function() {
      // setRem()
    }
  }
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
