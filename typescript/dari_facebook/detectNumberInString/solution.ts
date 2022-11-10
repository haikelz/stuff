/**
 * Pas dicari-cari, ga ada lagi pertanyaannya, entah udah solved terus dihapus atau emang sayanya aja yang kurang teliti. Tapi, kurang lebih begini inti pertanyaannya
 *
 * Deteksi apakah di dalam suatu string itu ada angka atau tidak
 * - Jika ada, maka kembalikan "Maaf didalam variabel string terdapat angka"
 * - Jika tidak ada, maka kembalikan "Di dalam string ini tidak ada yang bernilai angka"
 */

function detectNumberInString(str: string) {
  // Cek apakah ada angka dalam stringnya
  const isNumberInString = str
    .split("")
    .map((item) => (isNaN(parseInt(item)) ? "string" : "number"))
    .includes("number");

  /**
   * - Jika isNumberInString bernilai true, maka kembalikan nilai "Maaf didalam variabel string terdapat angka "
   * - Jika tidak, maka kembalikan nilai "Di dalam string ini tidak ada yang bernilai angka"
   */
  if (isNumberInString === true) {
    return "Maaf didalam variabel string terdapat angka";
  } else {
    return "Di dalam string ini tidak ada yang bernilai angka";
  }
}

console.log(detectNumberInString("Halo, saya Haikel 123456"));
