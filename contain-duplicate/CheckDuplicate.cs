using System;
using System.Collections.Generic;
using System.Linq;

/// <summary>
/// Checks if an array of numbers contains any duplicate 
/// </summary>
/// <param name="numbers">The array of numbers to check.</param>
/// <returns> True if duplicates exist, else false </returns>
bool HasDuplicate(int[] numbers)
{
    HashSet<int> seen = new();
    foreach (int num in numbers)
    {
        if (seen.Contains(num))
            return true;
        seen.Add(num);
    }
    return false;
}

Console.Write("Enter numbers separated by commas: ");
string input = Console.ReadLine() ?? "";

int[] numbers = input.Split(',').Select(s => int.Parse(s.Trim())).ToArray();
Console.WriteLine(HasDuplicate(numbers) ? "true" : "false");
