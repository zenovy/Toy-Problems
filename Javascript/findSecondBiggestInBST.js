function BST (value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
}

BST.prototype.insertLeft = function (value) {
  this.left = new BST(value);
  return this.left;
};

BST.prototype.insertRight = function (value) {
  this.right = new BST(value);
  return this.right;
};

BST.prototype.findSecondBiggest = function () {
  var biggest = this;
  var biggestParent;
  var secondBiggest;

  //find biggest (and its parent in case it is a leaf)
  while (biggest.right) {
    biggestParent = biggest;
    biggest = biggest.right;
  }

  //if biggest is not a leaf, second biggest is its biggest descendant
  if (biggest.left) {
    secondBiggest = biggest.left;
    while (secondBiggest.right) {
      secondBiggest = secondBiggest.right;
    }
  //otherwise, if biggest is a leaf, the second biggest is its parent
  } else {
    secondBiggest = biggestParent;
  }
  return secondBiggest.value;
};
