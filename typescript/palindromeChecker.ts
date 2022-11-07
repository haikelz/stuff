// pake class
class PalindromeChecker {
  str: string;

  constructor(str: string) {
    this.str = str;
  }

  check() {
    const regex: RegExp = /[A-Za-z1-10]/gi;
    let newStr: string | undefined = this.str
      .split("")
      .reverse()
      .join("")
      .match(regex)
      ?.join("")
      .toLowerCase();
    let strReverse: string | undefined = this.str
      .match(regex)
      ?.join("")
      .toLowerCase();

    if (newStr === strReverse) return true;
    else return false;
  }
}

const palindrome: PalindromeChecker = new PalindromeChecker("Ada-ada");
console.log(palindrome.check());

// jika pake function
function palindromeChecker<T extends string>(str: T) {
  const regex: RegExp = /[A-Za-z1-10]/gi;
  let newStr: string | undefined = str.match(regex)?.join("").toLowerCase();
  let strReverse: string | undefined = str
    .split("")
    .reverse()
    .join("")
    .match(regex)
    ?.join("")
    .toLowerCase();

  if (newStr === strReverse) return true;
  else return false;
}

console.log(palindromeChecker("Ada-ada"));
