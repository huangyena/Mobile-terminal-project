// var top = $("#top");
// console.log(top);
$(document).scroll(function(){
	var top = $(window).scrollTop();
	var top1 = $("#top");
	if (top > 500) {
		top1.css("display","block");
	} else {
		top1.css("display","none");
	}
});

function swiper() {
	var mySwiper = new Swiper ('.mall_banner',{
		pagination : '.swiper-pagination',//是否显示小点点
		grabCursor : true,//是否有光标手势
		autoplay : 2000,//是否自动播放
		loop : true,//是否最后一张返回第一张
		autoplayDisableOnInteraction : false
		//用户操作swiper之后，是否禁止autoplay(自动播放)。默认为true：停止。
		//如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
	})
}

// 轮播图
$.ajax({
	url:"../data/data.php?type=mall",
	success:function (data) {
		// console.log(data);
		var obj = JSON.parse(data);
		// console.log(obj);
		
		var objArr = obj.scrollImg;
		console.log(objArr);
		var ul = $('#image_box');
		// var li = $('<li></li>');
		// var a = $('<a></a>');
		// var img = $('<img>');
		for (var i = 0; i < objArr.length; i++) {
			// 	var ul = $('#image_box');
			var li = $('<li></li>');
			var a = $('<a></a>');
			var img = $('<img>');
			li.attr('class','swiper-slide');
			img.attr('src',objArr[i].image);
			a.attr('href',objArr[i].url);
			a.prepend(img);
			li.prepend(a);
			ul.append(li);
		}
		swiper()
	}
})

//导航
$.ajax({
	url:"../data/data.php?type=mall",
	success:function (data) {
		var obj = JSON.parse(data);
		var objArr = obj.navigatorIcon;
		console.log(objArr);
		var ul = $("#mall_nav_box");
		for (var i = 0; i < objArr.length; i++) {
			var li = $('<li></li>');
			var a = $('<a></a>');
			var img = $('<img>');
			var p = $('<p></p>');
			a.attr('href',objArr[i].url);
			img.attr('src',objArr[i].image);
			p.html(objArr[i].iconTitle) ;
			console.log(p);
			a.append(img);
			a.append(p);
			console.log(a);
			li.append(a);
			ul.append(li);
		}
	}
})

//box1
$.ajax({
	url:"../data/data.php?type=mall",
	success:function (data) {
		var obj = JSON.parse(data);
		var objLeft = obj.cellA;
		var objRight = obj.cellC;
		var objDown = obj.cellB;
		var div = $("#mall_box1");
		var a1 = $("<a class='w_50 f_left b_right b_bottom'></a>");
		var a2 = $("<a class='w_50 f_right b_bottom'></a>");
		var a3 = $("<a class='w_50 f_right b_bottom'></a>");
		var a4 = $("<a class='w_100 f_right'></a>");
		var img1 = $("<img>");
		var img2 = $("<img>");
		var img3 = $("<img>");
		var img4 = $("<img>");
		a1.attr("href",objLeft.url);
		a2.attr("href",objRight.list[0].url);
		a3.attr("href",objRight.list[1].url);
		a4.attr("href",objDown.url);
		img1.attr("src",objLeft.img);
		img2.attr("src",objRight.list[0].image);
		img3.attr("src",objRight.list[1].image);
		img4.attr("src",objDown.img);
		a1.prepend(img1);
		a2.prepend(img2);
		a3.prepend(img3);
		a4.prepend(img4);
		div.append(a1);
		div.append(a2);
		div.append(a3);
		div.append(a4);
	}
})

//box5S


