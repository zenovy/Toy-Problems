// You are a renowned thief who has recently switched from stealing precious metals to stealing cakes because of the insane profit margins. You end up hitting the jackpot, breaking into the world's largest privately owned stock of cakes—the vault of the Queen of England.
// While Queen Elizabeth has a limited number of types of cake, she has an unlimited supply of each type.

// Each type of cake has a weight and a value, stored in a tuple with two indices:

// An integer representing the weight of the cake in kilograms
// An integer representing the monetary value of the cake in British pounds
// For example:
//   # weighs 7 kilograms and has a value of 160 pounds
//   (7, 160)

//   # weighs 3 kilograms and has a value of 90 pounds
//   (3, 90)

// You brought a duffel bag that can hold limited weight, and you want to make off with the most valuable haul possible.

// Write a function max_duffel_bag_value() that takes a list of cake type tuples and a weight capacity, and returns the maximum monetary value the duffel bag can hold.

// For example:

//   cake_tuples = [(7, 160), (3, 90), (2, 15)]
//   capacity    = 20

// max_duffel_bag_value(cake_tuples, capacity)
// # returns 555 (6 of the middle type of cake and 1 of the last type of cake)

// Weights and values may be any non-negative integer. Yes, it's weird to think about cakes that weigh nothing or duffel bags that can't hold anything. But we're not just super mastermind criminals—we're also meticulous about keeping our algorithms flexible and comprehensive.

function findPartitions (n) {
  var partitions = [];
  function partitionate (n, max, prefix) {
    if (n === 0) {
      partitions.push(prefix);
      return;
    }
    for (var i = Math.min(max, n); i >= 1; i--) {
      partitionate(n-i, i, prefix.concat(i));
    }
  }
  partitionate(n, n, []);
  return partitions;
}

function arraySum (array) {
  return array.reduce(function (sum, val) {return sum + val}, 0);
}

function buildHighestValueTable (tuples) {
  return tuples.reduce(function (table, tuple) {
      index = tuple[0];
      value = tuple[1];
      if (!table[index] || table[index] < value) {
        table[index] = value;
      }
      return table;
  }, {});
}

function sumOfCombinationValues (combination, valueMapTable) {
  return combination.reduce(function (sum, weight) {
    if (typeof sum === 'number' && typeof valueMapTable[weight] === 'number') {
      sum += valueMapTable[weight];
      return sum;
    } else {
      return null;
    }
  }, 0);
}

function maxDuffelBagValue (cakeTuples, capacity) {
  var weight;
  var value;
  var maxValueForWeight;
  var combSum;

  var cakeTable = buildHighestValueTable(cakeTuples);
  var maxValueForWeightTable = [null];
  
  for (var weight = 1; weight <= capacity; weight++) {
    combinations = findPartitions(weight);
    maxValueForWeight = combinations.reduce(function (maxValue, combination) {
      combSum = sumOfCombinationValues(combination, maxValueForWeightTable);
      return Math.max(maxValue, combSum);
    }, 0);
    if (!cakeTable[weight]) {
      maxValueForWeightTable.push(maxValueForWeight);
    } else {
      maxValueForWeightTable.push(Math.max(maxValueForWeight, cakeTable[weight]));
    }
  }

  return maxValueForWeightTable[capacity];
}
