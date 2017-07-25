<?php  
	$type = $_REQUEST['type'];
	$str = '';
	$showtime=date("YndGis",time()+6*3600);
	$date=date("Y-m-d",time()+6*3600);
	if ($type == 'news_detail') {//新闻详情
		$newsID = $_REQUEST['newsID'];
		$str = file_get_contents('http://m.mtime.cn/Service/callback.mi/News/Detail.api?newsId='.$newsID.'&t='.$showtime);
	}elseif ($type == "getTop100") {//top100:
		$pageIndex = $_REQUEST['pageIndex'];
		$toplistId = $_REQUEST['toplistId'];//时光toplistId=2065,华语toplistId=2066,全球票房榜北美：toplistId=2015，内地2020，香港2016，台湾2019,日本2017，韩国2018；下方列表传数据中的id字段
		$str = file_get_contents('http://m.mtime.cn/Service/callback.mi/TopList/TopListDetailsByRecommend.api?t='.$showtime.'&pageIndex='.$pageIndex.'&type=1&toplistId='.$toplistId.'&pageSubAreaID='.$toplistId);
	}elseif ($type == 'getReviewDetail') {//影评详情
		$reviewId = $_REQUEST['reviewId'];
		$str = file_get_contents('http://m.mtime.cn/Service/callback.mi/Review/Detail.api?reviewId='.$reviewId.'&t='.$showtime);
	}
	echo $str;

?>