<?php

/**
 * Given two strings s and t, return true if s is an anagram of t, and otherwise return false
 * @param s first array of strings to be compared
 * @param t second array of strings to be compared
 * @return True if the two strings are anagram, else false
 */

function checkAmagram(string $s, string $t):bool {
    if(strlen($s) !== strlen($t)) return false;


    $count = [];

    for ($i = 0; $i < strlen($s); $i++ ){
        $char = $s[$i];
        $count[$char] =isset($counnt[$char]) ? $count[$char] + 1 : 1;
    }

    for ($i = 0; $i < strlen($t); $i++){
        $char = $t[$i];
        if(!isset($count[$char]) || $count[$char] === 0){
            return false;
        }
        $count[$char]--;
    }

    return true;
}

echo "Enter first word: ";
$handle1 = fopen("php://stdin", "r");
$input1 = trim(fgets($handle1));
fclose($handle1);

echo "Enter second word: ";
$handle2 = fopen("php://stdin", "r");
$input2=trim(fgets($handle2));
fclose($handle2);

if(checkAmagram($input1, $input2)){
    echo "true\n";
}else{
    echo "false\n";
}