class Sorter {
  constructor() {
    // your implementation
    this.array = [];
    this.comparator = null;
  }

  add(element) {
    // your implementation
    this.array.push(element);
  }

  at(index) {
    // your implementation
    return this.array[index];
  }

  get length() {
    // your implementation
    return this.array.length;
  }

  toArray() {
    // your implementation
    return this.array;
  }

  sort(indices) {
    // your implementation
    indices = quickSort(indices);
    let sortedArray = [];
    for (let i = 0; i < indices.length; i++) {
      sortedArray.push(this.array[indices[i]]);
    }

    if (this.comparator !== null) {
      sortedArray.sort(this.comparator);
    } else {
      sortedArray = quickSort(sortedArray);
    }

    for (let i = 0; i < indices.length; i++) {
      this.array.splice(indices[i], 1, sortedArray[i]);
    }


    function quickSort(arr) {
      if (arr.length < 2) {
        return arr;
      }

      const index = getRandomInt(0, arr.length);
      const pivot = arr[index];
      arr.splice(index, 1);
      let arrayOfSmaller = [];
      let arrayOfBigger = [];

      arr.forEach((item) => {
        if (item > pivot) {
          arrayOfBigger.push(item);
        } else {
          arrayOfSmaller.push(item);
        }
      });
      return [].concat(quickSort(arrayOfSmaller), pivot, quickSort(arrayOfBigger));
    }

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;