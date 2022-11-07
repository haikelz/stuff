#include <iostream> 
#include <string>
using namespace std; 

void operasi(float phi, int r, string satuan) {
  cout << "Jadi, hasilnya adalah: " << phi * (r * r) << " " << satuan << endl; 
}

int main() {
  float phi; 
  int r; 
  string satuan; 

  cout << "Program menghitung luas lingkaran c++\n" << endl;
  cout << "Silahkan masukkan besar jari-jari: "; 
  cin >> r; 

  if(r % 7 == 0) {
    phi = 22.0 / 7.0; 
  } else {
    phi = 3.14; 
  }

  operasi(phi, r, satuan); 
  return 0; 
}
