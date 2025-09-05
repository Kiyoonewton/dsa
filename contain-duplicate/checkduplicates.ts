import readline from "readline";

/**
 * Checks if an array of numbers contains any duplicates.
 *
 * @param numbers - The array of numbers to check.
 * @returns True if a duplicate exists, otherwise false.
 */

/**
 *  O(n²) brute force
 *
 * @explanation - This method search through the array with one number as the
 * search one after the other and return true whenever
 * @Resolve - not efficient
 *
 */
function checkDuplicatesBruteForce(numbers: number[]): void {
  console.log("\n🔍 O(n²) Brute Force Check:");
  //   let foundDuplicate = false;

  //   numbers.forEach((item: number, index: number): void => {
  //     for (let i = index + 1; i < numbers.length; i++) {
  //       if (numbers[i] === item) {
  //         foundDuplicate = true;
  //       }
  //     }
  //   });

  //   console.log(foundDuplicate ? "true" : "false");

  //   const foundDuplicate = numbers.some((item: number, index: number): boolean => {
  //     for (let i = index + 1; i < numbers.length; i++) {
  //       if (item === numbers[i]) {
  //         return true;
  //       }
  //     }
  //     return false;
  //   });

  //   console.log(foundDuplicate ? "true" : "false");

  //   let foundDuplicate: boolean = false;
  //   for (let i = 0; i < numbers.length; i++) {
  //     for (let j = i + 1; j < numbers.length; j++) {
  //       if (i === j) {
  //         foundDuplicate = true;
  //       }
  //     }
  //   }

  //   console.log(foundDuplicate ? "true" : "false");

  const foundDuplicate = numbers.some((item: number, index: number) => {
    return numbers.slice(index + 1).includes(item);
  });
  console.log(foundDuplicate ? "true" : "false");
}

/**
 * O(n log n) using sorting
 * @explanation - This method sort the numbers and in a case there are duplicate returns
 * true else return false
 * @Resolve - Mid efficient
 */

function checkDuplicatesSorting(numbers: number[]): void {
  const sorted: number[] = numbers.sort((a: number, b: number) => a - b);

  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] === sorted[i + 1]) {
      console.log("true");
      return;
    }
  }

  console.log("false");
}

// O(n) using a Set
function checkDuplicatesSet(numbers: number[]): void {
  const numberSet = new Set();

  for (const element of numbers) {
    if (numberSet.has(element)) {
      console.log("true");
      return;
    }
    numberSet.add(element);
  }
  console.log("false");
}

// Input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Enter an array of numbers (comma separated): ",
  (answer: string) => {
    const numbers: number[] = answer
      .split(",")
      .map((num) => parseInt(num.trim(), 10));

    rl.question(
      "Choose method: 1 = Brute Force, 2 = Sorting, 3 = Set: ",
      (choice: string) => {
        switch (choice) {
          case "1":
            checkDuplicatesBruteForce(numbers);
            break;
          case "2":
            checkDuplicatesSorting(numbers);
            break;
          case "3":
            checkDuplicatesSet(numbers);
            break;
          default:
            console.log("Invalid choice.");
        }

        rl.close();
      }
    );
  }
);
