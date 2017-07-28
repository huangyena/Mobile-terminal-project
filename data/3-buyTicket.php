<?php 
	$type = $_REQUEST['type'];
	$str = '';
	$showtime=date("YndGis",time()+6*3600);
	$date=date("Y-m-d",time()+6*3600);
	if ($type == 'getMovieList') {//获取电影列表
		$cId = $_REQUEST['cId'];//cid表示影院的cinemaId
		$str = file_get_contents('http://m.mtime.cn/Service/callback.mi/Showtime/ShowtimeMovieAndDateListByCinema.api?cinemaId='.$cId.'&t='.$showtime);
	}elseif ($type == 'getMovieTime') {//获取指定电影当天播放时间及第二天播放时间
		$cId = $_REQUEST['cId'];//cid表示影院的cinemaId
		$mId = $_REQUEST['mId'];//电影的movieID
		$str = file_get_contents('http://m.mtime.cn/Service/callback.mi/showtime/ShowTimesByCinemaMovieDate.api?cinemaId='.$cId.'&movieId='.$mId.'&date='.$date.'&t='.$showtime);
	}
	elseif ($type == "getMovieDetail") {//电影详情
		$mid = $_REQUEST['mid'];
		$str = file_get_contents('http://m.mtime.cn/Service/callback.mi/movie/Detail.api?movieId='.$mid.'&locationId=290&t='.$showtime);
	}elseif ($type == "HotLongComments") {//精选影评
		$mid = $_REQUEST['mid'];
		$str = file_get_contents('http://m.mtime.cn/Service/callback.mi/Movie/HotLongComments.api?movieId='.$mid.'&pageIndex=1&t='.$showtime);
	}elseif ($type == 'MovieComments') {//网友短评
		$mid = $_REQUEST['mid'];
		$str = file_get_contents('http://m.mtime.cn/Service/callback.mi/Showtime/MovieComments.api?movieId='.$mid.'&pageIndex=1&t='.$showtime);
	}elseif ($type == 'MovieShowtimeDates') {//查影讯/购票
		$mid = $_REQUEST['mid'];
		$str = file_get_contents('http://m.mtime.cn/Service/callback.mi/Showtime/LocationMovieShowtimeDates.api?movieId='.$mId.'&locationId=290&t='.$showtime);
	}elseif ($type = 'LocationMovieShowtimes') {//根据时间获取影院列表
		$mid = $_REQUEST['mid'];
		$d=$_REQUEST['date'];//时间
		$str = file_get_contents('http://m.mtime.cn/Service/callback.mi/Showtime/LocationMovieShowtimeDates.api?movieId='.$mId.'&locationId=290&t='.$showtime.'&date='.$d);
	}
	echo "$str";
?>