//box2
$.ajax({
	url:"../data/data.php?type=mall",
	success:function (data) {
		var obj = JSON.parse(data);
		var objPic1 = obj.category[0];
		var objPic2 = obj.category[0].subList[0];
		var objPic3 = obj.category[0].subList[1];
		var objPic4 = obj.category[0].subList[2];
		var div1 = $("#mall_box2_title");
		var div1_1 = $("<div class='box2_title_left'></div>");
		var div1_2 = $("<div class='box2_title_right'></div>");
		var div1_2_a = $("<a>更多</a>")
		div1_1.html(objPic1.name);
		console.log(objPic1.name);
		div1_2_a.attr("src",objPic1.moreUrl);
		div1_2.prepend(div1_2_a);
		div1.append(div1_1);
		div1.append(div1_2);
		var div2 = $("#box2_main_top");
		var div2_a = $("<a></a>");
		var div2_img = $("<img>");
		div2_a.attr("href",objPic1.imageUrl);
		div2_img.attr("src",objPic1.image);
		div2_a.prepend(div2_img);
		div2.prepend(div2_a);
		var div3 = $("#box2_main_down");
		var ul = $("<ul></ul>");
		var li1 = $("<li></li>");
		var li1_a = $("<a></a>");
		var li1_img = $("<img>");
		var li1_p = $("<p></p>");
		var li1_div = $("<div>￥1480</div>");
		li1_img.attr("src",objPic2.image);
		var textlength =  objPic2.title.length;
		if (textlength > 7) {
			objPic2.title = objPic2.title.slice(0,7)+"...";
		}
		li1_p.html(objPic2.title);
		li1_a.prepend(li1_img);
		li1.append(li1_a);
		li1.append(li1_p);
		li1.append(li1_div);
		var li2 = $("<li></li>");
		var li2_a = $("<a></a>");
		var li2_img = $("<img>");
		var li2_p = $("<p></p>");
		var li2_div = $("<div>￥168</div>");
		li2_img.attr("src",objPic3.image);
		var textlength =  objPic3.title.length;
		if (textlength > 7) {
			objPic3.title = objPic3.title.slice(0,7)+"...";
		}
		li2_p.html(objPic3.title);
		li2_a.prepend(li2_img);
		li2.append(li2_a);
		li2.append(li2_p);
		li2.append(li2_div);
		var li3 = $("<li></li>");
		var li3_a = $("<a></a>");
		var li3_img = $("<img>");
		var li3_p = $("<p></p>");
		var li3_div = $("<div>￥1580</div>");
		li3_img.attr("src",objPic4.image);
		var textlength =  objPic4.title.length;
		if (textlength > 7) {
			objPic4.title = objPic4.title.slice(0,7)+"...";
		}
		li3_p.html(objPic4.title);
		li3_a.prepend(li3_img);
		li3.append(li3_a);
		li3.append(li3_p);
		li3.append(li3_div);
		ul.append(li1);
		ul.append(li2);
		ul.append(li3);
		div3.prepend(ul);
	}
})

