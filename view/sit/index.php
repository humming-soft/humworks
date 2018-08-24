<?php
	if (!empty($_SERVER['HTTPS']) && ('on' == $_SERVER['HTTPS'])) {
		$uri = 'https://';
	} else {
		$uri = 'http://';
	}
	$uri .= $_SERVER['HTTP_HOST'];
	// header('Location: '.$uri.'./view/dashboard.php');
	
	header('Location: '.$uri.'/humworks/view/sit/dashboard.php');
	exit;
?>
Something is wrong with the XAMPP installation :-(
