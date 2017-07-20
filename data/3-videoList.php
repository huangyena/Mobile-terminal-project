<?php  
	$showtime=date("YndGis",time()+6*3600);
	$date=date("Y-m-d",time()+6*3600);
	$pageIndex = $_REQUEST['pageIndex'];
	$movieId = $_REQUEST['movieId'];
	$str = file_get_contents('http://m.mtime.cn/Service/callback.mi/Movie/Video.api?movieId='.$movieId.'&pageIndex='.$pageIndex.'&t='.$showtime)
?>