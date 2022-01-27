const alphabets = "abcdefghijklmnopqrstuvwxyz";
const alphabetsUpper = alphabets.toUpperCase();
const numbers = "0123456789";
const specialChars = "!@#$%^&*-_/?";

let randomIndexGenerator = (inputString: string): number =>
  Math.ceil(Math.random() * inputString.length - 1);

const generatePassword = (
  length: number = 16,
  special: boolean = true
): string => {
  let res: string = "";

  for (let i: number = 1; i <= length; i++) {
    if (special) {
      if (i % 3 === 0) {
        res = res + specialChars[randomIndexGenerator(specialChars)];
        continue;
      }
    }
    if (i % 4 === 0) {
      res = res + numbers[randomIndexGenerator(numbers)];
      continue;
    }
    if (i % 5 === 0) {
      res = res + alphabetsUpper[randomIndexGenerator(alphabetsUpper)];
      continue;
    }
    res = res + alphabets[randomIndexGenerator(alphabets)];
  }

  return res;
};

export { generatePassword };