//box3
$.ajax({
	url:"../data/data.php?type=mall",
	success:function (data) {
		var obj = JSON.parse(data);
		var objPic1 = obj.category[1];
		var objPic2 = obj.category[1].subList[0];
		var objPic3 = obj.category[1].subList[1];
		var objPic4 = obj.category[1].subList[2];
		var div1 = $("#mall_box3_title");
		var div1_1 = $("<div class='box3_title_left'></div>");
		var div1_2 = $("<div class='box3_title_right'></div>");
		var div1_2_a = $("<a>更多</a>")
		div1_1.html(objPic1.name);
		console.log(objPic1.name);
		div1_2_a.attr("src",objPic1.moreUrl);
		div1_2.prepend(div1_2_a);
		div1.append(div1_1);
		div1.append(div1_2);
		var div2 = $("#box3_main_top");
		var div2_a = $("<a></a>");
		var div2_img = $("<img>");
		div2_a.attr("href",objPic1.imageUrl);
		div2_img.attr("src",objPic1.image);
		div2_a.prepend(div2_img);
		div2.prepend(div2_a);
		var div3 = $("#box3_main_down");
		var ul = $("<ul></ul>");
		var li1 = $("<li></li>");
		var li1_a = $("<a></a>");
		var li1_img = $("<img>");
		var li1_p = $("<p></p>");
		var li1_div = $("<div>￥149</div>");
		li1_img.attr("src",objPic2.image);
		var textlength =  objPic2.title.length;
		if (textlength > 7) {
			objPic2.title = objPic2.title.slice(0,7)+"...";
		}
		li1_p.html(objPic2.title);
		li1_a.prepend(li1_img);
		li1.append(li1_a);
		li1.append(li1_p);
		li1.append(li1_div);
		var li2 = $("<li></li>");
		var li2_a = $("<a></a>");
		var li2_img = $("<img>");
		var li2_p = $("<p></p>");
		var li2_div = $("<div>￥49</div>");
		li2_img.attr("src",objPic3.image);
		var textlength =  objPic3.title.length;
		if (textlength > 7) {
			objPic3.title = objPic3.title.slice(0,7)+"...";
		}
		li2_p.html(objPic3.title);
		li2_a.prepend(li2_img);
		li2.append(li2_a);
		li2.append(li2_p);
		li2.append(li2_div);
		var li3 = $("<li></li>");
		var li3_a = $("<a></a>");
		var li3_img = $("<img>");
		var li3_p = $("<p></p>");
		var li3_div = $("<div>￥59</div>");
		li3_img.attr("src",objPic4.image);
		var textlength =  objPic4.title.length;
		if (textlength > 7) {
			objPic4.title = objPic4.title.slice(0,7)+"...";
		}
		li3_p.html(objPic4.title);
		li3_a.prepend(li3_img);
		li3.append(li3_a);
		li3.append(li3_p);
		li3.append(li3_div);
		ul.append(li1);
		ul.append(li2);
		ul.append(li3);
		div3.prepend(ul);
	}
})

//box3
$.ajax({
	url:"../data/data.php?type=mall",
	success:function (data) {
		var obj = JSON.parse(data);
		var objPic1 = obj.category[2];
		var objPic2 = obj.category[2].subList[0];
		var objPic3 = obj.category[2].subList[1];
		var objPic4 = obj.category[2].subList[2];
		var div1 = $("#mall_box4_title");
		var div1_1 = $("<div class='box4_title_left'></div>");
		var div1_2 = $("<div class='box4_title_right'></div>");
		var div1_2_a = $("<a>更多</a>")
		div1_1.html(objPic1.name);
		console.log(objPic1.name);
		div1_2_a.attr("src",objPic1.moreUrl);
		div1_2.prepend(div1_2_a);
		div1.append(div1_1);
		div1.append(div1_2);
		var div2 = $("#box4_main_top");
		var div2_a = $("<a></a>");
		var div2_img = $("<img>");
		div2_a.attr("href",objPic1.imageUrl);
		div2_img.attr("src",objPic1.image);
		div2_a.prepend(div2_img);
		div2.prepend(div2_a);
		var div3 = $("#box4_main_down");
		var ul = $("<ul></ul>");
		var li1 = $("<li></li>");
		var li1_a = $("<a></a>");
		var li1_img = $("<img>");
		var li1_p = $("<p></p>");
		var li1_div = $("<div>￥399</div>");
		li1_img.attr("src",objPic2.image);
		var textlength =  objPic2.title.length;
		if (textlength > 7) {
			objPic2.title = objPic2.title.slice(0,7)+"...";
		}
		li1_p.html(objPic2.title);
		li1_a.prepend(li1_img);
		li1.append(li1_a);
		li1.append(li1_p);
		li1.append(li1_div);
		var li2 = $("<li></li>");
		var li2_a = $("<a></a>");
		var li2_img = $("<img>");
		var li2_p = $("<p></p>");
		var li2_div = $("<div>￥1111</div>");
		li2_img.attr("src",objPic3.image);
		var textlength =  objPic3.title.length;
		if (textlength > 7) {
			objPic3.title = objPic3.title.slice(0,7)+"...";
		}
		li2_p.html(objPic3.title);
		li2_a.prepend(li2_img);
		li2.append(li2_a);
		li2.append(li2_p);
		li2.append(li2_div);
		var li3 = $("<li></li>");
		var li3_a = $("<a></a>");
		var li3_img = $("<img>");
		var li3_p = $("<p></p>");
		var li3_div = $("<div>￥80</div>");
		li3_img.attr("src",objPic4.image);
		var textlength =  objPic4.title.length;
		if (textlength > 7) {
			objPic4.title = objPic4.title.slice(0,7)+"...";
		}
		li3_p.html(objPic4.title);
		li3_a.prepend(li3_img);
		li3.append(li3_a);
		li3.append(li3_p);
		li3.append(li3_div);
		ul.append(li1);
		ul.append(li2);
		ul.append(li3);
		div3.prepend(ul);
	}
})

