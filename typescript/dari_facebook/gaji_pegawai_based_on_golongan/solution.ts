/**
 * Soal penentuan gaji. Mungkin nanti bakalan coba juga pake c++
 *
 * Note: upahnya harian
 * -> Golongan A upah 10000
 * -> Golongan B upah 20000
 * -> Golongan C upah 30000
 *
 * Rumus mencari gaji: jumlah hari karyawan masuk * upah berdasarkan golongan
 */

function getGaji(totalHari: number, golongan: string) {
  let gaji = 0;

  if (golongan === "A") gaji = 10000;
  else if (golongan === "B") gaji = 20000;
  else if (golongan === "C") gaji = 30000;

  return totalHari * gaji;
}

console.log(getGaji(10, "B"));
