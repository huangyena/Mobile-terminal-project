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
		// console.log(objArr);
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
		// console.log(objArr);
		var div1 = $("#mall_nav_first");
		var div2 = $("#mall_nav_second");
		for (var i = 0; i < 4; i++) {
			var div1_1 = $('<div></div>');
			var a = $('<a></a>');
			var img = $('<img>');
			var p = $('<p></p>');
			a.attr('href',objArr[i].url);
			img.attr('src',objArr[i].image);
			p.html(objArr[i].iconTitle);
			a.append(img);
			a.append(p);
			// console.log(a);
			div1_1.append(a);
			div1.append(div1_1);
		};
		for (var i = 4; i < 8; i++) {
			var div2_1 = $('<div></div>');
			var a = $('<a></a>');
			var img = $('<img>');
			var p = $('<p></p>');
			a.attr('href',objArr[i].url);
			img.attr('src',objArr[i].image);
			p.html(objArr[i].iconTitle);
			a.append(img);
			a.append(p);
			// console.log(a);
			div2_1.append(a);
			div2.append(div2_1);
		};
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
$.ajax({
	url:"../data/data.php?type=mall",
	success:function (data) {
		var obj = JSON.parse(data);
		var objArr1 = obj.topic[0];
		var objArr2 = obj.topic[1];
		var objArr3 = obj.topic[2];
		var objArr4 = obj.topic[3];
		var objArr5 = obj.topic[4];
		var divOne = $("#mall_boxS5_bg");
		// var divTwo = $("#mall_boxS5_scroll");
		var divThree = $("#mall_boxS5_main");
		//divOne
		var bg1 = $("<img class='bg1'>");
		var bg2 = $("<img class='bg2'>");
		var bg3 = $("<img class='bg3'>");
		var bg4 = $("<img class='bg4'>");
		var bg5 = $("<img class='bg5'>");
		bg1.attr("src",objArr1.backgroupImage);
		bg2.attr("src",objArr2.backgroupImage);
		bg3.attr("src",objArr3.backgroupImage);
		bg4.attr("src",objArr4.backgroupImage);
		bg5.attr("src",objArr5.backgroupImage);
		divOne.append(bg1);
		divOne.append(bg2);
		divOne.append(bg3);
		divOne.append(bg4);
		divOne.append(bg5);
		
		//divTwo
		// var scroll_box = $("<div class='scroll_box'></div>");
		// var scroll_part1 = $("<div class='scroll_part' onclick='changeOne()'></div>");
		// var scroll_part2 = $("<div class='scroll_part' onclick='changeTwo()'></div>");
		// var scroll_part3 = $("<div class='scroll_part' onclick='changeThree()'></div>");
		// var scroll_part4 = $("<div class='scroll_part' onclick='changeFour()'></div>");
		// var scroll_part5 = $("<div class='scroll_part' onclick='changeFive()'></div>");
		// var part1 = $("<img>");
		// var part2 = $("<img>");
		// var part3 = $("<img>");
		// var part4 = $("<img>");
		// var part5 = $("<img>");
		// part1.attr("src",objArr1.uncheckImage);
		// part2.attr("src",objArr2.uncheckImage);
		// part3.attr("src",objArr3.uncheckImage);
		// part4.attr("src",objArr4.uncheckImage);
		// part5.attr("src",objArr5.uncheckImage);
		// scroll_part1.prepend(part1);
		// scroll_part2.prepend(part2);
		// scroll_part3.prepend(part3);
		// scroll_part4.prepend(part4);
		// scroll_part5.prepend(part5);
		// scroll_box.append(scroll_part1);
		// scroll_box.append(scroll_part2);
		// scroll_box.append(scroll_part3);
		// scroll_box.append(scroll_part4);
		// scroll_box.append(scroll_part5);
		// divTwo.prepend(scroll_box);
		
		//divThree
		var main_title1 = $("<div class='boxS5_main_title1'></div>");
		var main_title2 = $("<div class='boxS5_main_title2'></div>");
		var main_title3 = $("<div class='boxS5_main_title3'></div>");
		var main_title4 = $("<div class='boxS5_main_title4'></div>");
		var main_title5 = $("<div class='boxS5_main_title5'></div>");

		var main_title1_1 = $("<div class='main_title1_1'></div>");
		var main_title2_1 = $("<div class='main_title2_1'></div>");
		var main_title3_1 = $("<div class='main_title3_1'></div>");
		var main_title4_1 = $("<div class='main_title4_1'></div>");
		var main_title5_1 = $("<div class='main_title5_1'></div>");

		var main_title1_2 = $("<div class='main_title1_2'></div>");
		var main_title2_2 = $("<div class='main_title2_2'></div>");
		var main_title3_2 = $("<div class='main_title3_2'></div>");
		var main_title4_2 = $("<div class='main_title4_2'></div>");
		var main_title5_2 = $("<div class='main_title5_2'></div>");

		main_title1_1.html(objArr1.titleEn);
		main_title2_1.html(objArr2.titleEn);
		main_title3_1.html(objArr3.titleEn);
		main_title4_1.html(objArr4.titleEn);
		main_title5_1.html(objArr5.titleEn);

		main_title1_2.html(objArr1.titleCn);
		main_title2_2.html(objArr2.titleCn);
		main_title3_2.html(objArr3.titleCn);
		main_title4_2.html(objArr4.titleCn);
		main_title5_2.html(objArr5.titleCn);

		main_title1.append(main_title1_1);
		main_title2.append(main_title2_1);
		main_title3.append(main_title3_1);
		main_title4.append(main_title4_1);
		main_title5.append(main_title5_1);

		main_title1.append(main_title1_2);
		main_title2.append(main_title2_2);
		main_title3.append(main_title3_2);
		main_title4.append(main_title4_2);
		main_title5.append(main_title5_2);

		var main_box1 = $("<div class='boxS5_main_box1'></div>");
		var main_box2 = $("<div class='boxS5_main_box2'></div>");
		var main_box3 = $("<div class='boxS5_main_box3'></div>");
		var main_box4 = $("<div class='boxS5_main_box4'></div>");
		var main_box5 = $("<div class='boxS5_main_box5'></div>");

		var box_floor1_1 = $("<div class='main_box_floor'></div>");
		var box_floor2_1 = $("<div class='main_box_floor'></div>");
		var box_floor3_1 = $("<div class='main_box_floor'></div>");
		var box_floor4_1 = $("<div class='main_box_floor'></div>");
		var box_floor5_1 = $("<div class='main_box_floor'></div>");

		var box_floor1_2 = $("<div class='main_box_floor'></div>");
		var box_floor2_2 = $("<div class='main_box_floor'></div>");
		var box_floor3_2 = $("<div class='main_box_floor'></div>");
		var box_floor4_2 = $("<div class='main_box_floor'></div>");
		var box_floor5_2 = $("<div class='main_box_floor'></div>");
		//floor_ladder
		var floor1_ladder1 = $("<div class='floor_ladder'></div>");
		var floor1_ladder2 = $("<div class='floor_ladder'></div>");
		var floor1_ladder3 = $("<div class='floor_ladder'></div>");
		var floor1_ladder4 = $("<div class='floor_ladder'></div>");
		var floor1_ladder5 = $("<div class='floor_ladder'></div>");
		var floor1_ladder6 = $("<div class='floor_ladder'></div>");
		var floor2_ladder1 = $("<div class='floor_ladder'></div>");
		var floor2_ladder2 = $("<div class='floor_ladder'></div>");
		var floor2_ladder3 = $("<div class='floor_ladder'></div>");
		var floor2_ladder4 = $("<div class='floor_ladder'></div>");
		var floor2_ladder5 = $("<div class='floor_ladder'></div>");
		var floor2_ladder6 = $("<div class='floor_ladder'></div>");
		var floor3_ladder1 = $("<div class='floor_ladder'></div>");
		var floor3_ladder2 = $("<div class='floor_ladder'></div>");
		var floor3_ladder3 = $("<div class='floor_ladder'></div>");
		var floor3_ladder4 = $("<div class='floor_ladder'></div>");
		var floor3_ladder5 = $("<div class='floor_ladder'></div>");
		var floor3_ladder6 = $("<div class='floor_ladder'></div>");
		var floor4_ladder1 = $("<div class='floor_ladder'></div>");
		var floor4_ladder2 = $("<div class='floor_ladder'></div>");
		var floor4_ladder3 = $("<div class='floor_ladder'></div>");
		var floor4_ladder4 = $("<div class='floor_ladder'></div>");
		var floor4_ladder5 = $("<div class='floor_ladder'></div>");
		var floor4_ladder6 = $("<div class='floor_ladder'></div>");
		var floor5_ladder1 = $("<div class='floor_ladder'></div>");
		var floor5_ladder2 = $("<div class='floor_ladder'></div>");
		var floor5_ladder3 = $("<div class='floor_ladder'></div>");
		var floor5_ladder4 = $("<div class='floor_ladder'></div>");
		var floor5_ladder5 = $("<div class='floor_ladder'></div>");
		var floor5_ladder6 = $("<div class='floor_ladder'></div>");
		//img
		var floor1_ladder1_img = $("<img>");
		var floor1_ladder2_img = $("<img>");
		var floor1_ladder3_img = $("<img>");
		var floor1_ladder4_img = $("<img>");
		var floor1_ladder5_img = $("<img>");
		var floor1_ladder6_img = $("<img>");
		var floor2_ladder1_img = $("<img>");
		var floor2_ladder2_img = $("<img>");
		var floor2_ladder3_img = $("<img>");
		var floor2_ladder4_img = $("<img>");
		var floor2_ladder5_img = $("<img>");
		var floor2_ladder6_img = $("<img>");
		var floor3_ladder1_img = $("<img>");
		var floor3_ladder2_img = $("<img>");
		var floor3_ladder3_img = $("<img>");
		var floor3_ladder4_img = $("<img>");
		var floor3_ladder5_img = $("<img>");
		var floor3_ladder6_img = $("<img>");
		var floor4_ladder1_img = $("<img>");
		var floor4_ladder2_img = $("<img>");
		var floor4_ladder3_img = $("<img>");
		var floor4_ladder4_img = $("<img>");
		var floor4_ladder5_img = $("<img>");
		var floor4_ladder6_img = $("<img>");
		var floor5_ladder1_img = $("<img>");
		var floor5_ladder2_img = $("<img>");
		var floor5_ladder3_img = $("<img>");
		var floor5_ladder4_img = $("<img>");
		var floor5_ladder5_img = $("<img>");
		var floor5_ladder6_img = $("<img>");
		//p1
		var floor1_ladder1_p1 = $("<p class='floor_ladder_p1'></p>");
		var floor1_ladder2_p1 = $("<p class='floor_ladder_p1'></p>");
		var floor1_ladder3_p1 = $("<p class='floor_ladder_p1'></p>");
		var floor1_ladder4_p1 = $("<p class='floor_ladder_p1'></p>");
		var floor1_ladder5_p1 = $("<p class='floor_ladder_p1'></p>");
		var floor1_ladder6_p1 = $("<p class='floor_ladder_p1'></p>");
		var floor2_ladder1_p1 = $("<p class='floor_ladder_p1'></p>");
		var floor2_ladder2_p1 = $("<p class='floor_ladder_p1'></p>");
		var floor2_ladder3_p1 = $("<p class='floor_ladder_p1'></p>");
		var floor2_ladder4_p1 = $("<p class='floor_ladder_p1'></p>");
		var floor2_ladder5_p1 = $("<p class='floor_ladder_p1'></p>");
		var floor2_ladder6_p1 = $("<p class='floor_ladder_p1'></p>");
		var floor3_ladder1_p1 = $("<p class='floor_ladder_p1'></p>");
		var floor3_ladder2_p1 = $("<p class='floor_ladder_p1'></p>");
		var floor3_ladder3_p1 = $("<p class='floor_ladder_p1'></p>");
		var floor3_ladder4_p1 = $("<p class='floor_ladder_p1'></p>");
		var floor3_ladder5_p1 = $("<p class='floor_ladder_p1'></p>");
		var floor3_ladder6_p1 = $("<p class='floor_ladder_p1'></p>");
		var floor4_ladder1_p1 = $("<p class='floor_ladder_p1'></p>");
		var floor4_ladder2_p1 = $("<p class='floor_ladder_p1'></p>");
		var floor4_ladder3_p1 = $("<p class='floor_ladder_p1'></p>");
		var floor4_ladder4_p1 = $("<p class='floor_ladder_p1'></p>");
		var floor4_ladder5_p1 = $("<p class='floor_ladder_p1'></p>");
		var floor4_ladder6_p1 = $("<p class='floor_ladder_p1'></p>");
		var floor5_ladder1_p1 = $("<p class='floor_ladder_p1'></p>");
		var floor5_ladder2_p1 = $("<p class='floor_ladder_p1'></p>");
		var floor5_ladder3_p1 = $("<p class='floor_ladder_p1'></p>");
		var floor5_ladder4_p1 = $("<p class='floor_ladder_p1'></p>");
		var floor5_ladder5_p1 = $("<p class='floor_ladder_p1'></p>");
		var floor5_ladder6_p1 = $("<p class='floor_ladder_p1'></p>");
		//p2
		var floor1_ladder1_p2 = $("<p class='floor_ladder_p2'>￥1330</p>");
		var floor1_ladder2_p2 = $("<p class='floor_ladder_p2'>￥1480</p>");
		var floor1_ladder3_p2 = $("<p class='floor_ladder_p2'>￥99</p>");
		var floor1_ladder4_p2 = $("<p class='floor_ladder_p2'>￥259</p>");
		var floor1_ladder5_p2 = $("<p class='floor_ladder_p2'>￥90</p>");
		var floor1_ladder6_p2 = $("<p class='floor_ladder_p2'>￥399</p>");
		var floor2_ladder1_p2 = $("<p class='floor_ladder_p2'>￥239</p>");
		var floor2_ladder2_p2 = $("<p class='floor_ladder_p2'>￥499</p>");
		var floor2_ladder3_p2 = $("<p class='floor_ladder_p2'>￥88</p>");
		var floor2_ladder4_p2 = $("<p class='floor_ladder_p2'>￥269</p>");
		var floor2_ladder5_p2 = $("<p class='floor_ladder_p2'>￥299</p>");
		var floor2_ladder6_p2 = $("<p class='floor_ladder_p2'>￥239</p>");
		var floor3_ladder1_p2 = $("<p class='floor_ladder_p2'>￥49</p>");
		var floor3_ladder2_p2 = $("<p class='floor_ladder_p2'>￥99</p>");
		var floor3_ladder3_p2 = $("<p class='floor_ladder_p2'>￥79</p>");
		var floor3_ladder4_p2 = $("<p class='floor_ladder_p2'>￥79</p>");
		var floor3_ladder5_p2 = $("<p class='floor_ladder_p2'>￥69</p>");
		var floor3_ladder6_p2 = $("<p class='floor_ladder_p2'>￥2691</p>");
		var floor4_ladder1_p2 = $("<p class='floor_ladder_p2'>￥4998</p>");
		var floor4_ladder2_p2 = $("<p class='floor_ladder_p2'>￥149</p>");
		var floor4_ladder3_p2 = $("<p class='floor_ladder_p2'>￥279</p>");
		var floor4_ladder4_p2 = $("<p class='floor_ladder_p2'>￥440</p>");
		var floor4_ladder5_p2 = $("<p class='floor_ladder_p2'>￥399</p>");
		var floor4_ladder6_p2 = $("<p class='floor_ladder_p2'>￥103</p>");
		var floor5_ladder1_p2 = $("<p class='floor_ladder_p2'>￥1530</p>");
		var floor5_ladder2_p2 = $("<p class='floor_ladder_p2'>￥99</p>");
		var floor5_ladder3_p2 = $("<p class='floor_ladder_p2'>￥118</p>");
		var floor5_ladder4_p2 = $("<p class='floor_ladder_p2'>￥399</p>");
		var floor5_ladder5_p2 = $("<p class='floor_ladder_p2'>￥45</p>");
		var floor5_ladder6_p2 = $("<p class='floor_ladder_p2'>￥149</p>");

		floor1_ladder1_img.attr("src",objArr1.subList[0].image);
		floor1_ladder2_img.attr("src",objArr1.subList[1].image);
		floor1_ladder3_img.attr("src",objArr1.subList[2].image);
		floor1_ladder4_img.attr("src",objArr1.subList[3].image);
		floor1_ladder5_img.attr("src",objArr1.subList[4].image);
		floor1_ladder6_img.attr("src",objArr1.subList[5].image);
		floor2_ladder1_img.attr("src",objArr2.subList[0].image);
		floor2_ladder2_img.attr("src",objArr2.subList[1].image);
		floor2_ladder3_img.attr("src",objArr2.subList[2].image);
		floor2_ladder4_img.attr("src",objArr2.subList[3].image);
		floor2_ladder5_img.attr("src",objArr2.subList[4].image);
		floor2_ladder6_img.attr("src",objArr2.subList[5].image);
		floor3_ladder1_img.attr("src",objArr3.subList[0].image);
		floor3_ladder2_img.attr("src",objArr3.subList[1].image);
		floor3_ladder3_img.attr("src",objArr3.subList[2].image);
		floor3_ladder4_img.attr("src",objArr3.subList[3].image);
		floor3_ladder5_img.attr("src",objArr3.subList[4].image);
		floor3_ladder6_img.attr("src",objArr3.subList[5].image);
		floor4_ladder1_img.attr("src",objArr4.subList[0].image);
		floor4_ladder2_img.attr("src",objArr4.subList[1].image);
		floor4_ladder3_img.attr("src",objArr4.subList[2].image);
		floor4_ladder4_img.attr("src",objArr4.subList[3].image);
		floor4_ladder5_img.attr("src",objArr4.subList[4].image);
		floor4_ladder6_img.attr("src",objArr4.subList[5].image);
		floor5_ladder1_img.attr("src",objArr5.subList[0].image);
		floor5_ladder2_img.attr("src",objArr5.subList[1].image);
		floor5_ladder3_img.attr("src",objArr5.subList[2].image);
		floor5_ladder4_img.attr("src",objArr5.subList[3].image);
		floor5_ladder5_img.attr("src",objArr5.subList[4].image);
		floor5_ladder6_img.attr("src",objArr5.subList[5].image);

		var textlength =  objArr1.subList[0].title.length;
		if (textlength > 7) {
			objArr1.subList[0].title = objArr1.subList[0].title.slice(0,6)+"...";
		}
		floor1_ladder1_p1.html(objArr1.subList[0].title);

		var textlength =  objArr1.subList[1].title.length;
		if (textlength > 7) {
			objArr1.subList[1].title = objArr1.subList[1].title.slice(0,6)+"...";
		}
		floor1_ladder2_p1.html(objArr1.subList[1].title);

		var textlength =  objArr1.subList[2].title.length;
		if (textlength > 7) {
			objArr1.subList[2].title = objArr1.subList[2].title.slice(0,6)+"...";
		}
		floor1_ladder3_p1.html(objArr1.subList[2].title);

		var textlength =  objArr1.subList[3].title.length;
		if (textlength > 7) {
			objArr1.subList[3].title = objArr1.subList[3].title.slice(0,6)+"...";
		}
		floor1_ladder4_p1.html(objArr1.subList[3].title);

		var textlength =  objArr1.subList[4].title.length;
		if (textlength > 7) {
			objArr1.subList[4].title = objArr1.subList[4].title.slice(0,6)+"...";
		}
		floor1_ladder5_p1.html(objArr1.subList[4].title);

		var textlength =  objArr1.subList[5].title.length;
		if (textlength > 7) {
			objArr1.subList[5].title = objArr1.subList[5].title.slice(0,6)+"...";
		}
		floor1_ladder6_p1.html(objArr1.subList[5].title);


		var textlength =  objArr2.subList[0].title.length;
		if (textlength > 7) {
			objArr2.subList[0].title = objArr2.subList[0].title.slice(0,6)+"...";
		}
		floor2_ladder1_p1.html(objArr2.subList[0].title);

		var textlength =  objArr2.subList[1].title.length;
		if (textlength > 7) {
			objArr2.subList[1].title = objArr2.subList[1].title.slice(0,6)+"...";
		}
		floor2_ladder2_p1.html(objArr2.subList[1].title);

		var textlength =  objArr2.subList[2].title.length;
		if (textlength > 7) {
			objArr2.subList[2].title = objArr2.subList[2].title.slice(0,6)+"...";
		}
		floor2_ladder3_p1.html(objArr2.subList[2].title);

		var textlength =  objArr2.subList[3].title.length;
		if (textlength > 7) {
			objArr2.subList[3].title = objArr2.subList[3].title.slice(0,6)+"...";
		}
		floor2_ladder4_p1.html(objArr2.subList[3].title);

		var textlength =  objArr2.subList[4].title.length;
		if (textlength > 7) {
			objArr2.subList[4].title = objArr2.subList[4].title.slice(0,6)+"...";
		}
		floor2_ladder5_p1.html(objArr2.subList[4].title);

		var textlength =  objArr3.subList[0].title.length;
		if (textlength > 7) {
			objArr3.subList[0].title = objArr3.subList[0].title.slice(0,6)+"...";
		}
		floor2_ladder6_p1.html(objArr2.subList[5].title);


		var textlength =  objArr3.subList[0].title.length;
		if (textlength > 7) {
			objArr3.subList[0].title = objArr3.subList[0].title.slice(0,6)+"...";
		}
		floor3_ladder1_p1.html(objArr3.subList[0].title);

		var textlength =  objArr3.subList[1].title.length;
		if (textlength > 7) {
			objArr3.subList[1].title = objArr3.subList[1].title.slice(0,6)+"...";
		}
		floor3_ladder2_p1.html(objArr3.subList[1].title);

		var textlength =  objArr3.subList[2].title.length;
		if (textlength > 7) {
			objArr3.subList[2].title = objArr3.subList[2].title.slice(0,6)+"...";
		}
		floor3_ladder3_p1.html(objArr3.subList[2].title);

		var textlength =  objArr3.subList[3].title.length;
		if (textlength > 7) {
			objArr3.subList[3].title = objArr3.subList[3].title.slice(0,6)+"...";
		}
		floor3_ladder4_p1.html(objArr3.subList[3].title);

		var textlength =  objArr3.subList[4].title.length;
		if (textlength > 7) {
			objArr3.subList[4].title = objArr3.subList[4].title.slice(0,6)+"...";
		}
		floor3_ladder5_p1.html(objArr3.subList[4].title);

		var textlength =  objArr3.subList[5].title.length;
		if (textlength > 7) {
			objArr3.subList[5].title = objArr3.subList[5].title.slice(0,6)+"...";
		}
		floor3_ladder6_p1.html(objArr3.subList[5].title);


		var textlength =  objArr4.subList[0].title.length;
		if (textlength > 7) {
			objArr4.subList[0].title = objArr4.subList[0].title.slice(0,6)+"...";
		}
		floor4_ladder1_p1.html(objArr4.subList[0].title);

		var textlength =  objArr4.subList[1].title.length;
		if (textlength > 7) {
			objArr4.subList[1].title = objArr4.subList[1].title.slice(0,6)+"...";
		}
		floor4_ladder2_p1.html(objArr4.subList[1].title);

		var textlength =  objArr4.subList[2].title.length;
		if (textlength > 7) {
			objArr4.subList[2].title = objArr4.subList[2].title.slice(0,6)+"...";
		}
		floor4_ladder3_p1.html(objArr4.subList[2].title);

		var textlength =  objArr4.subList[3].title.length;
		if (textlength > 7) {
			objArr4.subList[3].title = objArr4.subList[3].title.slice(0,6)+"...";
		}
		floor4_ladder4_p1.html(objArr4.subList[3].title);

		var textlength =  objArr4.subList[4].title.length;
		if (textlength > 7) {
			objArr4.subList[4].title = objArr4.subList[4].title.slice(0,6)+"...";
		}
		floor4_ladder5_p1.html(objArr4.subList[4].title);

		var textlength =  objArr4.subList[5].title.length;
		if (textlength > 7) {
			objArr4.subList[5].title = objArr4.subList[5].title.slice(0,6)+"...";
		}
		floor4_ladder6_p1.html(objArr4.subList[5].title);


		var textlength =  objArr5.subList[0].title.length;
		if (textlength > 7) {
			objArr5.subList[0].title = objArr5.subList[0].title.slice(0,6)+"...";
		}
		floor5_ladder1_p1.html(objArr5.subList[0].title);

		var textlength =  objArr5.subList[1].title.length;
		if (textlength > 7) {
			objArr5.subList[1].title = objArr5.subList[1].title.slice(0,6)+"...";
		}
		floor5_ladder2_p1.html(objArr5.subList[1].title);

		var textlength =  objArr5.subList[2].title.length;
		if (textlength > 7) {
			objArr5.subList[2].title = objArr5.subList[2].title.slice(0,6)+"...";
		}
		floor5_ladder3_p1.html(objArr5.subList[2].title);

		var textlength =  objArr5.subList[3].title.length;
		if (textlength > 7) {
			objArr5.subList[3].title = objArr5.subList[3].title.slice(0,6)+"...";
		}
		floor5_ladder4_p1.html(objArr5.subList[3].title);

		var textlength =  objArr5.subList[4].title.length;
		if (textlength > 7) {
			objArr5.subList[4].title = objArr5.subList[4].title.slice(0,6)+"...";
		}
		floor5_ladder5_p1.html(objArr5.subList[4].title);

		var textlength =  objArr5.subList[5].title.length;
		if (textlength > 7) {
			objArr5.subList[5].title = objArr5.subList[5].title.slice(0,6)+"...";
		}
		floor5_ladder6_p1.html(objArr5.subList[5].title);
		//img
		floor1_ladder1.append(floor1_ladder1_img);
		floor1_ladder2.append(floor1_ladder2_img);
		floor1_ladder3.append(floor1_ladder3_img);
		floor1_ladder4.append(floor1_ladder4_img);
		floor1_ladder5.append(floor1_ladder5_img);
		floor1_ladder6.append(floor1_ladder6_img);
		floor2_ladder1.append(floor2_ladder1_img);
		floor2_ladder2.append(floor2_ladder2_img);
		floor2_ladder3.append(floor2_ladder3_img);
		floor2_ladder4.append(floor2_ladder4_img);
		floor2_ladder5.append(floor2_ladder5_img);
		floor2_ladder6.append(floor2_ladder6_img);
		floor3_ladder1.append(floor3_ladder1_img);
		floor3_ladder2.append(floor3_ladder2_img);
		floor3_ladder3.append(floor3_ladder3_img);
		floor3_ladder4.append(floor3_ladder4_img);
		floor3_ladder5.append(floor3_ladder5_img);
		floor3_ladder6.append(floor3_ladder6_img);
		floor4_ladder1.append(floor4_ladder1_img);
		floor4_ladder2.append(floor4_ladder2_img);
		floor4_ladder3.append(floor4_ladder3_img);
		floor4_ladder4.append(floor4_ladder4_img);
		floor4_ladder5.append(floor4_ladder5_img);
		floor4_ladder6.append(floor4_ladder6_img);
		floor5_ladder1.append(floor5_ladder1_img);
		floor5_ladder2.append(floor5_ladder2_img);
		floor5_ladder3.append(floor5_ladder3_img);
		floor5_ladder4.append(floor5_ladder4_img);
		floor5_ladder5.append(floor5_ladder5_img);
		floor5_ladder6.append(floor5_ladder6_img);
		//p1
		floor1_ladder1.append(floor1_ladder1_p1);
		floor1_ladder2.append(floor1_ladder2_p1);
		floor1_ladder3.append(floor1_ladder3_p1);
		floor1_ladder4.append(floor1_ladder4_p1);
		floor1_ladder5.append(floor1_ladder5_p1);
		floor1_ladder6.append(floor1_ladder6_p1);
		floor2_ladder1.append(floor2_ladder1_p1);
		floor2_ladder2.append(floor2_ladder2_p1);
		floor2_ladder3.append(floor2_ladder3_p1);
		floor2_ladder4.append(floor2_ladder4_p1);
		floor2_ladder5.append(floor2_ladder5_p1);
		floor2_ladder6.append(floor2_ladder6_p1);
		floor3_ladder1.append(floor3_ladder1_p1);
		floor3_ladder2.append(floor3_ladder2_p1);
		floor3_ladder3.append(floor3_ladder3_p1);
		floor3_ladder4.append(floor3_ladder4_p1);
		floor3_ladder5.append(floor3_ladder5_p1);
		floor3_ladder6.append(floor3_ladder6_p1);
		floor4_ladder1.append(floor4_ladder1_p1);
		floor4_ladder2.append(floor4_ladder2_p1);
		floor4_ladder3.append(floor4_ladder3_p1);
		floor4_ladder4.append(floor4_ladder4_p1);
		floor4_ladder5.append(floor4_ladder5_p1);
		floor4_ladder6.append(floor4_ladder6_p1);
		floor5_ladder1.append(floor5_ladder1_p1);
		floor5_ladder2.append(floor5_ladder2_p1);
		floor5_ladder3.append(floor5_ladder3_p1);
		floor5_ladder4.append(floor5_ladder4_p1);
		floor5_ladder5.append(floor5_ladder5_p1);
		floor5_ladder6.append(floor5_ladder6_p1);
		//p2
		floor1_ladder1.append(floor1_ladder1_p2);
		floor1_ladder2.append(floor1_ladder2_p2);
		floor1_ladder3.append(floor1_ladder3_p2);
		floor1_ladder4.append(floor1_ladder4_p2);
		floor1_ladder5.append(floor1_ladder5_p2);
		floor1_ladder6.append(floor1_ladder6_p2);
		floor2_ladder1.append(floor2_ladder1_p2);
		floor2_ladder2.append(floor2_ladder2_p2);
		floor2_ladder3.append(floor2_ladder3_p2);
		floor2_ladder4.append(floor2_ladder4_p2);
		floor2_ladder5.append(floor2_ladder5_p2);
		floor2_ladder6.append(floor2_ladder6_p2);
		floor3_ladder1.append(floor3_ladder1_p2);
		floor3_ladder2.append(floor3_ladder2_p2);
		floor3_ladder3.append(floor3_ladder3_p2);
		floor3_ladder4.append(floor3_ladder4_p2);
		floor3_ladder5.append(floor3_ladder5_p2);
		floor3_ladder6.append(floor3_ladder6_p2);
		floor4_ladder1.append(floor4_ladder1_p2);
		floor4_ladder2.append(floor4_ladder2_p2);
		floor4_ladder3.append(floor4_ladder3_p2);
		floor4_ladder4.append(floor4_ladder4_p2);
		floor4_ladder5.append(floor4_ladder5_p2);
		floor4_ladder6.append(floor4_ladder6_p2);
		floor5_ladder1.append(floor5_ladder1_p2);
		floor5_ladder2.append(floor5_ladder2_p2);
		floor5_ladder3.append(floor5_ladder3_p2);
		floor5_ladder4.append(floor5_ladder4_p2);
		floor5_ladder5.append(floor5_ladder5_p2);
		floor5_ladder6.append(floor5_ladder6_p2);

		box_floor1_1.append(floor1_ladder1);
		box_floor2_1.append(floor2_ladder1);
		box_floor3_1.append(floor3_ladder1);
		box_floor4_1.append(floor4_ladder1);
		box_floor5_1.append(floor5_ladder1);
		box_floor1_1.append(floor1_ladder2);
		box_floor2_1.append(floor2_ladder2);
		box_floor3_1.append(floor3_ladder2);
		box_floor4_1.append(floor4_ladder2);
		box_floor5_1.append(floor5_ladder2);
		box_floor1_1.append(floor1_ladder3);
		box_floor2_1.append(floor2_ladder3);
		box_floor3_1.append(floor3_ladder3);
		box_floor4_1.append(floor4_ladder3);
		box_floor5_1.append(floor5_ladder3);
		box_floor1_2.append(floor1_ladder4);
		box_floor2_2.append(floor2_ladder4);
		box_floor3_2.append(floor3_ladder4);
		box_floor4_2.append(floor4_ladder4);
		box_floor5_2.append(floor5_ladder4);
		box_floor1_2.append(floor1_ladder5);
		box_floor2_2.append(floor2_ladder5);
		box_floor3_2.append(floor3_ladder5);
		box_floor4_2.append(floor4_ladder5);
		box_floor5_2.append(floor5_ladder5);
		box_floor1_2.append(floor1_ladder6);
		box_floor2_2.append(floor2_ladder6);
		box_floor3_2.append(floor3_ladder6);
		box_floor4_2.append(floor4_ladder6);
		box_floor5_2.append(floor5_ladder6);

		main_box1.append(box_floor1_1);
		main_box2.append(box_floor2_1);
		main_box3.append(box_floor3_1);
		main_box4.append(box_floor4_1);
		main_box5.append(box_floor5_1);

		main_box1.append(box_floor1_2);
		main_box2.append(box_floor2_2);
		main_box3.append(box_floor3_2);
		main_box4.append(box_floor4_2);
		main_box5.append(box_floor5_2);

		var boxS5_more1 = $("<div class='mall_boxS5_more'></div>");
		var boxS5_more2 = $("<div class='mall_boxS5_more'></div>");
		var boxS5_more3 = $("<div class='mall_boxS5_more'></div>");
		var boxS5_more4 = $("<div class='mall_boxS5_more'></div>");
		var boxS5_more5 = $("<div class='mall_boxS5_more'></div>");

		var boxS5_more1_a = $("<a></a>");
		var boxS5_more2_a = $("<a></a>");
		var boxS5_more3_a = $("<a></a>");
		var boxS5_more4_a = $("<a></a>");
		var boxS5_more5_a = $("<a></a>");

		var boxS5_more1_img = $("<div class='boxS5_more_img'>更多商品</div>");
		var boxS5_more2_img = $("<div class='boxS5_more_img'>更多商品</div>");
		var boxS5_more3_img = $("<div class='boxS5_more_img'>更多商品</div>");
		var boxS5_more4_img = $("<div class='boxS5_more_img'>更多商品</div>");
		var boxS5_more5_img = $("<div class='boxS5_more_img'>更多商品</div>");

		boxS5_more1_a.attr("href",objArr1.url);
		boxS5_more2_a.attr("href",objArr2.url);
		boxS5_more3_a.attr("href",objArr3.url);
		boxS5_more4_a.attr("href",objArr4.url);
		boxS5_more5_a.attr("href",objArr5.url);

		boxS5_more1_a.append(boxS5_more1_img);
		boxS5_more2_a.append(boxS5_more2_img);
		boxS5_more3_a.append(boxS5_more3_img);
		boxS5_more4_a.append(boxS5_more4_img);
		boxS5_more5_a.append(boxS5_more5_img);

		boxS5_more1.append(boxS5_more1_a);
		boxS5_more2.append(boxS5_more2_a);
		boxS5_more3.append(boxS5_more3_a);
		boxS5_more4.append(boxS5_more4_a);
		boxS5_more5.append(boxS5_more5_a);

		main_box1.append(boxS5_more1);
		main_box2.append(boxS5_more2);
		main_box3.append(boxS5_more3);
		main_box4.append(boxS5_more4);
		main_box5.append(boxS5_more5);

		divThree.append(main_title1);
		divThree.append(main_box1);
		divThree.append(main_title2);
		divThree.append(main_box2);
		divThree.append(main_title3);
		divThree.append(main_box3);
		divThree.append(main_title4);
		divThree.append(main_box4);
		divThree.append(main_title5);
		divThree.append(main_box5);
	}
})

		function changeOne() {
			$('#mall_boxS5_scroll').scrollLeft(0);
			var img = $(".scroll_part_img1");
			img.css("box-shadow","5px 5px 5px 0 black");
			var bg1 = $(".bg1");
			var main_title1 = $(".boxS5_main_title1");
			var main_title1_1 = $(".main_title1_1");
			var main_title1_2 = $(".main_title1_2");
			var main_box1 = $(".boxS5_main_box1");
			bg1.css("display","block");
			main_title1.css("display","block");
			main_title1_1.css("display","block");
			main_title1_2.css("display","block");
			main_box1.css("display","block");

			var img = $(".scroll_part_img2");
			img.css("box-shadow","5px 5px 5px 0 grey");
			var bg2 = $(".bg2");
			var main_title2 = $(".boxS5_main_title2");
			var main_title2_1 = $(".main_title2_1");
			var main_title2_2 = $(".main_title2_2");
			var main_box2 = $(".boxS5_main_box2");
			bg2.css("display","none");
			main_title2.css("display","none");
			main_title2_1.css("display","none");
			main_title2_2.css("display","none");
			main_box2.css("display","none");

			var img = $(".scroll_part_img3");
			img.css("box-shadow","5px 5px 5px 0 grey");
			var bg3 = $(".bg3");
			var main_title3 = $(".boxS5_main_title3");
			var main_title3_1 = $(".main_title3_1");
			var main_title3_2 = $(".main_title3_2");
			var main_box3 = $(".boxS5_main_box3");
			bg3.css("display","none");
			main_title3.css("display","none");
			main_title3_1.css("display","none");
			main_title3_2.css("display","none");
			main_box3.css("display","none");

			var img = $(".scroll_part_img4");
			img.css("box-shadow","5px 5px 5px 0 grey");
			var bg4 = $(".bg4");
			var main_title4 = $(".boxS5_main_title4");
			var main_title4_1 = $(".main_title4_1");
			var main_title4_2 = $(".main_title4_2");
			var main_box4 = $(".boxS5_main_box4");
			bg4.css("display","none");
			main_title4.css("display","none");
			main_title4_1.css("display","none");
			main_title4_2.css("display","none");
			main_box4.css("display","none");

			var img = $(".scroll_part_img5");
			img.css("box-shadow","5px 5px 5px 0 grey");
			var bg5 = $(".bg5");
			var main_title5 = $(".boxS5_main_title5");
			var main_title5_1 = $(".main_title5_1");
			var main_title5_2 = $(".main_title5_2");
			var main_box5 = $(".boxS5_main_box5");
			bg5.css("display","none");
			main_title5.css("display","none");
			main_title5_1.css("display","none");
			main_title5_2.css("display","none");
			main_box5.css("display","none");
			
		}
		function changeTwo() {
			$('#mall_boxS5_scroll').scrollLeft(0);
			var img = $(".scroll_part_img1");
			img.css("box-shadow","5px 5px 5px 0 grey");
			var bg1 = $(".bg1");
			var main_title1 = $(".boxS5_main_title1");
			var main_title1_1 = $(".main_title1_1");
			var main_title1_2 = $(".main_title1_2");
			var main_box1 = $(".boxS5_main_box1");
			bg1.css("display","none");
			main_title1.css("display","none");
			main_title1_1.css("display","none");
			main_title1_2.css("display","none");
			main_box1.css("display","none");

			var img = $(".scroll_part_img2");
			img.css("box-shadow","5px 5px 5px 0 black");
			var bg2 = $(".bg2");
			var main_title2 = $(".boxS5_main_title2");
			var main_title2_1 = $(".main_title2_1");
			var main_title2_2 = $(".main_title2_2");
			var main_box2 = $(".boxS5_main_box2");
			bg2.css("display","block");
			main_title2.css("display","block");
			main_title2_1.css("display","block");
			main_title2_2.css("display","block");
			main_box2.css("display","block");

			var img = $(".scroll_part_img3");
			img.css("box-shadow","5px 5px 5px 0 grey");
			var bg3 = $(".bg3");
			var main_title3 = $(".boxS5_main_title3");
			var main_title3_1 = $(".main_title3_1");
			var main_title3_2 = $(".main_title3_2");
			var main_box3 = $(".boxS5_main_box3");
			bg3.css("display","none");
			main_title3.css("display","none");
			main_title3_1.css("display","none");
			main_title3_2.css("display","none");
			main_box3.css("display","none");

			var img = $(".scroll_part_img4");
			img.css("box-shadow","5px 5px 5px 0 grey");
			var bg4 = $(".bg4");
			var main_title4 = $(".boxS5_main_title4");
			var main_title4_1 = $(".main_title4_1");
			var main_title4_2 = $(".main_title4_2");
			var main_box4 = $(".boxS5_main_box4");
			bg4.css("display","none");
			main_title4.css("display","none");
			main_title4_1.css("display","none");
			main_title4_2.css("display","none");
			main_box4.css("display","none");

			var img = $(".scroll_part_img5");
			img.css("box-shadow","5px 5px 5px 0 grey");
			var bg5 = $(".bg5");
			var main_title5 = $(".boxS5_main_title5");
			var main_title5_1 = $(".main_title5_1");
			var main_title5_2 = $(".main_title5_2");
			var main_box5 = $(".boxS5_main_box5");
			bg5.css("display","none");
			main_title5.css("display","none");
			main_title5_1.css("display","none");
			main_title5_2.css("display","none");
			main_box5.css("display","none");
		}
		function changeThree() {
			$('#mall_boxS5_scroll').scrollLeft(60);
			var img = $(".scroll_part_img1");
			img.css("box-shadow","5px 5px 5px 0 grey");
			var bg1 = $(".bg1");
			var main_title1 = $(".boxS5_main_title1");
			var main_title1_1 = $(".main_title1_1");
			var main_title1_2 = $(".main_title1_2");
			var main_box1 = $(".boxS5_main_box1");
			bg1.css("display","none");
			main_title1.css("display","none");
			main_title1_1.css("display","none");
			main_title1_2.css("display","none");
			main_box1.css("display","none");

			var img = $(".scroll_part_img2");
			img.css("box-shadow","5px 5px 5px 0 grey");
			var bg2 = $(".bg2");
			var main_title2 = $(".boxS5_main_title2");
			var main_title2_1 = $(".main_title2_1");
			var main_title2_2 = $(".main_title2_2");
			var main_box2 = $(".boxS5_main_box2");
			bg2.css("display","none");
			main_title2.css("display","none");
			main_title2_1.css("display","none");
			main_title2_2.css("display","none");
			main_box2.css("display","none");

			var img = $(".scroll_part_img3");
			img.css("box-shadow","5px 5px 5px 0 black");
			var bg3 = $(".bg3");
			var main_title3 = $(".boxS5_main_title3");
			var main_title3_1 = $(".main_title3_1");
			var main_title3_2 = $(".main_title3_2");
			var main_box3 = $(".boxS5_main_box3");
			bg3.css("display","block");
			main_title3.css("display","block");
			main_title3_1.css("display","block");
			main_title3_2.css("display","block");
			main_box3.css("display","block");

			var img = $(".scroll_part_img4");
			img.css("box-shadow","5px 5px 5px 0 grey");
			var bg4 = $(".bg4");
			var main_title4 = $(".boxS5_main_title4");
			var main_title4_1 = $(".main_title4_1");
			var main_title4_2 = $(".main_title4_2");
			var main_box4 = $(".boxS5_main_box4");
			bg4.css("display","none");
			main_title4.css("display","none");
			main_title4_1.css("display","none");
			main_title4_2.css("display","none");
			main_box4.css("display","none");

			var img = $(".scroll_part_img5");
			img.css("box-shadow","5px 5px 5px 0 grey");
			var bg5 = $(".bg5");
			var main_title5 = $(".boxS5_main_title5");
			var main_title5_1 = $(".main_title5_1");
			var main_title5_2 = $(".main_title5_2");
			var main_box5 = $(".boxS5_main_box5");
			bg5.css("display","none");
			main_title5.css("display","none");
			main_title5_1.css("display","none");
			main_title5_2.css("display","none");
			main_box5.css("display","none");
		}
		function changeFour() {
			$('#mall_boxS5_scroll').scrollLeft(130);
			var img = $(".scroll_part_img1");
			img.css("box-shadow","5px 5px 5px 0 grey");
			var bg1 = $(".bg1");
			var main_title1 = $(".boxS5_main_title1");
			var main_title1_1 = $(".main_title1_1");
			var main_title1_2 = $(".main_title1_2");
			var main_box1 = $(".boxS5_main_box1");
			bg1.css("display","none");
			main_title1.css("display","none");
			main_title1_1.css("display","none");
			main_title1_2.css("display","none");
			main_box1.css("display","none");

			var img = $(".scroll_part_img2");
			img.css("box-shadow","5px 5px 5px 0 grey");
			var bg2 = $(".bg2");
			var main_title2 = $(".boxS5_main_title2");
			var main_title2_1 = $(".main_title2_1");
			var main_title2_2 = $(".main_title2_2");
			var main_box2 = $(".boxS5_main_box2");
			bg2.css("display","none");
			main_title2.css("display","none");
			main_title2_1.css("display","none");
			main_title2_2.css("display","none");
			main_box2.css("display","none");

			var img = $(".scroll_part_img3");
			img.css("box-shadow","5px 5px 5px 0 grey");
			var bg3 = $(".bg3");
			var main_title3 = $(".boxS5_main_title3");
			var main_title3_1 = $(".main_title3_1");
			var main_title3_2 = $(".main_title3_2");
			var main_box3 = $(".boxS5_main_box3");
			bg3.css("display","none");
			main_title3.css("display","none");
			main_title3_1.css("display","none");
			main_title3_2.css("display","none");
			main_box3.css("display","none");

			var img = $(".scroll_part_img4");
			img.css("box-shadow","5px 5px 5px 0 black");
			var bg4 = $(".bg4");
			var main_title4 = $(".boxS5_main_title4");
			var main_title4_1 = $(".main_title4_1");
			var main_title4_2 = $(".main_title4_2");
			var main_box4 = $(".boxS5_main_box4");
			bg4.css("display","block");
			main_title4.css("display","block");
			main_title4_1.css("display","block");
			main_title4_2.css("display","block");
			main_box4.css("display","block");

			var img = $(".scroll_part_img5");
			img.css("box-shadow","5px 5px 5px 0 grey");
			var bg5 = $(".bg5");
			var main_title5 = $(".boxS5_main_title5");
			var main_title5_1 = $(".main_title5_1");
			var main_title5_2 = $(".main_title5_2");
			var main_box5 = $(".boxS5_main_box5");
			bg5.css("display","none");
			main_title5.css("display","none");
			main_title5_1.css("display","none");
			main_title5_2.css("display","none");
			main_box5.css("display","none");
		}
		function changeFive() {
			$('#mall_boxS5_scroll').scrollLeft(130);
			var img = $(".scroll_part_img1");
			img.css("box-shadow","5px 5px 5px 0 grey");
			var bg1 = $(".bg1");
			var main_title1 = $(".boxS5_main_title1");
			var main_title1_1 = $(".main_title1_1");
			var main_title1_2 = $(".main_title1_2");
			var main_box1 = $(".boxS5_main_box1");
			bg1.css("display","none");
			main_title1.css("display","none");
			main_title1_1.css("display","none");
			main_title1_2.css("display","none");
			main_box1.css("display","none");

			var img = $(".scroll_part_img2");
			img.css("box-shadow","5px 5px 5px 0 grey");
			var bg2 = $(".bg2");
			var main_title2 = $(".boxS5_main_title2");
			var main_title2_1 = $(".main_title2_1");
			var main_title2_2 = $(".main_title2_2");
			var main_box2 = $(".boxS5_main_box2");
			bg2.css("display","none");
			main_title2.css("display","none");
			main_title2_1.css("display","none");
			main_title2_2.css("display","none");
			main_box2.css("display","none");

			var img = $(".scroll_part_img3");
			img.css("box-shadow","5px 5px 5px 0 grey");
			var bg3 = $(".bg3");
			var main_title3 = $(".boxS5_main_title3");
			var main_title3_1 = $(".main_title3_1");
			var main_title3_2 = $(".main_title3_2");
			var main_box3 = $(".boxS5_main_box3");
			bg3.css("display","none");
			main_title3.css("display","none");
			main_title3_1.css("display","none");
			main_title3_2.css("display","none");
			main_box3.css("display","none");

			var img = $(".scroll_part_img4");
			img.css("box-shadow","5px 5px 5px 0 grey");
			var bg4 = $(".bg4");
			var main_title4 = $(".boxS5_main_title4");
			var main_title4_1 = $(".main_title4_1");
			var main_title4_2 = $(".main_title4_2");
			var main_box4 = $(".boxS5_main_box4");
			bg4.css("display","none");
			main_title4.css("display","none");
			main_title4_1.css("display","none");
			main_title4_2.css("display","none");
			main_box4.css("display","none");

			var img = $(".scroll_part_img5");
			img.css("box-shadow","5px 5px 5px 0 black");
			var bg5 = $(".bg5");
			var main_title5 = $(".boxS5_main_title5");
			var main_title5_1 = $(".main_title5_1");
			var main_title5_2 = $(".main_title5_2");
			var main_box5 = $(".boxS5_main_box5");
			bg5.css("display","block");
			main_title5.css("display","block");
			main_title5_1.css("display","block");
			main_title5_2.css("display","block");
			main_box5.css("display","block");
		}

