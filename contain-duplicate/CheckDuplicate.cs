
using System;
using System.Collections.Generic;
using System.Linq;
class CheckDuplicate
{
    /// <summary>
    /// Checks if an array of numbers contains any duplicate 
    /// </summary>
    /// <param name="numbers">The array of numbers to check.</param>
    /// <returns> True if duplicates exit, else false </returns>
    static bool HasDuplicate(int[] numbers)
    {
        HashSet<int> seen = new HashSet<int>();
        foreach (int num in numbers)
        {
            if (seen.Contains(num))
                return true;
            seen.Add(num);
        }
        return false;
    }

    static void Main()
    {
        Console.Write("Enter number separated by commas: ");
        string input = Console.ReadLine() ?? "";

        int[] numbers = input.Split(',').Select(s => int.Parse(s.Trim())).ToArray();
        Console.WriteLine(HasDuplicate(numbers) ? "true" : "false");
    }
}