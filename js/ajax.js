// 发现-新闻
// 获取戛纳图片
$.ajax({
	 url:"../data/data.php?type=discovery",
	// data:"newsList",
	success:function(data){
		var obj = JSON.parse(data);
		console.log(obj);
		//发现-新闻：获取戛纳图片
		// console.log(obj.news.imageUrl);
		// console.log(obj.news.title);
		var img = $("<img class = 'Cannes'>");
		// console.log(img);
		img.attr("src",obj.news.imageUrl);
		var picture = $("#picture");
		picture.prepend(img);
		var font = $("#font");
		font.prepend(obj.news.title);
		//发现-预告片：获取《父子雄兵》未带完续
		// console.log(obj.trailer.title);
		// console.log(obj.trailer.imageUrl);
		// console.log(obj.trailer.mp4Url);
		// console.log(obj.trailer.hightUrl);
		var imgs = $("<img class = 'Cannes'>");
		// console.log(img);
		imgs.attr("src",obj.trailer.imageUrl);
		var pictures = $("#pictures");
		pictures.attr("href",obj.trailer.mp4Url);
		pictures.prepend(imgs);
		var fonta = $("#fonts");
		fonta.prepend(obj.trailer.title);


		//发现-排行榜：那些荣获奥斯卡的LGBT电影
		// console.log(obj.topList.imageUrl);
		// console.log(obj.topList.title);
		var imges = $("<img class = 'Cannes'>");
		// console.log(img);
		imges.attr("src",obj.topList.imageUrl);
		var picturees = $("#picturees");
		picturees.prepend(imges);
		$("#fontes").html(obj.topList.title);

		//获取恶魔城图片
		 console.log(obj.review.title);
		 console.log(obj.review.posterUrl);
		 var imgset = $("<img id = 'Cannesest'>");
		 imgset.attr("src",obj.review.posterUrl);
		 $("#pictureest").append(imgset);
		 $("#fontest").append(obj.review.title);
	
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
			var borderBottom = $("<div class = 'borderBottom'></div>");
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
				var time1 = $("<span class = 'time'></span>");
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



// 发现-预告片
//发现-排行榜
$.ajax({
	url:"../data/data.php?type=topList",
	success:function(data){
		// console.log(data);
		var top = JSON.parse(data);
		console.log(top);
		console.log(top.topLists[0].topListNameCn);
		console.log(top.topLists[0].summary);
		for(var j = 0;j<top.topLists.length/2;j++){
			var borderTop = $("<div class = 'borderTop'></div>")
			var movie = $("#movie");
			var top_a = $("<a ></a>");
			var top_ten = $("<span class = 'top_ten'></span>");
			top_ten.html(top.topLists[j].topListNameCn);
			var top_one =  $("<span class = 'top_one'></span>");
			top_one.html(top.topLists[j].summary);
			var dian = $("<span class = 'circle'>...</span>");
			var topFont = $("<span class = 'topFont'></span>")
			top_a.append(borderTop);
			top_a.append(top_ten);
			top_a.append(dian);
			var length = top_one.text().length
			// console.log(length);
			var a = top_one.text().split("，",1);
			// console.log(a);
			// console.log(a[0]);
			topFont.html(a[0])
			top_ten.after(topFont);
			movie.append(top_a);
		}
		for(var k = 10;k<(top.topLists.length/2)+10;k++){
			var borderTop1 = $("<div class = 'borderTop'></div>")
			var movie1 = $("#movie1");
			var top_a1 = $("<a ></a>");
			var top_ten1 = $("<span class = 'top_ten'></span>");
			top_ten1.html(top.topLists[k].topListNameCn);
			var top_one1 =  $("<span class = 'top_one'></span>");
			top_one1.html(top.topLists[k].summary);
			var dian1 = $("<span class = 'circle'>...</span>");
			var topFont1 = $("<span class = 'topFont'></span>")
			top_a1.append(borderTop1);
			top_a1.append(top_ten1);
			top_a1.append(dian1);
			var length1 = top_one1.text().length
			// console.log(length);
			var a1 = top_one1.text().split("，",1);
			// console.log(a);
			// console.log(a[0]);
			topFont1.html(a1[0])
			top_ten1.after(topFont1);
			movie1.append(top_a1);
		}
	}
})
function fun1(){
	$(".many1").attr("class","show");
	$("#movie1").css("display","block");
	$("#sorry1").css("display","block");
}

// 获取发现-影评
$.ajax({
	url:"../data/data.php?type=review",
	success:function(data){
		// console.log(data);
		var evaluate = JSON.parse(data);
		// console.log(evaluate);
		console.log(evaluate[0].relatedObj.title);
		for(var e = 0;e<evaluate.length;e++){
			// console.log(evaluate[e].title);
			var evaluate_font = $("<div class = 'evaluate_font'></div>")
			evaluate_font.html(evaluate[e].title);
			var borderBottom1 = $("<div class = 'borderBottom'></div>");
			var evaluate_a = $("<a  class ='evaluate_a'></a>");
			var evaluate_img = $("<img class = 'evaluate_img' />");
			evaluate_img.attr("src",evaluate[e].userImage);

			var bracket = $("<span class = 'bracket'></span>");
			bracket.html(evaluate[e].relatedObj.title);

			var nickname = $("<span class = 'nick'></span>");
			var grade = $("<span class = 'grade'>-评分</span>");
			nickname.html(evaluate[e].nickname);
			evaluate_a.append(evaluate_font);
			evaluate_a.append(evaluate_img);
			evaluate_img.after(nickname);
			nickname.after(grade);
			grade.after(bracket);
			$("#eadd").append(evaluate_a);
			$("#eadd").append(borderBottom1);
		}
	}
})