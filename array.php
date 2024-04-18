if have data  not a rray 1,2,3,2-- Convert
your data varible store then  explode 
array $processIdArray = explode(",", $data);

2 if strore multiple array data single array 

$a = ['aa' => '1', '2'];
$b = ['sa' => '13', '4'];
$c = ['5', '6'];
$d = ['7', '8'];

$combinedArray = [$a, $b, $c, $d];

print_r($combinedArray);
 but if want access not good way
data formated
Array
(
    [0] => Array
        (
            [aa] => 1
            [0] => 2
        )

    [1] => Array
        (
            [sa] => 13
            [0] => 4
        )

    [2] => Array
        (
            [0] => 5
            [1] => 6
        )

    [3] => Array
        (
            [0] => 7
            [1] => 8
        )
)
better way $a = ['aa' => '1', 'ss' => '2'];
$b = ['sa' => '13', 'sds' => '4'];
$c = ['sadsa' => '5', 'ssd' => '6'];
$d = ['sdsa' => '7', 'dsd' => '8'];

// Merge all arrays into a single array
$combinedArray = [];
foreach ([$a, $b, $c, $d] as $array) {
    $combinedArray = array_merge($combinedArray, $array);
}

// Loop through the combined array
foreach ($combinedArray as $key => $value) {
    echo "$key => $value\n";
}
