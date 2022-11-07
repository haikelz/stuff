/**
 * - Tugasnya: Menentukan harga barang setelah didiskon
 * - Kalo di gambarnya sih dimintanya pake c++, tapi disini saya pake TS aja
 */

function itemPriceAfterDiscount<T extends number>(price: T, discount: T) {
  /**
   * - 1% itu sama dengan 1/100
   * - Berarti 10% = 10/100
   */

  // jika diskon = 0%, maka kembalikan nilai price tanpa didiskon
  if (discount === 0) return price;

  // jika discount < 0%, maka kembalikan pernyataan seperti di bawah
  if (discount < 0) return "Tidak ada diskon dengan nilai negatif!";

  return price * (discount / 100);
}

console.log(itemPriceAfterDiscount(10000, 10));
