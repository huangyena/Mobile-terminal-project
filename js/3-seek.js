$.ajax({
	url:"../data/search.php?keyword=keyword",
	success:function(a){
		var obj = JSON.parse(a);
		console.log(obj);
	}
})
	