$(document).scroll(function(){
	var top = $(window).scrollTop();
	var top1 = $("#top");
	if (top > 500) {
		top1.css("display","block");
	} else {
		top1.css("display","none");
	}
});
var goodsId = location.href.split("=")[1];
$.ajax({
	url:"../data/Mall_search_data.php",
	data:"type=goodsReviews&goodID="+goodsId,
	success:function (data) {
		var obj = JSON.parse(data);
		console.log(data);
		console.log(obj);
		var objArr = obj.list;
		console.log(objArr);
		var ul = $("#User_evaluation_ul");
		for (var i = 0; i < objArr.length; i++) {
			var User_evaluation_li = $("<li class='User_evaluation_li'></li>");
			var User_evaluation_li_box = $("<<div class='User_evaluation_li_box'></div>");
			var User_li_Head_portrait = $("<div class='User_li_Head_portrait'></div>");
			var img1 = $('<img src="" alt="" />');
			img1.attr("src",objArr[i].headPic);
			User_li_Head_portrait.append(img1);
			var User_li_main = $("<div class='User_li_main'></div>");
			var li_main_title = $("<div class='li_main_title'></div>");
			var User_name = $("<div class='User_name'></div>");
			User_name.html(objArr[i].nickName);
			var Review_date = $("<div class='Review_date'></div>");
			var time = objArr[i].orderDate;
			function getLocalTime(nS) {     
   				return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');     
			}
			Review_date.html(getLocalTime(time));
			li_main_title.append(User_name);
			li_main_title.append(Review_date.text().slice(0,9));
			User_li_main.append(li_main_title);
			var Review_star = $("<div class='Review_star'></div>");
			var starLength = objArr[i].stars;
			// var havePic = objArr.imageUrls.length;
			if (starLength == 1) {
				Review_star.append($("<img src='../images/4star_red.png' />"));
				Review_star.append($("<img src='../images/4star_grey.png' />"));
				Review_star.append($("<img src='../images/4star_grey.png' />"));
				Review_star.append($("<img src='../images/4star_grey.png' />"));
				Review_star.append($("<img src='../images/4star_grey.png' />"));
				// console.log(starLength);
			} else if (starLength == 3) {
				Review_star.append($("<img src='../images/4star_red.png' />"));
				Review_star.append($("<img src='../images/4star_red.png' />"));
				Review_star.append($("<img src='../images/4star_red.png' />"));
				Review_star.append($("<img src='../images/4star_grey.png' />"));
				Review_star.append($("<img src='../images/4star_grey.png' />"));
			} else if (starLength == 4) {
				Review_star.append($("<img src='../images/4star_red.png' />"));
				Review_star.append($("<img src='../images/4star_red.png' />"));
				Review_star.append($("<img src='../images/4star_red.png' />"));
				Review_star.append($("<img src='../images/4star_red.png' />"));
				Review_star.append($("<img src='../images/4star_grey.png' />"));
			} else if (starLength == 5) {
				Review_star.append($("<img src='../images/4star_red.png' />"));
				Review_star.append($("<img src='../images/4star_red.png' />"));
				Review_star.append($("<img src='../images/4star_red.png' />"));
				Review_star.append($("<img src='../images/4star_red.png' />"));
				Review_star.append($("<img src='../images/4star_red.png' />"));
			}
			var Review_main = $("<div class='Review_main'></div>");
			Review_main.html(objArr[i].content);
			var showPic = $("<div class='showPic'></div>");
			var img2 = $("<img/>");
			var havePic = objArr[i].imageUrls.length;
			console.log(havePic);
			if (havePic > 0) {
				img2.attr("src",objArr[i].imageUrls[0]);
			}
			showPic.append(img2);
			User_li_main.append(li_main_title);
			User_li_main.append(Review_star);
			User_li_main.append(Review_main);
			User_li_main.append(showPic);
			User_evaluation_li_box.append(User_li_Head_portrait);
			User_evaluation_li_box.append(User_li_main);
			User_evaluation_li.append(User_evaluation_li_box);
			ul.append(User_evaluation_li);
		}
	}
})