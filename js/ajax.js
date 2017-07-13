// 获取戛纳图片
$.ajax({
	 url:"../data/data.php?type=discovery",
	// data:"newsList",
	success:function(data){
		var obj = JSON.parse(data);
		console.log(obj);
		console.log(obj.news.imageUrl);
		console.log(obj.news.title);
		var img = $("<img class = 'Cannes'>");
		console.log(img);
		img.attr("src",obj.news.imageUrl);
		var picture = $("#picture");
		picture.prepend(img);
		var fonts =  $("<span class = 'CannesFont'></span>");
		fonts.html(obj.news.title);
		var font = $("#font");
		font.prepend(obj.news.title);
	}
})
// 获取列表
$.ajax({
	url:"../data/data.php?type=newsList",
	success:function(data){
		var arr = JSON.parse(data);
		console.log(arr);
		console.log(arr.newsList[0].image);
		var newsList = arr.newsList;
		for (var i = 0; i < arr.newsList.length-1; i++) {
			var imgLi = $("<img class = 'pictureLi'>");
			imgLi.attr("src",arr.newsList[i].image);
			// console.log(imgLi);
			var add = $("#add");
			var borderBottom = $("<div class = 'borderBottom'></div>")
			var fontLi = $("<div class = 'span' ></div> ");
			fontLi.html(arr.newsList[i].title);
			// console.log(fontLi);
			var href =　$("<a href='#' class = 'href'></a> ");
			href.append(imgLi);
			href.append(fontLi);
			href.append(borderBottom);
			// console.log(href);
			add.append(href);	
		}

		setInterval(function (){
				var time = new Date();
				// console.log(time);
				var hour = time.getHours();
				// console.log(hour);
			})
	}
	
})