//  Input Format:
//
//  my_rectangle = {
//
//    # coordinates of bottom-left corner:
//    'x': 1,
//    'y': 5,
//
//    # width and height
//    'width': 10,
//    'height': 4,
//
//}

function findIntersectionRange (rect1, rect2, dim, length) {
  var lesser, greater;
  if (rect1[dim] < rect2[dim]) {
    lesser = rect1;
    greater = rect2;
  } else {
    lesser = rect2;
    greater = rect1;
  }

  var intersectionStart = greater[dim];
  var intersectionEnd = Math.min(greater[dim] + greater[length], lesser[dim] + lesser[length]);
  var intersectionRange = [intersectionStart, intersectionEnd - intersectionStart];
  if (intersectionRange[1] < 0) {
    return null;
  } else {
    return intersectionRange;
  }
}

function findRectangleIntersection (rect1, rect2) {
  var xrange = findIntersectionRange(rect1, rect2, 'x', 'width');
  var yrange = findIntersectionRange(rect1, rect2, 'y', 'height');
  if (xrange && yrange) {
    return {
      x: xrange[0],
      y: yrange[0],
      width: xrange[1],
      height: yrange[1]
    };
  } else {
    return null;
  }
}

