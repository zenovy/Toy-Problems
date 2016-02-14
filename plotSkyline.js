function Point (x, y, rect) {
  return {x: x, y: y, rect: rect};
}

function MaxHeap () {
  this.storage = [];
  this.getParentIndex = function (index) {
    return index > 0 ? Math.floor((index - 1) / 2) : null;
  };
  this.getLeftChildIndex = function (index) {
    return index * 2 + 1;
  };
  this.getRightChildIndex = function (index) {
    return index * 2 + 2;
  };
  this.compare = function (val1, val2) {
    return val1 < val2;
  };
}

MaxHeap.prototype.insert = function (val) {
  var swapIndex = this.storage.length;
  var parentIndex = this.getParentIndex(swapIndex);
  this.storage[swapIndex] = val;
  while (parentIndex && this.compare(this.storage[parentIndex], this.storage[swapIndex])) {
    this.storage[swapIndex] = this.storage[parentIndex];
    this.storage[parentIndex] = val;
    swapIndex = parentIndex;
    parentIndex = this.getParentIndex(swapIndex);
  }
}

MaxHeap.prototype.heapify = function () {

};

MaxHeap.prototype.pop = function () {
  var root = this.storage[0];
  var lastVal = this.storage.pop();
  var index = 0;
  var leftChild = this.getLeftChildIndex(index);
  var rightChild = this.getRightChildIndex(index);
  while (

}

function plotSkyline (rectangles) {
  var criticalPoints = [];
  //here we find points where the skyline might change
  for (var i = 0; i < rectangles.length; i++) {
    var rectangle = rectangles[i];
    criticalPoints.push(new Point(rectangle[left], rectangle[height], rectangle));
    criticalPoints.push(new Point(rectangle[right], rectangle[height], rectangle));
  }
  
  criticalPoints.sort(function(point1, point2) {return point1.x - point2.x});
  for (var i = 0; i < criticalPoints.length; i++) {
    
  }
}
