#include <string>
#include <iostream>
#include <unordered_map>

/**
 * Given two strings s and t, return true if s is an anagram of t, and otherwise return false
 *
 * @param s first array of strings to be compared
 * @param t second array of strings to be compared
 * @return True if the two strings are anagram, else false
 */

std::string cleanString(std::string str)
{
    str.erase(std::remove_if(str.begin(), str.end(), ::isspace), str.end());
    std::transform(str.begin(), str.end(), str.begin(), ::tolower);

    return str;
}

bool checkAnagram(const std::string &s, const std::string &t)
{
    if (s.length() != t.length())
        return false;

    std::unordered_map<char, int> count;
    for (char c : s)
        count[(unsigned char)c]++;

    for (char c : t)
    {
        if (--count[c] < 0)
            return false;
    }

    return true;
}

int main()
{
    std::cout << "Enter the first word: ";
    std::string input1;
    std::getline(std::cin, input1);

    std::cout << "Enter the second word: ";
    std::string input2;
    std::getline(std::cin, input2);

    input1 = cleanString(input1);
    input2 = cleanString(input2);

    if (checkAnagram(input1, input2))
    {
        std::cout << "true" << std::endl;
    }
    else
    {
        std::cout << "false" << std::endl;
    }

    return 0;
}