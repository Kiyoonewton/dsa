import java.util.HashMap;
import java.util.Scanner;

public class Anagram {
    /**
     * Given two strings s and t, return true if s is an anagram of t, and otherwise return false
     * 
     * @param s first array of strings to be compared
     * @param t second array of strings to be compared
     * @return True if the two strings are anagram, else false
     */

    public static boolean checkAnagram(String s, String t) {
        if (s.length() != t.length())
            return false;

        HashMap<Character, Integer> count = new HashMap<>();

        for (char c : s.toCharArray()) {
            count.put(c, count.getOrDefault(c, 0) + 1);
        }

        for (char c : t.toCharArray()) {
            if (!count.containsKey(c)) {
                return false;
            }
            count.put(c, count.getOrDefault(c, 0) + 1);
            if (count.get(c) < 0) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the first word: ");
        String input1 = scanner.nextLine();

        System.out.print("Enter the Second word: ");
        String input2 = scanner.nextLine();
        scanner.close();

        String anagram1 = input1.trim().toLowerCase();
        String anagram2 = input2.trim().toLowerCase();

        if (checkAnagram(anagram1, anagram2)) {
            System.out.println("true");
        } else {
            System.out.println("false");
        }
    }
}
