// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and set.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// set(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

var LRUCache = function (capacity) {
  this.queue = [];
  this.storage = {};
  this.capacity = capacity;
};

function sendToFrontOfQueue (key, queue) {
  //pluck key from queue and push it to the start of the queue
  queue.push(queue.splice(queue.indexOf(key), 1));
}

LRUCache.prototype.get = function (key) {
  if (this.storage[key]) {
    sendToFrontOfQueue(key, this.queue);
    return this.storage[key];
  } else {
    return -1;
  }
};

LRUCache.prototype.set = function (key, value) {
  var unusedKey;
  if (this.storage[key]) {
    sendToFrontOfQueue(key, this.queue);
  } else { 
    if (this.queue.length === this.capacity) {
      unusedKey = this.queue.shift();
      delete this.storage[unusedKey];
    }

    this.queue.push(key);
  }
  this.storage[key] = value;
};
