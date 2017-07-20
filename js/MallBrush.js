var objArr = [];
function getData(){
	$.ajax({
		url:"../data/Mall_search_data.php",
		data:"type=searchDetail&keyword=1",
		success:function (data) {
			var obj = JSON.parse(data);
			console.log(obj);
			console.log(obj.content.goods.goodsList);
			console.log(data);
			objArr = obj.content.goods.goodsList;
			setUlData();
		}
	});
	$(".sort1").css("color","rgb(30,125,215)");
	$(".sort1").css("border-bottom","1px solid rgb(30,125,215)");
	$(".sort2").css("color","black");
	$(".sort2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".sort3").css("color","black");
	$(".sort3").css("border-bottom","1px solid rgb(216,216,216)");
	$(".sort4").css("color","black");
	$(".sort4").css("border-bottom","1px solid rgb(216,216,216)");
	$("#brush_sort").css("display","none");
	$(".down_arrow1").css("background-image","url(../images/4topArrow.png)");
	isNone = true;
}
getData();
function order(value){
	$("#product_list_box").empty();
	if (value == 1) {//价格从低到高
		for (var i = 0; i < objArr.length; i++) {
			for (var j = 0; j < objArr.length-i-1; j++) {
				if (objArr[j].minSalePrice > objArr[j+1].minSalePrice) {
					var tem = objArr[j];
					objArr[j] = objArr[j+1];
					objArr[j+1] = tem;
				}
			}
		}
		$(".sort1").css("color","black");
		$(".sort1").css("border-bottom","1px solid rgb(216,216,216)");
		$(".sort2").css("color","rgb(30,125,215)");
		$(".sort2").css("border-bottom","1px solid rgb(30,125,215)");
		$(".sort3").css("color","black");
		$(".sort3").css("border-bottom","1px solid rgb(216,216,216)");
		$(".sort4").css("color","black");
		$(".sort4").css("border-bottom","1px solid rgb(216,216,216)");
		$("#brush_sort").css("display","none");
		$(".down_arrow1").css("background-image","url(../images/4topArrow.png)");
		isNone = true;
	} else if (value == 2) {
		for (var i = 0; i < objArr.length; i++) {
			for (var k = 0; k < objArr.length-i-1; k++) {
				if (objArr[k].minSalePrice < objArr[k+1].minSalePrice) {
					var tem = objArr[k];
					objArr[k] = objArr[k+1];
					objArr[k+1] = tem;
				}
			}
		}
		$(".sort1").css("color","black");
		$(".sort1").css("border-bottom","1px solid rgb(216,216,216)");
		$(".sort2").css("color","black");
		$(".sort2").css("border-bottom","1px solid rgb(216,216,216)");
		$(".sort3").css("color","rgb(30,125,215)");
		$(".sort3").css("border-bottom","1px solid rgb(30,125,215)");
		$(".sort4").css("color","black");
		$(".sort4").css("border-bottom","1px solid rgb(216,216,216)");
		$("#brush_sort").css("display","none");
		$(".down_arrow1").css("background-image","url(../images/4topArrow.png)");
		isNone = true;
	} else if (value == 3) {
		for (var i = 0; i < objArr.length; i++) {
			for (var l = 0; l < objArr.length-i-1; l++) {
				if (objArr[l].goodsId < objArr[l+1].goodsId) {
					var tem = objArr[l];
					objArr[l] = objArr[l+1];
					objArr[l+1] = tem;
				}
			}
		}
		$(".sort1").css("color","black");
		$(".sort1").css("border-bottom","1px solid rgb(216,216,216)");
		$(".sort2").css("color","black");
		$(".sort2").css("border-bottom","1px solid rgb(216,216,216)");
		$(".sort3").css("color","black");
		$(".sort3").css("border-bottom","1px solid rgb(216,216,216)");
		$(".sort4").css("color","rgb(30,125,215)");
		$(".sort4").css("border-bottom","1px solid rgb(30,125,215)");
		$("#brush_sort").css("display","none");
		$(".down_arrow1").css("background-image","url(../images/4topArrow.png)");
		isNone = true;
	}

	setUlData();
}

function setUlData(){
	var ul = $("#product_list_box");
		for (var i = 0; i < objArr.length; i++) {
			var li = $("<li></li>");
			var a = $("<a></a>");
			var div1 = $("<div class='img'></div>");
			var div2 = $("<div class='main'></div>");
			var div2_1 = $("<div class='main_div1'></div>");
			var div2_2 = $("<div class='main_div2'></div>");
			var div2_2_1 = $("<div class='main_div2_1'></div>");
			var div2_2_2 = $("<div class='main_div2_2'></div>");
			var img = $("<img/>");
			a.attr("href",objArr[i].url);
			img.attr("src",objArr[i].imageSrc);
			div2_1.html(objArr[i].name);
			div2_2_1.html("&yen;"+objArr[i].minSalePrice);
			var textlength1 =  div2_2_1[0].innerHTML.length;
			if (textlength1 == 7) {
				div2_2_1[0].innerHTML = div2_2_1[0].innerHTML.slice(0,5);
			}else if (textlength1 == 9) {
				div2_2_1[0].innerHTML = div2_2_1[0].innerHTML.slice(0,7);
			}
			div2_2_2.html("&yen;"+objArr[i].marketPrice);
			var textlength2 =  div2_2_2[0].innerHTML.length;
			if (textlength2 == 7) {
				div2_2_2[0].innerHTML = div2_2_2[0].innerHTML.slice(0,5);
			}else if (textlength2 == 9) {
				div2_2_2[0].innerHTML = div2_2_2[0].innerHTML.slice(0,7);
			}
			div2_2.append(div2_2_1);
			div2_2.append(div2_2_2);
			div2.append(div2_1);
			div2.append(div2_2);
			div1.prepend(img);
			a.append(div1);
			a.append(div2);
			li.append(a);
			ul.append(li);
		}
}

// function brushOne() {
// 	var brush_sort = $("#brush_sort");
// 	var down_arrow1 = $(".down_arrow1");
// 	if ($(".down_arrow1").text() == "1") {
// 		brush_sort.css("display","block");
// 		down_arrow1.css("background-image","url(../images/4downArrow.png)");
// 		$(".down_arrow1").text("");
// 	} else {
// 		brush_sort.css("display","none");
// 		down_arrow1.css("background-image","url(../images/4topArrow.png)");
// 		$(".down_arrow1").text("1");
// 	}
// }
var isNone = true;
function brushOne() {
	var brush_sort = $("#brush_sort");
	var down_arrow1 = $(".down_arrow1");
	if (isNone) {
		brush_sort.css("display","block");
		down_arrow1.css("background-image","url(../images/4downArrow.png)");
		isNone = false;
	} else {
		brush_sort.css("display","none");
		down_arrow1.css("background-image","url(../images/4topArrow.png)");
		isNone = true;
	}
}