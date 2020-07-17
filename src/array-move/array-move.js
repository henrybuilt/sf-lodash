export default function arrayMove(array, oldIndex, newIndex) {
  array = array.map(value => value); //HINT clone the array without using es6

  if (newIndex >= array.length) {
    var k = newIndex - array.length + 1;

    while (k--) array.push(undefined);
  }

  array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);

  return array;
};