//box2
$.ajax({
	url:"../data/data.php?type=mall",
	success:function (data) {
		var obj = JSON.parse(data);
		console.log(obj);
		var objPic1 = obj.category[0];
		var objPic2 = obj.category[0].subList[0];
		var objPic3 = obj.category[0].subList[1];
		var objPic4 = obj.category[0].subList[2];
		var div1 = $("#mall_box2_title");
		var div1_1 = $("<div class='box2_title_left'></div>");
		var div1_2 = $("<div class='box2_title_right'></div>");
		var div1_2_a = $("<a>更多</a>")
		div1_1.html(objPic1.name);
		// console.log(objPic1.name);
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
		// console.log(objPic1.name);
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

//box4
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
		// console.log(objPic1.name);
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

//box5
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
		// console.log(objPic1.name);
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

//recommend
$.ajax({
	url:"../data/data.php?type=interested",
	success:function (data) {
		var obj = JSON.parse(data);
		var objArr = obj.goodsList;
		console.log(objArr);
		var ul = $("#recommendMain_box");
		for (var i = 0; i < objArr.length; i++) {
			var li = $("<li></li>");
			var div_img = $("<div class='recmd_img'></div>")
			var a = $("<a></a>");
			var img = $("<img>");
			var div_text = $("<div class='recmd_content'></div>");
			var div_text1 = $("<div class='recmd_content_text1'></div>");
			var div_text2 = $("<div class='recmd_content_text2'></div>");
			img.attr("src",objArr[i].image);
			a.attr("href",'MallDetails.html?goodId='+objArr[i].goodsId);
			// console.log(objArr[i].name);
			var  textlength = objArr[i].name.length;
			if (textlength > 7) {
				objArr[i].name = objArr[i].name.slice(0,8)+"..."
			}
			// console.log(objArr[i].name);
			div_text1.html(objArr[i].name);	
			div_text2.html("￥"+objArr[i].minSalePrice);
			a.prepend(img);
			div_img.prepend(a);
			li.append(div_img);
			div_text.append(div_text1);
			div_text.append(div_text2);
			li.append(div_text);
			ul.append(li);
		}
	}
})