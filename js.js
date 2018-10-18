// 深度拷贝
function deepCopy(obj) {
  let newObj;
  let type = Object.prototype.toString.call(obj);
  if (type !== '[object Array]' && type !== '[object Object]') {
    return obj;
  } else {
    if (type === '[object Array]') {
      newObj = [];
    } else {
      newObj = {};
    }
  }
  for (let key in obj) {
    newObj[key] = deepCopy(obj[key]);
  }
  return newObj;
}

function test(resolve) {
  setTimeout(resolve, time);
}
function newSetTime(func, time) {
  let p = new Promise(function(resolve) {
    console.log('time:', time);
    setTimeout(resolve, time);
  });
  p.then(func)
}

newSetTime(function(){console.log('test test')});

function setTimeoutPromise(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms);

  });
}

setTimeoutPromise(4000).then(function() {console.log(123123123)})

function setIntervalPromise(ms) {
  return new Promise(function(resolve) {
    setInterval(resolve, ms);
  })
}
setIntervalPromise(1000).then(function() {console.log(321)})


// 快速排序
function quickSort(data, left, right) {
  if (left > right) {
    return;
  }
  let temp = data[left];
  let i = left;
  let j = right;
  let t;
  while (i !== j) {
    while (data[j] <= temp && i < j) {
      j -= 1;
    }
    while (data[i] >= temp && i < j) {
      i += 1;
    }
    if (i < j) {
      t = data[i];
      data[i] = data[j];
      data[j] = t;
    }
  }

  t = data[left];
  data[left] = data[i];
  data[i] = t;

  quickSort(data, left, i - 1);
  quickSort(data, i + 1, right);
}

// 全排列
function fullPermutation(param) {
  param = param.toString();
  let retSet = new Set();
  permutation(param, 0, param.length - 1);

  function permutation(str, start, end) {
    if (start === end) {
      retSet.add(str);
    } else {
      let arr = str.split('');
      for (let i = start; i <= end; i++) {
        let temp = arr[start];
        arr[start] = arr[i];
        arr[i] = temp;

        permutation(arr.join(''), start + 1, end);

        temp = arr[start];
        arr[start] = arr[i];
        arr[i] = temp;
      }
    }
  }

  return [...retSet];
}

// texts: [text, text, ...]
function getPosition(texts) {

}
