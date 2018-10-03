<?php
if($_POST["user_name"]=="humworks" && $_POST["user_password"]=="demo123") {
    header('Location: ' . $uri . '/humworks/view/sib/index.php');
}else if($_POST["user_name"]=="joe@mrcb-gk.com.my" && $_POST["user_password"]=="demo123"){
    header('Location: ' . $uri . '/humworks/view/sit/index.php');
}else{
    header('Location: ' . $uri . '/humworks/view/login.php?login=tdDgsj90GHSg$jkn');
}
?>