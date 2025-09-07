def checkAnagram(s: str, t:str)->bool :
    """
    Checks if s is an anagram of t;
    
    Args:
        s: list of string to be compared
        t: list of string to be compared
        
    Returns:
        bool: True if anagram, else false
    """
    if len(s) != len(t):
        return False
    
    count={}
    
    for char in s:
        count[char] = count.get(char, 0) + 1
        
    for char in t:
        if char not in count or count[char] == 0 :
            return False
        count[char] -=1
        
    return True

if __name__ == "__main__":
    anagram1 = input("Your first word: ")
    anagram2 = input("Your second word: ")
    s = anagram1.strip()
    t = anagram2.strip()
    
    if checkAnagram(s,t):
        print("true")
    else:
        print("false")