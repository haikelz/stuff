#include <iostream> 
using namespace std;

int main() {
  // Soal coding interview 
  // Based on programmer zaman now videos

  // fizzbuzz
  // Misal ada bilangan 1 - 100
  // Maka setiap angka yang bisa dibagi dengan 3, maka akan mencetak "fizz"
  // Dan jika ada angka yang bisa dibagi 5, maka akan mencetak "buzz"
  // Tapi jika bisa keduanya, maka yang dicetak juga keduanya "fizzbuzz"
  
  
  // Kita buat perulangan 
  int input; 

  cout << "Masukkan angka yang ingin diidentifikasi fizz atau buzz: "; 
  cin >> input; 

  for (int i = 1; i <= input; i++) {
    // fizzbuzz 
    if ((i % 3) == 0 && (i % 5) == 0) {
      cout << "fizzbuzz" << endl;
    }

    // fizz 
    else if (i % 3 == 0) {
      cout << "fizz" << endl; 
    }

    // buzz 
    else if (i % 5 == 0) {
      cout << "buzz" << endl;
    }

    // tidak bisa dibagi 3 dan 5
    else {
      cout << i << endl;
    }
  }

}
