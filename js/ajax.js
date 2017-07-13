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
		for (var i = 0; i < arr.newsList.length/2; i++) {
			var imgLi = $("<img class = 'pictureLi'>");
			imgLi.attr("src",arr.newsList[i].image);
			// console.log(imgLi);
			var add = $("#add");
			var borderBottom = $("<div class = 'borderBottom'></div>")
			var fontLi = $("<div class = 'span' > </div> ");
			fontLi.html(arr.newsList[i].title);
			// console.log(fontLi);
			var href =　$("<a href='#' class = 'href'></a> ");
			href.append(imgLi);
			href.append(fontLi);
			href.append(borderBottom);
			// console.log(href);
			add.append(href);
				var time = new Date();
				// console.log(time);
				var year = time.getFullYear();
				var month = time.getMonth();
				var date = time.getDate();
				var times = year+"-"+month+"-"+date;
				// console.log(year+"-"+month+"-"+date);
				var time1 = $("<span class = 'time'>评论</span>");
				time1.html(times);
				// console.log(div);
				borderBottom.before(time1);
				var review = $("<div class = 'review'>评论&nbsp;10</div>");
				time1.after(review);
			// });
		}
		for (var i = 10; i <(arr.newsList.length/2)+10; i++) {
			var imgLi = $("<img class = 'pictureLi'>");
			imgLi.attr("src",arr.newsList[i].image);
			// console.log(imgLi);
			var add1 = $("#add1");
			var borderBottom = $("<div class = 'borderBottom'></div>")
			var fontLi = $("<div class = 'span' > </div> ");
			fontLi.html(arr.newsList[i].title);
			// console.log(fontLi);
			var href =　$("<a href='#' class = 'href'></a> ");
			href.append(imgLi);
			href.append(fontLi);
			href.append(borderBottom);
			// console.log(href);
			add1.append(href);
				var time = new Date();
				// console.log(time);
				var year = time.getFullYear();
				var month = time.getMonth();
				var date = time.getDate();
				var times = year+"-"+month+"-"+date;
				// console.log(year+"-"+month+"-"+date);
				var time1 = $("<span class = 'time'>评论</span>");
				time1.html(times);
				// console.log(div);
				borderBottom.before(time1);
				var review = $("<div class = 'review'>评论&nbsp;10</div>");
				time1.after(review);
			// });
		}
		
	}
	
})
function fun(){
	$(".many").attr("class",'a');
	$("#add1").css("display","block");
	$("#sorry").css("display","block");
}
fun();