//box3
$.ajax({
	url:"../data/data.php?type=mall",
	success:function (data) {
		var obj = JSON.parse(data);
		var objPic1 = obj.category[3];
		var objPic2 = obj.category[3].subList[0];
		var objPic3 = obj.category[3].subList[1];
		var objPic4 = obj.category[3].subList[2];
		var div1 = $("#mall_box5_title");
		var div1_1 = $("<div class='box5_title_left'></div>");
		var div1_2 = $("<div class='box5_title_right'></div>");
		var div1_2_a = $("<a>更多</a>")
		div1_1.html(objPic1.name);
		console.log(objPic1.name);
		div1_2_a.attr("src",objPic1.moreUrl);
		div1_2.prepend(div1_2_a);
		div1.append(div1_1);
		div1.append(div1_2);
		var div2 = $("#box5_main_top");
		var div2_a = $("<a></a>");
		var div2_img = $("<img>");
		div2_a.attr("href",objPic1.imageUrl);
		div2_img.attr("src",objPic1.image);
		div2_a.prepend(div2_img);
		div2.prepend(div2_a);
		var div3 = $("#box5_main_down");
		var ul = $("<ul></ul>");
		var li1 = $("<li></li>");
		var li1_a = $("<a></a>");
		var li1_img = $("<img>");
		var li1_p = $("<p></p>");
		var li1_div = $("<div>￥72</div>");
		li1_img.attr("src",objPic2.image);
		var textlength =  objPic2.title.length;
		if (textlength > 7) {
			objPic2.title = objPic2.title.slice(0,7)+"...";
		}
		li1_p.html(objPic2.title);
		li1_a.prepend(li1_img);
		li1.append(li1_a);
		li1.append(li1_p);
		li1.append(li1_div);
		var li2 = $("<li></li>");
		var li2_a = $("<a></a>");
		var li2_img = $("<img>");
		var li2_p = $("<p></p>");
		var li2_div = $("<div>￥68</div>");
		li2_img.attr("src",objPic3.image);
		var textlength =  objPic3.title.length;
		if (textlength > 7) {
			objPic3.title = objPic3.title.slice(0,7)+"...";
		}
		li2_p.html(objPic3.title);
		li2_a.prepend(li2_img);
		li2.append(li2_a);
		li2.append(li2_p);
		li2.append(li2_div);
		var li3 = $("<li></li>");
		var li3_a = $("<a></a>");
		var li3_img = $("<img>");
		var li3_p = $("<p></p>");
		var li3_div = $("<div>￥49</div>");
		li3_img.attr("src",objPic4.image);
		var textlength =  objPic4.title.length;
		if (textlength > 7) {
			objPic4.title = objPic4.title.slice(0,7)+"...";
		}
		li3_p.html(objPic4.title);
		li3_a.prepend(li3_img);
		li3.append(li3_a);
		li3.append(li3_p);
		li3.append(li3_div);
		ul.append(li1);
		ul.append(li2);
		ul.append(li3);
		div3.prepend(ul);
	}
})