<?php 
	$type = $_REQUEST['type'];
	$str = '';
	$showtime=date("YndGis",time()+6*3600);
	$date=date("Y-m-d",time()+6*3600);
	if ($type == 'searchPro') {//搜索,跟随输入
		$keyword = $_REQUEST['keyword'];
		$data = array ("keyword"=>$keyword,"locationId"=>'290','t'=>$showtime);
		$data = http_build_query($data);
		$opts = array (
			'http' => array (
			'method' => 'POST',
			'header'=> "Content-type: application/x-www-form-urlencoded",
			'content' => $data
			)
		);

		@$context = stream_context_create($opts);
		$str = file_get_contents('http://m.mtime.cn/Service/callback.mi/Search/GoodsSuggestionKeywords.api', false, $context);

	}elseif ($type == 'searchDetail') {//点击搜索按钮
		$keyword = $_REQUEST['keyword'];//导航中的星战，keyword = 星球大战；漫威：keyword=漫威，蝙超：keyword=蝙超，
		$str = file_get_contents('http://m.mtime.cn/Service/callback.mi/ECommerce/SearchGoods.api?keyword='.$keyword.'&pageIndex=1&sf=0&sm=2&topicId=0&movieId=0&roleId=0&categoryId1=0&categoryId2=0&brandId=0&fmin=0&fmax=0&salefid=0&cd=0&t='.$showtime);
	}elseif ($type == 'productList') {//获取模玩、数码...对应的商品列表
		$categoryId = $_REQUEST['categoryId'];//分类id：模玩：25，数码：8，服饰：42，家居：43，全部：0
		$str = file_get_contents('http://m.mtime.cn/Service/callback.mi/ECommerce/SearchGoods.api?keyword=&pageIndex=1&sf=0&sm=2&topicId=0&movieId=0&roleId=0&categoryId1='.$categoryId.'&categoryId2=0&brandId=0&fmin=0&fmax=0&salefid=0&cd=0&t='.$showtime);
	}elseif ($type == 'productList') {//获取玩具模型
		$brandId = $_REQUEST['brandId'];//brandid：玩具模型：246，数码：8，服饰：42，家居：43，全部：0
		$str = file_get_contents('http://m.mtime.cn/Service/callback.mi/ECommerce/SearchGoods.api?keyword=&pageIndex=1&sf=0&sm=2&topicId=0&movieId=0&roleId=0&categoryId1=0&categoryId2=0&brandId='.$brandId.'&fmin=0&fmax=0&salefid=0&cd=0&t='.$showtime);
	}elseif ($type=="productDetail") {//商品详情
		$goodID = $_REQUEST['goodID'];//商品id
		$str = file_get_contents("http://m.mtime.cn/Service/callback-mall.mi/product/detail.api?goodsId=".$goodID."&locationId=290&t=".$showtime);
	}elseif ($type=="productImgs") {//商品详情中的图文
		$goodID = $_REQUEST['goodID'];//商品id
		$str = file_get_contents("http://m.mtime.cn/Service/callback.mi/ECommerce/GoodsImageTextInfo.api?goodsId=".$goodID."&pageIndex=1&t=".$showtime);
	}elseif ($type=="recommend") {//商品详情中推荐的其他商品
		$goodID = $_REQUEST['goodID'];//商品id
		$str = file_get_contents("http://m.mtime.cn/Service/callback.mi/ECommerce/RecommendProducts.api?goodsId=".$goodID."&pageIndex=1&t=".$showtime);
	}elseif ($type == 'goodsReviews') {//评论晒单
		$goodID = $_REQUEST['goodID'];//商品id
		$str = file_get_contents("http://m.mtime.cn/Service/callback.mi/ECommerce/GoodsReviews.api?goodsId=".$goodID."&pageIndex=1&t=".$showtime);
	}
	echo "$str";
 ?>