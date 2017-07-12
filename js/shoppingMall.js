var mySwiper = new Swiper ('.mall_banner',{
	pagination : '.swiper-pagination',//是否显示小点点
	grabCursor : true,//是否有光标手势
	autoplay : 2000,//是否自动播放
	loop : true,//是否最后一张返回第一张
	autoplayDisableOnInteraction : false
	//用户操作swiper之后，是否禁止autoplay(自动播放)。默认为true：停止。
	//如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
})
// var ajax = new XMLHttpRequest();
// ajax.open("get","../data/data.php?type=mall");
// ajax.onreadystatechange = function () {
// 	if (ajax.readyState == 4) {
// 		var obj = JSON.parse(ajax.responseText);
// 		console.log(obj)
// 		var objArr = obj.scrollImg;
// 		var ul = document.getElementById('image_box');
// 		for (var i = 0; i < objArr.length; i++) {
// 			var li = document.createElement('li').setAttribute('class','swiper-slide');
// 			li.innerHTML = "<a href="+objArr[i].url+">"+"<img src="+objArr[i].image+">"+"</a>";
// 			ul.appendChild(li);
// 		}
// 	}
// }
// ajax.send(null);
$.ajax({
	url:"../data/data.php?type=mall",
	success:function (data) {
		// console.log(data);
		var obj = JSON.parse(data);
		// console.log(obj);
		var objArr = obj.scrollImg;
		console.log(objArr);
		var ul = $('#image_box');
		var li = $('<li></li>');
		var a = $('<a></a>');
		var img = $('<img>');
		for (var i = 0; i < objArr.length; i++) {
			var ul = $('#image_box');
			var li = $('<li></li>');
			var a = $('<a></a>');
			var img = $('<img>');
			li.attr('class','swiper-slide');
			img.attr('src',objArr[i].image);
			a.attr('href',objArr[i].url)
			a.prepend(img);
			li.prepend(a);
			ul.append(li);
		}
	}
})