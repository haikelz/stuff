function getSameNumber<T extends Array<number>>(arr: T) {
  const newArr = arr.map((item) => item + 1);
  const newArr2 = arr.map((item) => item * 2);

  let result: Array<number> = [];

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr2.length; j++) {
      if (newArr[i] === newArr2[j]) {
        result.push(newArr[i]);
      }
    }
  }

  return result;
}

console.log(getSameNumber([1, 2, 3, 4, 5]));
