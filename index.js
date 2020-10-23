funtion mapToNegativize(sourceArray) {
  let newSourceArray = []
  sourceArray.forEach(element => newSourceArray.push(element * -1));
  return newSourceArray
}