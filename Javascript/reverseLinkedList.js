function LinkedListNode (value) {
  this.value = value;
  this.next = null;
};

LinkedListNode.prototype.insert = function (value) {
  var node = this;
  while (node.next) {
    node = node.next;
  }
  node.next = new LinkedListNode(value);
};

LinkedListNode.prototype.reverse = function () {
  var node = this;
  var previousNode = null;
  var nextNode = node.next;
  while (node) {
    nextNode = node.next;
    node.next = previousNode;
    previousNode = node;
    node = nextNode;
  }
  return previousNode;
};
