<?php 
	header( "Access-Control-Allow-Origin:*" );
	$link = mysqli_connect('127.0.0.1', 'root', '');
	if (mysqli_connect_errno($link)) {
		echo "链接失败".mysqli_connect_errno();
	}
	mysqli_select_db($link,"person");
	$email = $_REQUEST["email"];
	
	$res1 = mysqli_query($link,"select * from userinfo where email='$email'");
	while ($row = mysqli_fetch_array($res1)) {
		echo '{"code":1,"msg":"密码找回成功！","password":"'.$row["pwd"].'"}';			
		return;
	}
	echo '{"code":-1,"msg":"邮箱不存在！"}';
 ?>