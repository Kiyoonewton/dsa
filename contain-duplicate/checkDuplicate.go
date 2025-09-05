package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func hasDuplicate(numbers []int) bool {
	seen := make(map[int]bool)
	for _, num := range numbers {
		if seen[num] {
			return true
		}
		seen[num] = true
	}
	return false
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	fmt.Print("Enter numbers separated by commas: ")
	input, _ := reader.ReadString('\n')
	input = strings.TrimSpace(input)

	parts := strings.Split(input, ",")
	numbers := make([]int, len(parts))

	for i, part := range parts {
		num, err := strconv.Atoi(strings.TrimSpace(part))
		if err != nil {
			fmt.Println("Invalid input, please enter only numbers separated by commas.")
			return
		}
		numbers[i] = num
	}

	if hasDuplicate(numbers) {
		fmt.Println("true")
	} else {
		fmt.Println("false")
	}
}
