for (var i = 0; i < 10; i++) {
  setTimeout((function () {
      var j = i;
      return function () {
          console.log(j);
      };
  })(), 2000);
}

///////////////////////////////

function RateLimiter (fn, numberOfTimes, numberOfSeconds) {
    var callQueue = [];
    return function () {
        fn();
        var now = Date.now();
        callQueue.push(now);
        if (callQueue.length < numberOfTimes) {
            return false;
        } else {
            var oldest = callQueue.shift();
            if (now - oldest < numberOfSeconds * 1000) {
                return true;
            } else {
                return false;
            }
        }
    };
}

var foo = new RateLimiter(function () {}, 3, 2);
console.log(foo()); //false
console.log(foo()); //false
console.log(foo()); //true
setTimeout(function(){console.log(foo());}, 3000);
