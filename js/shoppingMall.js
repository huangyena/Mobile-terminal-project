var mySwiper = new Swiper ('.mall_header',{
	pagination : '.swiper-pagination',//是否显示小点点
	grabCursor : true,//是否有光标手势
	autoplay : 2000,//是否自动播放
	loop : true,//是否最后一张返回第一张
	autoplayDisableOnInteraction : false
	//用户操作swiper之后，是否禁止autoplay(自动播放)。默认为true：停止。
	//如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
})