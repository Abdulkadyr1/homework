<?php
function outHtml2($arg1, $arg2, $arg3){
    for ($i=0; $i<$arg3; $i++){
        echo "<$arg1>$arg2</$arg1>";
    }
}   