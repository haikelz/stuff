/**
 * Soal 1
 * Pake if else
 */
function getBasketWeight<T extends number>(a: T, b: T) {
  if (a > b) return "Keranjang A lebih berat dari keranjang B";
  else if (a === b) return "Keranjang A beratnya sama dengan keranjang B";
  else return "Keranjang B lebih berat dari keranjang A";
}

console.log(getBasketWeight(10, 10));

// Soal 2
function countTotalMine(total: number) {
  /**
   * Dengan for loop + filter
   * 
   * let newArr = []
   * 
   * for(let i = 1; i <= total; i++) {
       newArr.push(i % 5 === 0 ? "Ranjau" : i)
     } 
     
     return newArr.filter((value) => value === "Ranjau").length
   */

  // Dengan fill + map + filter
  const newArr = new Array(total);
  return newArr
    .fill(null)
    .map((value, index) => ((index + 1) % 5 === 0 ? "Ranjau" : index + 1))
    .filter((value) => value === "Ranjau").length;
}

console.log(countTotalMine(50));
