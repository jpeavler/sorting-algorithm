  //A helper fuction for quicksort
  const partition = (list, low, high) => {
    let pivot = list[high];
    let i = (low-1);
    for (let j = low; j < high; j++) {
      if(list[j] < pivot) {
        i++;
        if(i != j) {          //prevents swapping an index with itself
          let swapper = list[i];
          list[i] = list[j];
          list[j] = swapper;
        }
      }
    }
    let swapper2 = list[i+1];
    list[i+1] = list[high];
    list[high] = swapper2;
    return i+1;
  }
  //A recursive function that takes in an array or subarray along with the the first and last indexes of that array/subarray
  const quicksort = (list, low, high) => {
    if(low < high) {
      let partitionIndex = partition(list, low, high);
      quicksort(list, low, partitionIndex-1);
      quicksort(list, partitionIndex+1, high);
    }
    return list;
  }

module.exports = quicksort;