import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class CheckDuplicates {
    /**
     * Checks if an array of numbers contains duplicates.
     * 
     * @param numbers The array of numbers to check.
     * @return True if a duplicate exists, else false.
     */

     public static boolean hasDuplicate(int[] numbers){
        Set<Integer> seen = new HashSet<>();
        for (int num : numbers){
            if(seen.contains(num)){
                return true;
            }
            seen.add(num);
        }
        return false;
     } 


    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter numbers separated by commas: ");
        String input = scanner.nextLine();
        scanner.close();
        
        String[] parts = input.split(",");
        int[] numbers = new int[parts.length];
        for (int i = 0; i < parts.length; i++){
            numbers[i]=Integer.parseInt(parts[i].trim());
        }

        if(hasDuplicate(numbers)){
            System.out.println("true");
        } else{
            System.out.println("false");
        }
    }
}