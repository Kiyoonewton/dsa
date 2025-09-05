<?php

/**
 * Check if an array of numbers contain any duplicate
 * 
 * @param array $numbers The array of numbers to check
 * @return bool True if a duplicate exist, else false
 */

function checkDuplicate(array $numbers): bool
{
    $seen = [];
    foreach ($numbers as $num) {
        if (in_array($num, $seen, true)) {
            return true;
        }
        $seen[] = $num;
    }
    return false;
}

echo "Enter numbers seperated by commas: ";
$handle = fopen("php://stdin", "r");
$input = trim(fgets($handle));
fclose($handle);

$numbers = array_map("intval",array_map('trim', explode(",",$input)));

if (checkDuplicate($numbers)) {
    echo "true\n";
} else {
    echo "false\n";
}