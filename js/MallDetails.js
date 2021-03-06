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
	data:"type=productDetail&goodID="+goodsId,
	success:function (data) {
		var obj = JSON.parse(data);
		var objArr = obj.data.productDetail.goods;
		console.log(objArr);
		$(".Comment_link").attr("href",'MallRatingSheet.html?goodId='+objArr.goodsId);
		$("#PicShow").append($("<img/>").attr("src",objArr.image));
		$("#mainTop_title").append($("<div class='title_top'></div>").html(objArr.longGoodsName)).append($("<div class='title_new'></div>").html(objArr.style.goodsTag));
		var NewPrice = $("<div class='NewPrice'></div>");
		var Vip_title = $("<div class='Vip_title'>登录享受会员价</div>");
		NewPrice.html("&yen;"+objArr.maxSalePrice);
		console.log(NewPrice[0].innerHTML);
		var textlength1 = NewPrice[0].innerHTML.length;
		if (textlength1 > 6) {
			NewPrice[0].innerHTML = NewPrice[0].innerHTML.slice(0,5);
		}
		console.log(NewPrice[0].innerHTML);
		$("#price").append(NewPrice).append(Vip_title);
		var oldPrice = $("<div class='oldPrice'>&yen;</div>");
		oldPrice.html(objArr.marketPrice);
		var textlength2 = oldPrice[0].innerHTML.length;
		if (textlength2 > 5) {
			oldPrice[0].innerHTML = oldPrice[0].innerHTML.slice(0,4);
		}
		$("#Market_value").append("市场价").append(oldPrice);
		$("#Free_freight").append("全场满99元免运费");
		var objArr2 = objArr.reviewInfo.reviewInfos[0];
		console.log(objArr2);
		var haveRecommend = objArr.reviewInfo.reviewInfos.length;
		console.log(haveRecommend);
		if (haveRecommend == 0) {
			$(".top_title_right").css("display","none");
			$(".Review_main").css("display","none");
			$(".totalCount").html("暂无评论");
		} else if (haveRecommend == 1) {
			$("#Head_portrait").append($("<img/>").attr("src",objArr2.headPic));
			$("#name").append($("<div></div>").html(objArr2.nickName));
			var star = $("#star");
			var starLength = objArr2.stars;
				// var havePic = objArr.imageUrls.length;
				if (starLength == 1) {
					star.append($("<img src='../images/4star-in.png' />"));
					// console.log(starLength);
				} else if (starLength == 2) {
					star.append($("<img src='../images/4star-in.png' />"));
					star.append($("<img src='../images/4star-in.png' />"));
				} else if (starLength == 3) {
					star.append($("<img src='../images/4star-in.png' />"));
					star.append($("<img src='../images/4star-in.png' />"));
					star.append($("<img src='../images/4star-in.png' />"));
				} else if (starLength == 4) {
					star.append($("<img src='../images/4star-in.png' />"));
					star.append($("<img src='../images/4star-in.png' />"));
					star.append($("<img src='../images/4star-in.png' />"));
					star.append($("<img src='../images/4star-in.png' />"));
				} else if (starLength == 5) {
					star.append($("<img src='../images/4star-in.png' />"));
					star.append($("<img src='../images/4star-in.png' />"));
					star.append($("<img src='../images/4star-in.png' />"));
					star.append($("<img src='../images/4star-in.png' />"));
					star.append($("<img src='../images/4star-in.png' />"));
				}
			$("#content").html(objArr2.content);
			var img = $("<img/>");
			var havePic = objArr2.imageUrls.length;
			console.log(havePic);
			if (havePic > 0) {
				$("#Evaluation_content_img").append($("<img/>").attr("src",objArr2.imageUrls[0]));
			}
			var objArr3 = objArr.reviewInfo;
			console.log(objArr3);
			$(".totalCount").html(objArr3.totalCount+"人评论");
			$(".Percentage").html(parseInt(objArr3.goodCount/objArr3.totalCount*100)+"%");
		}
	}
})
$.ajax({
	url:"../data/Mall_search_data.php",
	data:"type=productImgs&goodID="+goodsId,
	success:function (data) {
		var obj = JSON.parse(data);
		var objArr = obj.contentList;
		console.log(objArr);
		$("#details_main_img1").append($("<img/>").attr("src",objArr[0].image));
		$("#details_main_title2").append($("<div class='Bold_white1'></div>").html(objArr[1].title)).append($("<div class='Small_Gray'></div>").html(objArr[1].content));
		$("#details_main_img2").append($("<img/>").attr("src",objArr[1].image));
		$("#details_main_title3").append($("<div class='Bold_white2'></div>").html(objArr[2].title)).append($("<div class='Small_Gray'></div>").html(objArr[2].content));
		$("#details_main_img3").append($("<img/>").attr("src",objArr[2].image));
		$("#details_main_title4").append($("<div class='Small_Gray'></div>").html(objArr[3].content));
		$("#details_main_img4").append($("<img/>").attr("src",objArr[3].image));
		$("#details_main_title5").append($("<div class='Small_Gray'></div>").html(objArr[4].content));
		$("#details_main_img5").append($("<img/>").attr("src",objArr[4].image));
	}
})
$.ajax({
	url:"../data/Mall_search_data.php",
	data:"type=recommend&goodID="+goodsId,
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
			div_text2.html("&yen;"+objArr[i].minSalePrice);
			var textlength2 =  div_text2[0].innerHTML.length;
			if (textlength2 == 5) {
				div_text2[0].innerHTML = div_text2[0].innerHTML.slice(0,3);
			}else if (textlength2 == 6) {
				div_text2[0].innerHTML = div_text2[0].innerHTML.slice(0,4);
			}else if (textlength2 == 7) {
				div_text2[0].innerHTML = div_text2[0].innerHTML.slice(0,4);
			}
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
