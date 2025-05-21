<?php
$arr = [1, 4, 8, 2, 124, 9, 88];

for ($i = 0; $i < count($arr); $i++){
    if ($arr[$i] % 2 == 0){
        echo $arr[$i] . " ";
    }
}