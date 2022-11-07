#include <iostream>
using namespace std; 

int main() {
    float input1; 
    float input2; 
    string operasi; 
    string hasil = "Hasilnya: "; 
    
    cout << "Program Kalkulator Sederhana\n" << endl;
    cout << "Masukkan angka pertama: "; 
    cin >> input1; 
    
    cout << "Masukkan operator: "; 
    cin >> operasi; 
    
    cout << "Masukkan angka kedua: ";
    cin >> input2; 
    
    system("clear"); 
    
    if(operasi == "+") {
        cout << hasil << input1 + input2; 
    } else if(operasi == "-") {
        cout << hasil << input1 - input2; 
    } else if(operasi == "*") {
        cout << hasil << input1 * input2; 
    } else if(operasi == "/") {
        cout << hasil << input1 / input2; 
    } else {
        cout << "Maaf, operator yang anda masukkan tidak sesuai!"; 
        return 0; 
    }
    
    return 0;
}
