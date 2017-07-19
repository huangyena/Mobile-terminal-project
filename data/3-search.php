<?php 
	//传入keyword（搜索的关键字）
	$keyword = $_REQUEST['keyword'];
	$data = array ("keyword"=>$keyword,"locationId"=>"290");
	$data = http_build_query($data);
	$opts = array (
		'http' => array (
		'method' => 'POST',
		'header'=> "Content-type: application/x-www-form-urlencodedrn”".
		"Content-Length: " . strlen($data) . "rn",
		'content' => $data
		)
	);

	@$context = stream_context_create($opts);
	$html = file_get_contents('http://m.mtime.cn/Service/callback.mi/Search/SearchSuggestionNew.api', false, $context);
	echo "$html";
 ?>