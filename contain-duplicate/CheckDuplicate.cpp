#include <unordered_set>
#include <sstream>
#include <iostream>
#include <vector>
#include <string>

/**
 * Checks if an array of numbers contains any duplicates
 *
 * @param numbers - The vector of numbers to check
 * @return True if a duplicate exits, else false
 */

bool hasDuplicate(const std::vector<int> &numbers)
{
    std::unordered_set<int> seen;
    for (int num : numbers)
    {
        if (seen.count(num))
        {
            return true;
        }
        seen.insert(num);
    }
    return false;
}

int main()
{

    std::cout << "Enter numbers seperated by commas: ";
    std::string input;
    std::getline(std::cin, input);

    std::vector<int> numbers;
    std::stringstream ss(input);
    std::string token;

    while (std::getline(ss, token, ','))
    {
        try
        {
            numbers.push_back(std::stoi(token));
        }
        catch (...)
        {
            std::cerr << "Invalid input: " << token << std::endl;
            return 1;
        }
    }

    if (hasDuplicate(numbers))
    {
        std::cout << "true" << std::endl;
    }
    else
    {
        std::cout << "false" << std::endl;
    }
    return 0;
}