// Soal coding interview 
// fizzbuzz

// Ini sama aja penyelesaiannya ama yang di cpp, cuma ini pake javascript
const fiz = 'fizz';
const buz = 'buzz';
const fizbuz = fiz + buz; 

for (let i = 0; i <= 100; i++) {
  if ((i % 3) == 0 && (i % 5) == 0) {
    console.log(fizbuz);
  }

  else if (i % 3 == 0) {
    console.log(fiz);
  } 

  else if (i % 5 == 0) {
    console.log(buz);
  }

  else {
    console.log(i);
  }
}
