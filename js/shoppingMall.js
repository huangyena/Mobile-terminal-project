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