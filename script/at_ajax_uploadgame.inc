<?php

$data = $_REQUEST['imageData'];
$data = base64_decode($data);
$path="upload/image3.png";
$im = imagecreatefromstring($data);
if ($im !== false) {
   // header('Content-Type: image/png');
    imagepng($im,$path);
    //echo "<img src='$path'/>";
    imagedestroy($im);
}
else {
    //echo 'An error occurred.';
}

echo $_REQUEST['imgupload'] . '(' . json_encode(array('comment'=>'I changed your comment')) . ');';

?>