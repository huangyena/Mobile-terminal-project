<?php 
	header( "Access-Control-Allow-Origin:*" );
	$link = mysqli_connect('127.0.0.1', 'root', '');
	if (mysqli_connect_errno($link)) {
		echo "链接失败".mysqli_connect_errno();
	}
	mysqli_select_db($link,"person");
	$name = $_REQUEST["name"];
	$pwd = $_REQUEST["password"];
	$res1 = mysqli_query($link,"select * from userinfo where username='$name'");
	while ($row = mysqli_fetch_array($res1)) {
		
		if ($row['pwd'] == $pwd) {
			echo '{"code":1,"msg":"登录成功！","iconUrl":"'.$row["iconurl"].'"}';			
		}else{
			echo '{"code":-1,"msg":"密码错误！"}';
		}	
		return;
	}
	echo '{"code":-1,"msg":"用户名不存在！"}';
 ?>