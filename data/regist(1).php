<?php 
	header( "Access-Control-Allow-Origin:*" );
	// header("content-type:text/xml;charset=utf-8");
	$link = mysqli_connect('127.0.0.1', 'root', '');
	if (mysqli_connect_errno($link)) {
		echo "链接失败".mysqli_connect_errno();
	}
	mysqli_query($link,"create database if not exists Person");
	mysqli_select_db($link,"person");
	$res = mysqli_query($link,"create table if not exists userinfo (
														username varchar(15),
														pwd varchar(15),
														email varchar(200),
														age int,
														iconurl varchar(200)
														)");
	if (!$res) {
		echo "有错";
	}else{
		echo "创建完成";
	}

	$name = $_REQUEST["name"];
	$res1 = mysqli_query($link,"select * from userinfo where username='$name'");
	while ($row = mysqli_fetch_array($res1)) {
		echo '{"code":-1,"msg":"用户名已存在！"}';
		return;
	}
	$pwd = $_REQUEST["password"];
	@$email = $_REQUEST["email"];
	if (!$email) {
		$email = '';
	}else{
		$res1 = mysqli_query($link,"select * from userinfo where email='$email'");
		while ($row = mysqli_fetch_array($res1)) {
			echo '{"code":-1,"msg":"该邮箱已被注册！"}';
			return;
		}
	}
	
	@$age = $_REQUEST["age"];
	if (!$age) {
		$age = 0;
	}
	@$array=$_FILES["file"]["type"]; 
	$url = '';
	if ($array) {
	 	$array=explode("/",$array);  
	    $newfilename=$name;//自定义文件名（测试的时候中文名会操作失败）  
	    $_FILES["file"]["name"]=$newfilename.".".$array[1]; 

	   if (!is_dir("upload"))//当路径不穿在  
	    {  
	        mkdir("upload");//创建路径  
	    }  
	    $url="upload/";//记录路径  
	    if (file_exists($url.$_FILES["file"]["name"]))//当文件存在  
	    {  
	        echo $_FILES["file"]["name"] . " already exists. ";  
	    }else//当文件不存在  
	    {  
	        $url=$url.$_FILES["file"]["name"];  
	        move_uploaded_file($_FILES["file"]["tmp_name"],$url);  
	        $url = "http://192.168.1.250/aja/" . $url;  
	    }  

	 } 
    
	$res2 = mysqli_query($link,"insert into userinfo (username,pwd,email,age,iconurl) values ('$name','$pwd','$email',$age,'$url')");
	if (!$res2) {
		echo '{"code":-1,"msg":"注册失败！"}';
	}else{
		echo '{"code":1,"msg":"注册成功！","iconUrl":"'.$url.'"}';
	}

 ?>