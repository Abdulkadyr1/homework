<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        include "output.php";
        include "output-cycle.php";
        include "counter-even.php";

        outHtml("div", "Hello");
        outHtml("div", "world");
        outHtml2("div", "abv", 5);
        
    ?>
</body>
</html>