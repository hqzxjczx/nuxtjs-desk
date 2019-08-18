console.log('a');

new Promise((resolve, reject) => {
  resolve('f');
}).then(result => {
  console.log(result);
});

setTimeout(() => {
  console.log('b');
  new Promise((resolve, reject) => {
    resolve('c');
  }).then(result => {
    console.log(result);
  });
}, 0);

console.log('d');
setTimeout(() => {
  console.log('e');
}, 0);

function debounce(func, wait, immediate) {
  var timer, context, args;
  const later = () =>
    setTimeout(() => {
      if (!mmediate) {
        func.apply(context, args);
        context = args = null;
      }
    }, wait);
  return function(...params) {
    if (!timer) {
      timer = later();
      if (!immediate) {
        func.apply(this, params);
      } else {
        context = this;
        args = params;
      }
    } else {
      clearTimeout(timer);
      timer = later();
    }
  };
}

function ticker(init, delay, start, end) {
  this.timer = null;
  this.innerTimer = null;
  this.delayTimer = null;
  this.begin = () => {
    if (delay) {
      if (this.delayTimer) {
        clearTimeout(this.delayTimer);
      }
      this.delayTimer = setTimeout(() => {});
    }
  };
}
