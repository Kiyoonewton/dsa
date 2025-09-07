import readline from "readline";

/**
 * Given two strings s and t, return true if s is an anagram of t, and otherwise return false
 * @param s first array of strings to be compared
 * @param t second array of strings to be compared
 * @return True if the two strings are anagram, else false
 */

// O(n²) brute force
// function checkAnagram(s: string[], t: string[]): boolean {
//   if (s.length !== t.length) return false;
//   let seen: boolean = false;

//   for (let i = 0; i < s.length; i++) {
//     for (let j = 0; j < t.length; j++) {
//       if (t[i] === s[j]) {
//         seen = true;
//         break;
//       }
//     }
//     if (!seen) return false;
//   }
//   return true;
// }

//O(nlogn) sort
// function checkAnagram(s: string[], t: string[]): boolean {
//   if (s.length !== t.length) return false;
//   const joint_s = s.sort().join("");
//   const joint_t = t.sort().join("");

//   if (joint_s === joint_t) return true;
//   return false;
// }

// O(n) frequency map
function checkAnagram(s: string[], t: string[]): boolean {
  if (s.length !== t.length) return false;

  const count: Record<string, number> = {};
  for (const char of s) {
    count[char] = count[char] || 0 + 1;
  }
  for (const char of t) {
    if (--count[char] < 0) return false;
  }

  return true;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter first word: ", (answer: string) => {
  const anagram1: string[] = answer.split("");

  rl.question("Enter the second word: ", (answer: string) => {
    const anagram2: string[] = answer.split("");
    const compareAnswer: boolean = checkAnagram(anagram1, anagram2);
    if (compareAnswer) {
      console.log("true");
    } else {
      console.log("false");
    }
    rl.close();
  });
});
