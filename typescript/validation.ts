/*class ValidationError extends Error {
    constructor(message: string) {
        super(message); 
        this.name = "ValidationError"; 
    }
}

function validateNumberInput <T extends number>(input1: T, input2:T, input3: T) {
    /**
     * TODO: buat func validateNumberInput yang menerima 3 argumen 
     * if typeof input1 !== "number" throw ValidationError "Argumen pertama harus number"
     * if typeof input2 !== "number" throw ValidationError "Argumen kedua harus number"
     * if typeof input3 !== "number" throw ValidationError
      

    if(typeof input1 !== "number") {
        throw new ValidationError("Argumen pertama harus number!")
    } 

    if(typeof input2 !== "number") {
        throw new ValidationError("Argumen kedua harus number")
    }

    if(typeof input3 !== "number") {
        throw new ValidationError("Argumen ketiga harus number")
    }
}

console.log(validateNumberInput("dua", 1 ,2))
*/

class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateNumberInput<T extends number>(
  input1: T,
  input2: T,
  input3: T
) {
  /**
   * TODO: buat func validateNumberInput yang menerima 3 argumen
   * if typeof input1 !== "number" throw ValidationError "Argumen pertama harus number"
   * if typeof input2 !== "number" throw ValidationError "Argumen kedua harus number"
   * if typeof input3 !== "number" throw ValidationError "Argumen ketiga harus number"
   */

  if (typeof input1 !== "number") {
    throw new ValidationError("Argumen pertama harus bernilai number");
  }

  if (typeof input2 !== "number") {
    throw new ValidationError("Argumen kedua harus bernilai number");
  }

  if (typeof input3 !== "number") {
    throw new ValidationError("Argumen ketiga harus bernilai number");
  }
}

console.log(validateNumberInput(1, 2, "Tiga"));
