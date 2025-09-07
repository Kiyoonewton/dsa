def has_duplicate(numbers: list[int])->bool:
    """
    Checks if an array of numbers contains duplicate
    
    Args:
        numbers (list[int]): The list of numbers to check;
        
    Returns:
        bool: True if duplicate, else false
    """
    
    seen = set()
    for num in numbers:
        if num in seen:
            return True
        seen.add(num)
    return False

if __name__ == "__main__" :
    user_input = input("Enter numbers seperated by commas: ")
    numbers = [int(num.strip()) for num in user_input.split(",")]
    
    if has_duplicate(numbers):
        print("true")
    else:
        print("false")