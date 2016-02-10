//You rank players in the game from highest to lowest score. So far you're using an algorithm that sorts in O(n\lg{n}) time, but players are complaining that their rankings aren't updated fast enough. You need a faster sorting algorithm.
//
//Write a function that takes:
//
//a list of unsorted_scores
//the highest_possible_score in the game
//and returns a sorted list of scores in less than O(n\lg{n}) time.

function findOrderOfMagnitude (number) {
  var order = 0;
  while (powerOfTen(order) <= number) {
    order++;
  }
  return order - 1;
}

function powerOfTen (order) {
  return Math.pow(10, order);
}

function sortScores (unsorted_scores, highest_possible_score) {
  var sortedScores = unsorted_scores.slice();
  var highestOrderOfMagnitude = findOrderOfMagnitude(highest_possible_score);

  var digitBucket;
  var digit;
  var magnitude;
  var i;

  for (magnitude = 0; magnitude < highestOrderOfMagnitude; magnitude++) {
    digitBucket = {};
    for (i = 0; i < sortedScores.length; i++) {
      score = sortedScores[i];
      if (score / powerOfTen(magnitude) < 1) {
        digit = 0;
      } else {
        digit = Math.floor(score % powerOfTen(magnitude + 1) / powerOfTen(magnitude));
      }
      if (!digitBucket[digit]) digitBucket[digit] = [];
      digitBucket[digit].push(sortedScores[i]);
    }
    sortedScores = [];
    for (i = 0; i < 10; i++) {
      if (digitBucket[i]) sortedScores = sortedScores.concat(digitBucket[i]);
    }
  }
  return sortedScores;
}

