function truthCheck(collection, pre) {
    let counter = 0;
    for (let c in collection) {
      if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
        counter++;
      }
    }
    return counter == collection.length;
  }