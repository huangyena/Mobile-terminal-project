function searchText() {
	var ul = $("#ul");
	ul.empty();
	var searchInput = $(".header_box_search").val();
	console.log(searchInput);
	if (searchInput.length == 0) {
		var footer1= $(".mall_footer");
		return footer1.css("display","block");
		
	} else {
		var footer1= $(".mall_footer");
		footer1.css("display","none");
	}
	$.ajax({
		url:"../data/Mall_search_data.php",
		data:"type=searchPro&keyword=1",
		success:function (data) {
			var obj = JSON.parse(data);
			console.log(data);
			console.log(obj.keywords);
			for (var i = 0; i < obj.keywords.length; i++) {
				var li = $("<li class='search_list'></li>");
				var a = $("<a class='search_url'></a>");
				a.html(obj.keywords[i].keyword);
				a.attr("href",obj.keywords[i].goodsUrl);
				li.prepend(a);
				$("#ul").append(li);
			}
		}
	})
}