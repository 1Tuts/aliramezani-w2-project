<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
</head>
<body>

<?php
	if ( isset($_POST['fullName']) && isset($_POST['mail']) &&  isset($_POST['msg']) ){
		$name = $_POST['fullName'];
		$mail = $_POST['mail'];
		$msg = $_POST['msg'];
		if( @mail('zohreh_zahedi16@yahoo.com','Name: '.$name. "\n",'' .$msg,"From:".$mail) ){
			echo '<h1 style="text-align:center;">پیغام شما ارسال شد.در اولین فرصت به پیغام شما پاسخ داده خواهد شد.با تشکر از شما!</h1>';
		}else{
			echo '<h1 style="text-align:center;">پیغام شما ارسال نشد! لطفا تمام گزینه های فرم را پر کنید.با تشکراز شما!</h1>';
		}
	}
?>

</body>
</html>