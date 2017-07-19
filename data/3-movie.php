<?php 
	$type = $_REQUEST['type'];
	$str = '';
	if ($type == 'nowMovie') {//正在热映
		$str = file_get_contents('http://m.mtime.cn/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=201771814552643464');
	}elseif ($type == 'willShow') {//即将上映
		$str = file_get_contents('http://m.mtime.cn/Service/callback.mi/Movie/MovieComingNew.api?locationId=290&t=20177181513235301');
	}
	echo "$str";
 ?>