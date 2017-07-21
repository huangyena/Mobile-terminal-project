var objArr = [];
function getData(){
	$.ajax({
		url:"../data/Mall_search_data.php",
		data:"type=productList&categoryId=0",
		success:function (data) {
			var obj = JSON.parse(data);
			console.log(obj);
			console.log(obj.content.goods.goodsList);
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
	isNone1 = true;
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
		isNone1 = true;
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
		isNone1 = true;
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
		isNone1 = true;
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
			var textlength3 =  div2_1[0].innerHTML.length;
			if (textlength3 >= 11) {
				div2_1[0].innerHTML = div2_1[0].innerHTML.slice(0,11)+"...";
			}
			div2_2_1.html("&yen;"+objArr[i].minSalePrice);
			var textlength1 =  div2_2_1[0].innerHTML.length;
			if (textlength1 == 7) {
				div2_2_1[0].innerHTML = div2_2_1[0].innerHTML.slice(0,5);
			}else if (textlength1 == 6) {
				div2_2_1[0].innerHTML = div2_2_1[0].innerHTML.slice(0,4);
			}else if (textlength1 == 5) {
				div2_2_1[0].innerHTML = div2_2_1[0].innerHTML.slice(0,3);
			}
			div2_2_2.html("&yen;"+objArr[i].marketPrice);
			var textlength2 =  div2_2_2[0].innerHTML.length;
			if (textlength2 == 7) {
				div2_2_2[0].innerHTML = div2_2_2[0].innerHTML.slice(0,5);
			}else if (textlength2 == 6) {
				div2_2_2[0].innerHTML = div2_2_2[0].innerHTML.slice(0,4);
			}else if (textlength2 == 5) {
				div2_2_2[0].innerHTML = div2_2_2[0].innerHTML.slice(0,3);
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
var isNone1 = true;
function brushOne() {
	if (isNone1) {
		$("#brush_sort").css("display","block");
		$(".down_arrow1").css("background-image","url(../images/4downArrow.png)");
		isNone1 = false;
		$("#brush_theme").css("display","none");
		$(".down_arrow2").css("background-image","url(../images/4topArrow.png)");
		isNone2 = true;
		$("#brush_classify").css("display","none");
		$(".down_arrow3").css("background-image","url(../images/4topArrow.png)");
		isNone3 = true;
	} else {
		$("#brush_sort").css("display","none");
		$(".down_arrow1").css("background-image","url(../images/4topArrow.png)");
		isNone1 = true;
	}
}
var isNone2 = true;
function brushTwo() {
	if (isNone2) {
		$("#brush_theme").css("display","block");
		$(".down_arrow2").css("background-image","url(../images/4downArrow.png)");
		isNone2 = false;
		$("#brush_sort").css("display","none");
		$(".down_arrow1").css("background-image","url(../images/4topArrow.png)");
		isNone1 = true;
		$("#brush_classify").css("display","none");
		$(".down_arrow3").css("background-image","url(../images/4topArrow.png)");
		isNone3 = true;
	} else {
		$("#brush_theme").css("display","none");
		$(".down_arrow2").css("background-image","url(../images/4topArrow.png)");
		isNone2 = true;
	}
}
var isNone3 = true;
function brushThree() {
	if (isNone3) {
		$("#brush_classify").css("display","block");
		$(".down_arrow3").css("background-image","url(../images/4downArrow.png)");
		isNone3 = false;
		$("#brush_sort").css("display","none");
		$(".down_arrow1").css("background-image","url(../images/4topArrow.png)");
		isNone1 = true;
		$("#brush_theme").css("display","none");
		$(".down_arrow2").css("background-image","url(../images/4topArrow.png)");
		isNone2 = true;
	} else {
		$("#brush_classify").css("display","none");
		$(".down_arrow3").css("background-image","url(../images/4topArrow.png)");
		isNone3 = true;
	}
}

function themeLeftLi1() {
	$(".theme_leftLi1").css("background-color","white");
	$(".theme_leftLi2").css("background-color","rgb(240,240,240)");
	$(".theme_leftLi3").css("background-color","rgb(240,240,240)");
	$(".theme_leftLi4").css("background-color","rgb(240,240,240)");
	$(".theme_leftLi5").css("background-color","rgb(240,240,240)");
	$(".theme_leftLi6").css("background-color","rgb(240,240,240)");
	$(".leftLi_text1").css("color","rgb(30,125,215)");
	$(".leftLi_text2").css("color","black");
	$(".leftLi_text3").css("color","black");
	$(".leftLi_text4").css("color","black");
	$(".leftLi_text5").css("color","black");
	$(".leftLi_text6").css("color","black");
	$(".rightLi1").css("display","none");
	$(".rightLi1_2").css("display","none");
	$(".rightLi2").css("display","none");
	$(".rightLi2_2").css("display","none");
	$(".rightLi3").css("display","none");
	$(".rightLi3_2").css("display","none");
	$(".rightLi3_3").css("display","none");
	$("#brush_theme").css("display","none");
	$(".down_arrow2").css("background-image","url(../images/4topArrow.png)");
	isNone2 = true;
}
function themeLeftLi2() {
	$(".theme_leftLi1").css("background-color","rgb(240,240,240)");
	$(".theme_leftLi2").css("background-color","white");
	$(".theme_leftLi3").css("background-color","rgb(240,240,240)");
	$(".theme_leftLi4").css("background-color","rgb(240,240,240)");
	$(".theme_leftLi5").css("background-color","rgb(240,240,240)");
	$(".theme_leftLi6").css("background-color","rgb(240,240,240)");
	$(".leftLi_text1").css("color","black");
	$(".leftLi_text2").css("color","rgb(30,125,215)");
	$(".leftLi_text3").css("color","black");
	$(".leftLi_text4").css("color","black");
	$(".leftLi_text5").css("color","black");
	$(".leftLi_text6").css("color","black");
	$(".rightLi1").css("display","none");
	$(".rightLi1_2").css("display","none");
	$(".rightLi2").css("display","none");
	$(".rightLi2_2").css("display","none");
	$(".rightLi3").css("display","none");
	$(".rightLi3_2").css("display","none");
	$(".rightLi3_3").css("display","none");
	$("#brush_theme").css("display","none");
	$(".down_arrow2").css("background-image","url(../images/4topArrow.png)");
	isNone2 = true;
}
function themeLeftLi3() {
	$(".theme_leftLi1").css("background-color","rgb(240,240,240)");
	$(".theme_leftLi2").css("background-color","rgb(240,240,240)");
	$(".theme_leftLi3").css("background-color","white");
	$(".theme_leftLi4").css("background-color","rgb(240,240,240)");
	$(".theme_leftLi5").css("background-color","rgb(240,240,240)");
	$(".theme_leftLi6").css("background-color","rgb(240,240,240)");
	$(".leftLi_text1").css("color","black");
	$(".leftLi_text2").css("color","black");
	$(".leftLi_text3").css("color","rgb(30,125,215)");
	$(".leftLi_text4").css("color","black");
	$(".leftLi_text5").css("color","black");
	$(".leftLi_text6").css("color","black");
	$(".rightLi1").css("display","block");
	$(".rightLi1_2").css("display","block");
	$(".rightLi2").css("display","none");
	$(".rightLi2_2").css("display","none");
	$(".rightLi3").css("display","none");
	$(".rightLi3_2").css("display","none");
	$(".rightLi3_3").css("display","none");
}
function themeLeftLi4() {
	$(".theme_leftLi1").css("background-color","rgb(240,240,240)");
	$(".theme_leftLi2").css("background-color","rgb(240,240,240)");
	$(".theme_leftLi3").css("background-color","rgb(240,240,240)");
	$(".theme_leftLi4").css("background-color","white");
	$(".theme_leftLi5").css("background-color","rgb(240,240,240)");
	$(".theme_leftLi6").css("background-color","rgb(240,240,240)");
	$(".leftLi_text1").css("color","black");
	$(".leftLi_text2").css("color","black");
	$(".leftLi_text3").css("color","black");
	$(".leftLi_text4").css("color","rgb(30,125,215)");
	$(".leftLi_text5").css("color","black");
	$(".leftLi_text6").css("color","black");
	$(".rightLi1").css("display","none");
	$(".rightLi1_2").css("display","none");
	$(".rightLi2").css("display","none");
	$(".rightLi2_2").css("display","none");
	$(".rightLi3").css("display","none");
	$(".rightLi3_2").css("display","none");
	$(".rightLi3_3").css("display","none");
	$("#brush_theme").css("display","none");
	$(".down_arrow2").css("background-image","url(../images/4topArrow.png)");
	isNone2 = true;
}
function themeLeftLi5() {
	$(".theme_leftLi1").css("background-color","rgb(240,240,240)");
	$(".theme_leftLi2").css("background-color","rgb(240,240,240)");
	$(".theme_leftLi3").css("background-color","rgb(240,240,240)");
	$(".theme_leftLi4").css("background-color","rgb(240,240,240)");
	$(".theme_leftLi5").css("background-color","white");
	$(".theme_leftLi6").css("background-color","rgb(240,240,240)");
	$(".leftLi_text1").css("color","black");
	$(".leftLi_text2").css("color","black");
	$(".leftLi_text3").css("color","black");
	$(".leftLi_text4").css("color","black");
	$(".leftLi_text5").css("color","rgb(30,125,215)");
	$(".leftLi_text6").css("color","black");
	$(".rightLi1").css("display","none");
	$(".rightLi1_2").css("display","none");
	$(".rightLi2").css("display","block");
	$(".rightLi2_2").css("display","block");
	$(".rightLi3").css("display","none");
	$(".rightLi3_2").css("display","none");
	$(".rightLi3_3").css("display","none");
	
}
function themeLeftLi6() {
	$(".theme_leftLi1").css("background-color","rgb(240,240,240)");
	$(".theme_leftLi2").css("background-color","rgb(240,240,240)");
	$(".theme_leftLi3").css("background-color","rgb(240,240,240)");
	$(".theme_leftLi4").css("background-color","rgb(240,240,240)");
	$(".theme_leftLi5").css("background-color","rgb(240,240,240)");
	$(".theme_leftLi6").css("background-color","white");
	$(".leftLi_text1").css("color","black");
	$(".leftLi_text2").css("color","black");
	$(".leftLi_text3").css("color","black");
	$(".leftLi_text4").css("color","black");
	$(".leftLi_text5").css("color","black");
	$(".leftLi_text6").css("color","rgb(30,125,215)");
	$(".rightLi1").css("display","none");
	$(".rightLi1_2").css("display","none");
	$(".rightLi2").css("display","none");
	$(".rightLi2_2").css("display","none");
	$(".rightLi3").css("display","block");
	$(".rightLi3_2").css("display","block");
	$(".rightLi3_3").css("display","block");
	
}
function themeRightLi1() {
	$(".rightLi1").css("color","rgb(30,125,215)");
	$(".rightLi1_2").css("color","black");
	$(".rightLi2").css("color","black");
	$(".rightLi2_2").css("color","black");
	$(".rightLi3").css("color","black");
	$(".rightLi3_2").css("color","black");
	$(".rightLi3_3").css("color","black");

	$(".rightLi1").css("border-bottom","1px solid rgb(30,125,215)");
	$(".rightLi1_2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi2_2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi3").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi3_2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi3_3").css("border-bottom","1px solid rgb(216,216,216)");

	$("#brush_theme").css("display","none");
	$(".down_arrow2").css("background-image","url(../images/4topArrow.png)");
	isNone2 = true;
}
function themeRightLi2() {
	$(".rightLi1").css("color","black");
	$(".rightLi1_2").css("color","rgb(30,125,215)");
	$(".rightLi2").css("color","black");
	$(".rightLi2_2").css("color","black");
	$(".rightLi3").css("color","black");
	$(".rightLi3_2").css("color","black");
	$(".rightLi3_3").css("color","black");

	$(".rightLi1").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi1_2").css("border-bottom","1px solid rgb(30,125,215)");
	$(".rightLi2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi2_2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi3").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi3_2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi3_3").css("border-bottom","1px solid rgb(216,216,216)");

	$("#brush_theme").css("display","none");
	$(".down_arrow2").css("background-image","url(../images/4topArrow.png)");
	isNone2 = true;
}
function themeRightLi3() {
	$(".rightLi1").css("color","black");
	$(".rightLi1_2").css("color","black");
	$(".rightLi2").css("color","rgb(30,125,215)");
	$(".rightLi2_2").css("color","black");
	$(".rightLi3").css("color","black");
	$(".rightLi3_2").css("color","black");
	$(".rightLi3_3").css("color","black");

	$(".rightLi1").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi1_2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi2").css("border-bottom","1px solid rgb(30,125,215)");
	$(".rightLi2_2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi3").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi3_2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi3_3").css("border-bottom","1px solid rgb(216,216,216)");

	$("#brush_theme").css("display","none");
	$(".down_arrow2").css("background-image","url(../images/4topArrow.png)");
	isNone2 = true;
}
function themeRightLi4() {
	$(".rightLi1").css("color","black");
	$(".rightLi1_2").css("color","black");
	$(".rightLi2").css("color","black");
	$(".rightLi2_2").css("color","rgb(30,125,215)");
	$(".rightLi3").css("color","black");
	$(".rightLi3_2").css("color","black");
	$(".rightLi3_3").css("color","black");

	$(".rightLi1").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi1_2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi2_2").css("border-bottom","1px solid rgb(30,125,215)");
	$(".rightLi3").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi3_2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi3_3").css("border-bottom","1px solid rgb(216,216,216)");

	$("#brush_theme").css("display","none");
	$(".down_arrow2").css("background-image","url(../images/4topArrow.png)");
	isNone2 = true;
}
function themeRightLi5() {
	$(".rightLi1").css("color","black");
	$(".rightLi1_2").css("color","black");
	$(".rightLi2").css("color","black");
	$(".rightLi2_2").css("color","black");
	$(".rightLi3").css("color","rgb(30,125,215)");
	$(".rightLi3_2").css("color","black");
	$(".rightLi3_3").css("color","black");

	$(".rightLi1").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi1_2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi2_2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi3").css("border-bottom","1px solid rgb(30,125,215)");
	$(".rightLi3_2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi3_3").css("border-bottom","1px solid rgb(216,216,216)");

	$("#brush_theme").css("display","none");
	$(".down_arrow2").css("background-image","url(../images/4topArrow.png)");
	isNone2 = true;
}
function themeRightLi6() {
	$(".rightLi1").css("color","black");
	$(".rightLi1_2").css("color","black");
	$(".rightLi2").css("color","black");
	$(".rightLi2_2").css("color","black");
	$(".rightLi3").css("color","black");
	$(".rightLi3_2").css("color","rgb(30,125,215)");
	$(".rightLi3_3").css("color","black");

	$(".rightLi1").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi1_2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi2_2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi3").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi3_2").css("border-bottom","1px solid rgb(30,125,215)");
	$(".rightLi3_3").css("border-bottom","1px solid rgb(216,216,216)");

	$("#brush_theme").css("display","none");
	$(".down_arrow2").css("background-image","url(../images/4topArrow.png)");
	isNone2 = true;
}
function themeRightLi7() {
	$(".rightLi1").css("color","black");
	$(".rightLi1_2").css("color","black");
	$(".rightLi2").css("color","black");
	$(".rightLi2_2").css("color","black");
	$(".rightLi3").css("color","black");
	$(".rightLi3_2").css("color","black");
	$(".rightLi3_3").css("color","rgb(30,125,215)");

	$(".rightLi1").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi1_2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi2_2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi3").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi3_2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".rightLi3_3").css("border-bottom","1px solid rgb(30,125,215)");

	$("#brush_theme").css("display","none");
	$(".down_arrow2").css("background-image","url(../images/4topArrow.png)");
	isNone2 = true;
}
function classify_leftLi1() {
	$(".classify_leftLi1").css("background-color","white");
	$(".classify_leftLi2").css("background-color","rgb(240,240,240)");
	$(".classify_leftLi3").css("background-color","rgb(240,240,240)");
	$(".classify_leftLi4").css("background-color","rgb(240,240,240)");
	$(".classify_leftLi5").css("background-color","rgb(240,240,240)");
	$(".classify_leftLi1").css("color","rgb(30,125,215)");
	$(".classify_leftLi2").css("color","black");
	$(".classify_leftLi3").css("color","black");
	$(".classify_leftLi4").css("color","black");
	$(".classify_leftLi5").css("color","black");

	$(".classify_rightLi1").css("display","none");
	$(".classify_rightLi2").css("display","none");
	$(".classify_rightLi3").css("display","none");
	$(".classify_rightLi4").css("display","none");
	$(".classify_rightLi5").css("display","none");
	$(".classify_rightLi6").css("display","none");
	$(".classify_rightLi7").css("display","none");
	$(".classify_rightLi8").css("display","none");
	$(".classify_rightLi9").css("display","none");
	$(".classify_rightLi10").css("display","none");
	$(".classify_rightLi11").css("display","none");
	$(".classify_rightLi12").css("display","none");
	$(".classify_rightLi13").css("display","none");
	$(".classify_rightLi14").css("display","none");
	$(".classify_rightLi15").css("display","none");
	$(".classify_rightLi16").css("display","none");
	$(".classify_rightLi17").css("display","none");
	$(".classify_rightLi18").css("display","none");
	$(".classify_rightLi19").css("display","none");
	$(".classify_rightLi20").css("display","none");
	$(".classify_rightLi21").css("display","none");

	$("#brush_classify").css("display","none");
	$(".down_arrow3").css("background-image","url(../images/4topArrow.png)");
	isNone3 = true;
}
function classify_leftLi2() {
	$(".classify_leftLi1").css("background-color","rgb(240,240,240)");
	$(".classify_leftLi2").css("background-color","white");
	$(".classify_leftLi3").css("background-color","rgb(240,240,240)");
	$(".classify_leftLi4").css("background-color","rgb(240,240,240)");
	$(".classify_leftLi5").css("background-color","rgb(240,240,240)");
	$(".classify_leftLi1").css("color","black");
	$(".classify_leftLi2").css("color","rgb(30,125,215)");
	$(".classify_leftLi3").css("color","black");
	$(".classify_leftLi4").css("color","black");
	$(".classify_leftLi5").css("color","black");

	$(".classify_rightLi1").css("display","block");
	$(".classify_rightLi2").css("display","block");
	$(".classify_rightLi3").css("display","block");
	$(".classify_rightLi4").css("display","block");
	$(".classify_rightLi5").css("display","block");
	$(".classify_rightLi6").css("display","none");
	$(".classify_rightLi7").css("display","none");
	$(".classify_rightLi8").css("display","none");
	$(".classify_rightLi9").css("display","none");
	$(".classify_rightLi10").css("display","none");
	$(".classify_rightLi11").css("display","none");
	$(".classify_rightLi12").css("display","none");
	$(".classify_rightLi13").css("display","none");
	$(".classify_rightLi14").css("display","none");
	$(".classify_rightLi15").css("display","none");
	$(".classify_rightLi16").css("display","none");
	$(".classify_rightLi17").css("display","none");
	$(".classify_rightLi18").css("display","none");
	$(".classify_rightLi19").css("display","none");
	$(".classify_rightLi20").css("display","none");
	$(".classify_rightLi21").css("display","none");
}
function classify_leftLi3() {
	$(".classify_leftLi1").css("background-color","rgb(240,240,240)");
	$(".classify_leftLi2").css("background-color","rgb(240,240,240)");
	$(".classify_leftLi3").css("background-color","white");
	$(".classify_leftLi4").css("background-color","rgb(240,240,240)");
	$(".classify_leftLi5").css("background-color","rgb(240,240,240)");
	$(".classify_leftLi1").css("color","black");
	$(".classify_leftLi2").css("color","black");
	$(".classify_leftLi3").css("color","rgb(30,125,215)");
	$(".classify_leftLi4").css("color","black");
	$(".classify_leftLi5").css("color","black");

	$(".classify_rightLi1").css("display","none");
	$(".classify_rightLi2").css("display","none");
	$(".classify_rightLi3").css("display","none");
	$(".classify_rightLi4").css("display","none");
	$(".classify_rightLi5").css("display","none");
	$(".classify_rightLi6").css("display","block");
	$(".classify_rightLi7").css("display","block");
	$(".classify_rightLi8").css("display","block");
	$(".classify_rightLi9").css("display","block");
	$(".classify_rightLi10").css("display","block");
	$(".classify_rightLi11").css("display","none");
	$(".classify_rightLi12").css("display","none");
	$(".classify_rightLi13").css("display","none");
	$(".classify_rightLi14").css("display","none");
	$(".classify_rightLi15").css("display","none");
	$(".classify_rightLi16").css("display","none");
	$(".classify_rightLi17").css("display","none");
	$(".classify_rightLi18").css("display","none");
	$(".classify_rightLi19").css("display","none");
	$(".classify_rightLi20").css("display","none");
	$(".classify_rightLi21").css("display","none");
}
function classify_leftLi4() {
	$(".classify_leftLi1").css("background-color","rgb(240,240,240)");
	$(".classify_leftLi2").css("background-color","rgb(240,240,240)");
	$(".classify_leftLi3").css("background-color","rgb(240,240,240)");
	$(".classify_leftLi4").css("background-color","white");
	$(".classify_leftLi5").css("background-color","rgb(240,240,240)");
	$(".classify_leftLi1").css("color","black");
	$(".classify_leftLi2").css("color","black");
	$(".classify_leftLi3").css("color","black");
	$(".classify_leftLi4").css("color","rgb(30,125,215)");
	$(".classify_leftLi5").css("color","black");

	$(".classify_rightLi1").css("display","none");
	$(".classify_rightLi2").css("display","none");
	$(".classify_rightLi3").css("display","none");
	$(".classify_rightLi4").css("display","none");
	$(".classify_rightLi5").css("display","none");
	$(".classify_rightLi6").css("display","none");
	$(".classify_rightLi7").css("display","none");
	$(".classify_rightLi8").css("display","none");
	$(".classify_rightLi9").css("display","none");
	$(".classify_rightLi10").css("display","none");
	$(".classify_rightLi11").css("display","block");
	$(".classify_rightLi12").css("display","block");
	$(".classify_rightLi13").css("display","block");
	$(".classify_rightLi14").css("display","block");
	$(".classify_rightLi15").css("display","block");
	$(".classify_rightLi16").css("display","block");
	$(".classify_rightLi17").css("display","none");
	$(".classify_rightLi18").css("display","none");
	$(".classify_rightLi19").css("display","none");
	$(".classify_rightLi20").css("display","none");
	$(".classify_rightLi21").css("display","none");
}
function classify_leftLi5() {
	$(".classify_leftLi1").css("background-color","rgb(240,240,240)");
	$(".classify_leftLi2").css("background-color","rgb(240,240,240)");
	$(".classify_leftLi3").css("background-color","rgb(240,240,240)");
	$(".classify_leftLi4").css("background-color","rgb(240,240,240)");
	$(".classify_leftLi5").css("background-color","white");
	$(".classify_leftLi1").css("color","black");
	$(".classify_leftLi2").css("color","black");
	$(".classify_leftLi3").css("color","black");
	$(".classify_leftLi4").css("color","black");
	$(".classify_leftLi5").css("color","rgb(30,125,215)");

	$(".classify_rightLi1").css("display","none");
	$(".classify_rightLi2").css("display","none");
	$(".classify_rightLi3").css("display","none");
	$(".classify_rightLi4").css("display","none");
	$(".classify_rightLi5").css("display","none");
	$(".classify_rightLi6").css("display","none");
	$(".classify_rightLi7").css("display","none");
	$(".classify_rightLi8").css("display","none");
	$(".classify_rightLi9").css("display","none");
	$(".classify_rightLi10").css("display","none");
	$(".classify_rightLi11").css("display","none");
	$(".classify_rightLi12").css("display","none");
	$(".classify_rightLi13").css("display","none");
	$(".classify_rightLi14").css("display","none");
	$(".classify_rightLi15").css("display","none");
	$(".classify_rightLi16").css("display","none");
	$(".classify_rightLi17").css("display","block");
	$(".classify_rightLi18").css("display","block");
	$(".classify_rightLi19").css("display","block");
	$(".classify_rightLi20").css("display","block");
	$(".classify_rightLi21").css("display","block");
}

function classify_rightLi1() {
	$(".classify_rightLi1").css("color","rgb(30,125,215)");
	$(".classify_rightLi2").css("color","black");
	$(".classify_rightLi3").css("color","black");
	$(".classify_rightLi4").css("color","black");
	$(".classify_rightLi5").css("color","black");
	$(".classify_rightLi6").css("color","black");
	$(".classify_rightLi7").css("color","black");
	$(".classify_rightLi8").css("color","black");
	$(".classify_rightLi9").css("color","black");
	$(".classify_rightLi10").css("color","black");
	$(".classify_rightLi11").css("color","black");
	$(".classify_rightLi12").css("color","black");
	$(".classify_rightLi13").css("color","black");
	$(".classify_rightLi14").css("color","black");
	$(".classify_rightLi15").css("color","black");
	$(".classify_rightLi16").css("color","black");
	$(".classify_rightLi17").css("color","black");
	$(".classify_rightLi18").css("color","black");
	$(".classify_rightLi19").css("color","black");
	$(".classify_rightLi20").css("color","black");
	$(".classify_rightLi21").css("color","black");

	$(".classify_rightLi1").css("border-bottom","1px solid rgb(30,125,215)");
	$(".classify_rightLi2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi3").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi4").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi5").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi6").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi7").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi8").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi9").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi10").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi11").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi12").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi13").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi14").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi15").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi16").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi17").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi18").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi19").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi20").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi21").css("border-bottom","1px solid rgb(216,216,216)");

	$("#brush_classify").css("display","none");
	$(".down_arrow3").css("background-image","url(../images/4topArrow.png)");
	isNone3 = true;
}
function classify_rightLi2() {
	$(".classify_rightLi1").css("color","black");
	$(".classify_rightLi2").css("color","rgb(30,125,215)");
	$(".classify_rightLi3").css("color","black");
	$(".classify_rightLi4").css("color","black");
	$(".classify_rightLi5").css("color","black");
	$(".classify_rightLi6").css("color","black");
	$(".classify_rightLi7").css("color","black");
	$(".classify_rightLi8").css("color","black");
	$(".classify_rightLi9").css("color","black");
	$(".classify_rightLi10").css("color","black");
	$(".classify_rightLi11").css("color","black");
	$(".classify_rightLi12").css("color","black");
	$(".classify_rightLi13").css("color","black");
	$(".classify_rightLi14").css("color","black");
	$(".classify_rightLi15").css("color","black");
	$(".classify_rightLi16").css("color","black");
	$(".classify_rightLi17").css("color","black");
	$(".classify_rightLi18").css("color","black");
	$(".classify_rightLi19").css("color","black");
	$(".classify_rightLi20").css("color","black");
	$(".classify_rightLi21").css("color","black");

	$(".classify_rightLi1").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi2").css("border-bottom","1px solid rgb(30,125,215)");
	$(".classify_rightLi3").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi4").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi5").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi6").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi7").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi8").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi9").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi10").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi11").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi12").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi13").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi14").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi15").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi16").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi17").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi18").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi19").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi20").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi21").css("border-bottom","1px solid rgb(216,216,216)");

	$("#brush_classify").css("display","none");
	$(".down_arrow3").css("background-image","url(../images/4topArrow.png)");
	isNone3 = true;
}
function classify_rightLi3() {
	$(".classify_rightLi1").css("color","black");
	$(".classify_rightLi2").css("color","black");
	$(".classify_rightLi3").css("color","rgb(30,125,215)");
	$(".classify_rightLi4").css("color","black");
	$(".classify_rightLi5").css("color","black");
	$(".classify_rightLi6").css("color","black");
	$(".classify_rightLi7").css("color","black");
	$(".classify_rightLi8").css("color","black");
	$(".classify_rightLi9").css("color","black");
	$(".classify_rightLi10").css("color","black");
	$(".classify_rightLi11").css("color","black");
	$(".classify_rightLi12").css("color","black");
	$(".classify_rightLi13").css("color","black");
	$(".classify_rightLi14").css("color","black");
	$(".classify_rightLi15").css("color","black");
	$(".classify_rightLi16").css("color","black");
	$(".classify_rightLi17").css("color","black");
	$(".classify_rightLi18").css("color","black");
	$(".classify_rightLi19").css("color","black");
	$(".classify_rightLi20").css("color","black");
	$(".classify_rightLi21").css("color","black");

	$(".classify_rightLi1").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi3").css("border-bottom","1px solid rgb(30,125,215)");
	$(".classify_rightLi4").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi5").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi6").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi7").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi8").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi9").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi10").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi11").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi12").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi13").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi14").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi15").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi16").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi17").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi18").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi19").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi20").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi21").css("border-bottom","1px solid rgb(216,216,216)");

	$("#brush_classify").css("display","none");
	$(".down_arrow3").css("background-image","url(../images/4topArrow.png)");
	isNone3 = true;
}
function classify_rightLi4() {
	$(".classify_rightLi1").css("color","black");
	$(".classify_rightLi2").css("color","black");
	$(".classify_rightLi3").css("color","black");
	$(".classify_rightLi4").css("color","rgb(30,125,215)");
	$(".classify_rightLi5").css("color","black");
	$(".classify_rightLi6").css("color","black");
	$(".classify_rightLi7").css("color","black");
	$(".classify_rightLi8").css("color","black");
	$(".classify_rightLi9").css("color","black");
	$(".classify_rightLi10").css("color","black");
	$(".classify_rightLi11").css("color","black");
	$(".classify_rightLi12").css("color","black");
	$(".classify_rightLi13").css("color","black");
	$(".classify_rightLi14").css("color","black");
	$(".classify_rightLi15").css("color","black");
	$(".classify_rightLi16").css("color","black");
	$(".classify_rightLi17").css("color","black");
	$(".classify_rightLi18").css("color","black");
	$(".classify_rightLi19").css("color","black");
	$(".classify_rightLi20").css("color","black");
	$(".classify_rightLi21").css("color","black");

	$(".classify_rightLi1").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi3").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi4").css("border-bottom","1px solid rgb(30,125,215)");
	$(".classify_rightLi5").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi6").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi7").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi8").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi9").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi10").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi11").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi12").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi13").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi14").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi15").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi16").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi17").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi18").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi19").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi20").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi21").css("border-bottom","1px solid rgb(216,216,216)");

	$("#brush_classify").css("display","none");
	$(".down_arrow3").css("background-image","url(../images/4topArrow.png)");
	isNone3 = true;
}
function classify_rightLi5() {
	$(".classify_rightLi1").css("color","black");
	$(".classify_rightLi2").css("color","black");
	$(".classify_rightLi3").css("color","black");
	$(".classify_rightLi4").css("color","black");
	$(".classify_rightLi5").css("color","rgb(30,125,215)");
	$(".classify_rightLi6").css("color","black");
	$(".classify_rightLi7").css("color","black");
	$(".classify_rightLi8").css("color","black");
	$(".classify_rightLi9").css("color","black");
	$(".classify_rightLi10").css("color","black");
	$(".classify_rightLi11").css("color","black");
	$(".classify_rightLi12").css("color","black");
	$(".classify_rightLi13").css("color","black");
	$(".classify_rightLi14").css("color","black");
	$(".classify_rightLi15").css("color","black");
	$(".classify_rightLi16").css("color","black");
	$(".classify_rightLi17").css("color","black");
	$(".classify_rightLi18").css("color","black");
	$(".classify_rightLi19").css("color","black");
	$(".classify_rightLi20").css("color","black");
	$(".classify_rightLi21").css("color","black");

	$(".classify_rightLi1").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi3").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi4").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi5").css("border-bottom","1px solid rgb(30,125,215)");
	$(".classify_rightLi6").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi7").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi8").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi9").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi10").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi11").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi12").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi13").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi14").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi15").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi16").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi17").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi18").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi19").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi20").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi21").css("border-bottom","1px solid rgb(216,216,216)");

	$("#brush_classify").css("display","none");
	$(".down_arrow3").css("background-image","url(../images/4topArrow.png)");
	isNone3 = true;
}
function classify_rightLi6() {
	$(".classify_rightLi1").css("color","black");
	$(".classify_rightLi2").css("color","black");
	$(".classify_rightLi3").css("color","black");
	$(".classify_rightLi4").css("color","black");
	$(".classify_rightLi5").css("color","black");
	$(".classify_rightLi6").css("color","rgb(30,125,215)");
	$(".classify_rightLi7").css("color","black");
	$(".classify_rightLi8").css("color","black");
	$(".classify_rightLi9").css("color","black");
	$(".classify_rightLi10").css("color","black");
	$(".classify_rightLi11").css("color","black");
	$(".classify_rightLi12").css("color","black");
	$(".classify_rightLi13").css("color","black");
	$(".classify_rightLi14").css("color","black");
	$(".classify_rightLi15").css("color","black");
	$(".classify_rightLi16").css("color","black");
	$(".classify_rightLi17").css("color","black");
	$(".classify_rightLi18").css("color","black");
	$(".classify_rightLi19").css("color","black");
	$(".classify_rightLi20").css("color","black");
	$(".classify_rightLi21").css("color","black");

	$(".classify_rightLi1").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi3").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi4").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi5").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi6").css("border-bottom","1px solid rgb(30,125,215)");
	$(".classify_rightLi7").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi8").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi9").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi10").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi11").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi12").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi13").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi14").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi15").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi16").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi17").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi18").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi19").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi20").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi21").css("border-bottom","1px solid rgb(216,216,216)");

	$("#brush_classify").css("display","none");
	$(".down_arrow3").css("background-image","url(../images/4topArrow.png)");
	isNone3 = true;
}
function classify_rightLi7() {
	$(".classify_rightLi1").css("color","black");
	$(".classify_rightLi2").css("color","black");
	$(".classify_rightLi3").css("color","black");
	$(".classify_rightLi4").css("color","black");
	$(".classify_rightLi5").css("color","black");
	$(".classify_rightLi6").css("color","black");
	$(".classify_rightLi7").css("color","rgb(30,125,215)");
	$(".classify_rightLi8").css("color","black");
	$(".classify_rightLi9").css("color","black");
	$(".classify_rightLi10").css("color","black");
	$(".classify_rightLi11").css("color","black");
	$(".classify_rightLi12").css("color","black");
	$(".classify_rightLi13").css("color","black");
	$(".classify_rightLi14").css("color","black");
	$(".classify_rightLi15").css("color","black");
	$(".classify_rightLi16").css("color","black");
	$(".classify_rightLi17").css("color","black");
	$(".classify_rightLi18").css("color","black");
	$(".classify_rightLi19").css("color","black");
	$(".classify_rightLi20").css("color","black");
	$(".classify_rightLi21").css("color","black");

	$(".classify_rightLi1").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi3").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi4").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi5").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi6").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi7").css("border-bottom","1px solid rgb(30,125,215)");
	$(".classify_rightLi8").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi9").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi10").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi11").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi12").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi13").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi14").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi15").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi16").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi17").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi18").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi19").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi20").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi21").css("border-bottom","1px solid rgb(216,216,216)");

	$("#brush_classify").css("display","none");
	$(".down_arrow3").css("background-image","url(../images/4topArrow.png)");
	isNone3 = true;
}
function classify_rightLi8() {
	$(".classify_rightLi1").css("color","black");
	$(".classify_rightLi2").css("color","black");
	$(".classify_rightLi3").css("color","black");
	$(".classify_rightLi4").css("color","black");
	$(".classify_rightLi5").css("color","black");
	$(".classify_rightLi6").css("color","black");
	$(".classify_rightLi7").css("color","black");
	$(".classify_rightLi8").css("color","rgb(30,125,215)");
	$(".classify_rightLi9").css("color","black");
	$(".classify_rightLi10").css("color","black");
	$(".classify_rightLi11").css("color","black");
	$(".classify_rightLi12").css("color","black");
	$(".classify_rightLi13").css("color","black");
	$(".classify_rightLi14").css("color","black");
	$(".classify_rightLi15").css("color","black");
	$(".classify_rightLi16").css("color","black");
	$(".classify_rightLi17").css("color","black");
	$(".classify_rightLi18").css("color","black");
	$(".classify_rightLi19").css("color","black");
	$(".classify_rightLi20").css("color","black");
	$(".classify_rightLi21").css("color","black");

	$(".classify_rightLi1").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi3").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi4").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi5").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi6").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi7").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi8").css("border-bottom","1px solid rgb(30,125,215)");
	$(".classify_rightLi9").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi10").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi11").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi12").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi13").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi14").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi15").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi16").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi17").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi18").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi19").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi20").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi21").css("border-bottom","1px solid rgb(216,216,216)");

	$("#brush_classify").css("display","none");
	$(".down_arrow3").css("background-image","url(../images/4topArrow.png)");
	isNone3 = true;
}
function classify_rightLi9() {
	$(".classify_rightLi1").css("color","black");
	$(".classify_rightLi2").css("color","black");
	$(".classify_rightLi3").css("color","black");
	$(".classify_rightLi4").css("color","black");
	$(".classify_rightLi5").css("color","black");
	$(".classify_rightLi6").css("color","black");
	$(".classify_rightLi7").css("color","black");
	$(".classify_rightLi8").css("color","black");
	$(".classify_rightLi9").css("color","rgb(30,125,215)");
	$(".classify_rightLi10").css("color","black");
	$(".classify_rightLi11").css("color","black");
	$(".classify_rightLi12").css("color","black");
	$(".classify_rightLi13").css("color","black");
	$(".classify_rightLi14").css("color","black");
	$(".classify_rightLi15").css("color","black");
	$(".classify_rightLi16").css("color","black");
	$(".classify_rightLi17").css("color","black");
	$(".classify_rightLi18").css("color","black");
	$(".classify_rightLi19").css("color","black");
	$(".classify_rightLi20").css("color","black");
	$(".classify_rightLi21").css("color","black");

	$(".classify_rightLi1").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi3").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi4").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi5").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi6").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi7").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi8").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi9").css("border-bottom","1px solid rgb(30,125,215)");
	$(".classify_rightLi10").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi11").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi12").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi13").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi14").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi15").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi16").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi17").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi18").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi19").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi20").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi21").css("border-bottom","1px solid rgb(216,216,216)");

	$("#brush_classify").css("display","none");
	$(".down_arrow3").css("background-image","url(../images/4topArrow.png)");
	isNone3 = true;
}
function classify_rightLi10() {
	$(".classify_rightLi1").css("color","black");
	$(".classify_rightLi2").css("color","black");
	$(".classify_rightLi3").css("color","black");
	$(".classify_rightLi4").css("color","black");
	$(".classify_rightLi5").css("color","black");
	$(".classify_rightLi6").css("color","black");
	$(".classify_rightLi7").css("color","black");
	$(".classify_rightLi8").css("color","black");
	$(".classify_rightLi9").css("color","black");
	$(".classify_rightLi10").css("color","rgb(30,125,215)");
	$(".classify_rightLi11").css("color","black");
	$(".classify_rightLi12").css("color","black");
	$(".classify_rightLi13").css("color","black");
	$(".classify_rightLi14").css("color","black");
	$(".classify_rightLi15").css("color","black");
	$(".classify_rightLi16").css("color","black");
	$(".classify_rightLi17").css("color","black");
	$(".classify_rightLi18").css("color","black");
	$(".classify_rightLi19").css("color","black");
	$(".classify_rightLi20").css("color","black");
	$(".classify_rightLi21").css("color","black");

	$(".classify_rightLi1").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi3").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi4").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi5").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi6").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi7").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi8").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi9").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi10").css("border-bottom","1px solid rgb(30,125,215)");
	$(".classify_rightLi11").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi12").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi13").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi14").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi15").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi16").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi17").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi18").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi19").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi20").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi21").css("border-bottom","1px solid rgb(216,216,216)");

	$("#brush_classify").css("display","none");
	$(".down_arrow3").css("background-image","url(../images/4topArrow.png)");
	isNone3 = true;
}
function classify_rightLi11() {
	$(".classify_rightLi1").css("color","black");
	$(".classify_rightLi2").css("color","black");
	$(".classify_rightLi3").css("color","black");
	$(".classify_rightLi4").css("color","black");
	$(".classify_rightLi5").css("color","black");
	$(".classify_rightLi6").css("color","black");
	$(".classify_rightLi7").css("color","black");
	$(".classify_rightLi8").css("color","black");
	$(".classify_rightLi9").css("color","black");
	$(".classify_rightLi10").css("color","black");
	$(".classify_rightLi11").css("color","rgb(30,125,215)");
	$(".classify_rightLi12").css("color","black");
	$(".classify_rightLi13").css("color","black");
	$(".classify_rightLi14").css("color","black");
	$(".classify_rightLi15").css("color","black");
	$(".classify_rightLi16").css("color","black");
	$(".classify_rightLi17").css("color","black");
	$(".classify_rightLi18").css("color","black");
	$(".classify_rightLi19").css("color","black");
	$(".classify_rightLi20").css("color","black");
	$(".classify_rightLi21").css("color","black");

	$(".classify_rightLi1").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi3").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi4").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi5").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi6").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi7").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi8").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi9").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi10").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi11").css("border-bottom","1px solid rgb(30,125,215)");
	$(".classify_rightLi12").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi13").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi14").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi15").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi16").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi17").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi18").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi19").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi20").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi21").css("border-bottom","1px solid rgb(216,216,216)");

	$("#brush_classify").css("display","none");
	$(".down_arrow3").css("background-image","url(../images/4topArrow.png)");
	isNone3 = true;
}
function classify_rightLi12() {
	$(".classify_rightLi1").css("color","black");
	$(".classify_rightLi2").css("color","black");
	$(".classify_rightLi3").css("color","black");
	$(".classify_rightLi4").css("color","black");
	$(".classify_rightLi5").css("color","black");
	$(".classify_rightLi6").css("color","black");
	$(".classify_rightLi7").css("color","black");
	$(".classify_rightLi8").css("color","black");
	$(".classify_rightLi9").css("color","black");
	$(".classify_rightLi10").css("color","black");
	$(".classify_rightLi11").css("color","black");
	$(".classify_rightLi12").css("color","rgb(30,125,215)");
	$(".classify_rightLi13").css("color","black");
	$(".classify_rightLi14").css("color","black");
	$(".classify_rightLi15").css("color","black");
	$(".classify_rightLi16").css("color","black");
	$(".classify_rightLi17").css("color","black");
	$(".classify_rightLi18").css("color","black");
	$(".classify_rightLi19").css("color","black");
	$(".classify_rightLi20").css("color","black");
	$(".classify_rightLi21").css("color","black");

	$(".classify_rightLi1").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi3").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi4").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi5").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi6").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi7").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi8").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi9").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi10").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi11").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi12").css("border-bottom","1px solid rgb(30,125,215)");
	$(".classify_rightLi13").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi14").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi15").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi16").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi17").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi18").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi19").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi20").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi21").css("border-bottom","1px solid rgb(216,216,216)");

	$("#brush_classify").css("display","none");
	$(".down_arrow3").css("background-image","url(../images/4topArrow.png)");
	isNone3 = true;
}
function classify_rightLi13() {
	$(".classify_rightLi1").css("color","black");
	$(".classify_rightLi2").css("color","black");
	$(".classify_rightLi3").css("color","black");
	$(".classify_rightLi4").css("color","black");
	$(".classify_rightLi5").css("color","black");
	$(".classify_rightLi6").css("color","black");
	$(".classify_rightLi7").css("color","black");
	$(".classify_rightLi8").css("color","black");
	$(".classify_rightLi9").css("color","black");
	$(".classify_rightLi10").css("color","black");
	$(".classify_rightLi11").css("color","black");
	$(".classify_rightLi12").css("color","black");
	$(".classify_rightLi13").css("color","rgb(30,125,215)");
	$(".classify_rightLi14").css("color","black");
	$(".classify_rightLi15").css("color","black");
	$(".classify_rightLi16").css("color","black");
	$(".classify_rightLi17").css("color","black");
	$(".classify_rightLi18").css("color","black");
	$(".classify_rightLi19").css("color","black");
	$(".classify_rightLi20").css("color","black");
	$(".classify_rightLi21").css("color","black");

	$(".classify_rightLi1").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi3").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi4").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi5").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi6").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi7").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi8").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi9").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi10").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi11").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi12").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi13").css("border-bottom","1px solid rgb(30,125,215)");
	$(".classify_rightLi14").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi15").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi16").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi17").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi18").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi19").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi20").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi21").css("border-bottom","1px solid rgb(216,216,216)");

	$("#brush_classify").css("display","none");
	$(".down_arrow3").css("background-image","url(../images/4topArrow.png)");
	isNone3 = true;
}
function classify_rightLi14() {
	$(".classify_rightLi1").css("color","black");
	$(".classify_rightLi2").css("color","black");
	$(".classify_rightLi3").css("color","black");
	$(".classify_rightLi4").css("color","black");
	$(".classify_rightLi5").css("color","black");
	$(".classify_rightLi6").css("color","black");
	$(".classify_rightLi7").css("color","black");
	$(".classify_rightLi8").css("color","black");
	$(".classify_rightLi9").css("color","black");
	$(".classify_rightLi10").css("color","black");
	$(".classify_rightLi11").css("color","black");
	$(".classify_rightLi12").css("color","black");
	$(".classify_rightLi13").css("color","black");
	$(".classify_rightLi14").css("color","rgb(30,125,215)");
	$(".classify_rightLi15").css("color","black");
	$(".classify_rightLi16").css("color","black");
	$(".classify_rightLi17").css("color","black");
	$(".classify_rightLi18").css("color","black");
	$(".classify_rightLi19").css("color","black");
	$(".classify_rightLi20").css("color","black");
	$(".classify_rightLi21").css("color","black");

	$(".classify_rightLi1").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi3").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi4").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi5").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi6").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi7").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi8").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi9").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi10").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi11").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi12").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi13").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi14").css("border-bottom","1px solid rgb(30,125,215)");
	$(".classify_rightLi15").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi16").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi17").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi18").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi19").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi20").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi21").css("border-bottom","1px solid rgb(216,216,216)");

	$("#brush_classify").css("display","none");
	$(".down_arrow3").css("background-image","url(../images/4topArrow.png)");
	isNone3 = true;
}
function classify_rightLi15() {
	$(".classify_rightLi1").css("color","black");
	$(".classify_rightLi2").css("color","black");
	$(".classify_rightLi3").css("color","black");
	$(".classify_rightLi4").css("color","black");
	$(".classify_rightLi5").css("color","black");
	$(".classify_rightLi6").css("color","black");
	$(".classify_rightLi7").css("color","black");
	$(".classify_rightLi8").css("color","black");
	$(".classify_rightLi9").css("color","black");
	$(".classify_rightLi10").css("color","black");
	$(".classify_rightLi11").css("color","black");
	$(".classify_rightLi12").css("color","black");
	$(".classify_rightLi13").css("color","black");
	$(".classify_rightLi14").css("color","black");
	$(".classify_rightLi15").css("color","rgb(30,125,215)");
	$(".classify_rightLi16").css("color","black");
	$(".classify_rightLi17").css("color","black");
	$(".classify_rightLi18").css("color","black");
	$(".classify_rightLi19").css("color","black");
	$(".classify_rightLi20").css("color","black");
	$(".classify_rightLi21").css("color","black");

	$(".classify_rightLi1").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi3").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi4").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi5").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi6").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi7").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi8").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi9").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi10").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi11").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi12").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi13").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi14").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi15").css("border-bottom","1px solid rgb(30,125,215)");
	$(".classify_rightLi16").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi17").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi18").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi19").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi20").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi21").css("border-bottom","1px solid rgb(216,216,216)");

	$("#brush_classify").css("display","none");
	$(".down_arrow3").css("background-image","url(../images/4topArrow.png)");
	isNone3 = true;
}
function classify_rightLi16() {
	$(".classify_rightLi1").css("color","black");
	$(".classify_rightLi2").css("color","black");
	$(".classify_rightLi3").css("color","black");
	$(".classify_rightLi4").css("color","black");
	$(".classify_rightLi5").css("color","black");
	$(".classify_rightLi6").css("color","black");
	$(".classify_rightLi7").css("color","black");
	$(".classify_rightLi8").css("color","black");
	$(".classify_rightLi9").css("color","black");
	$(".classify_rightLi10").css("color","black");
	$(".classify_rightLi11").css("color","black");
	$(".classify_rightLi12").css("color","black");
	$(".classify_rightLi13").css("color","black");
	$(".classify_rightLi14").css("color","black");
	$(".classify_rightLi15").css("color","black");
	$(".classify_rightLi16").css("color","rgb(30,125,215)");
	$(".classify_rightLi17").css("color","black");
	$(".classify_rightLi18").css("color","black");
	$(".classify_rightLi19").css("color","black");
	$(".classify_rightLi20").css("color","black");
	$(".classify_rightLi21").css("color","black");

	$(".classify_rightLi1").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi3").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi4").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi5").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi6").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi7").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi8").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi9").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi10").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi11").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi12").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi13").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi14").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi15").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi16").css("border-bottom","1px solid rgb(30,125,215)");
	$(".classify_rightLi17").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi18").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi19").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi20").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi21").css("border-bottom","1px solid rgb(216,216,216)");

	$("#brush_classify").css("display","none");
	$(".down_arrow3").css("background-image","url(../images/4topArrow.png)");
	isNone3 = true;
}
function classify_rightLi17() {
	$(".classify_rightLi1").css("color","black");
	$(".classify_rightLi2").css("color","black");
	$(".classify_rightLi3").css("color","black");
	$(".classify_rightLi4").css("color","black");
	$(".classify_rightLi5").css("color","black");
	$(".classify_rightLi6").css("color","black");
	$(".classify_rightLi7").css("color","black");
	$(".classify_rightLi8").css("color","black");
	$(".classify_rightLi9").css("color","black");
	$(".classify_rightLi10").css("color","black");
	$(".classify_rightLi11").css("color","black");
	$(".classify_rightLi12").css("color","black");
	$(".classify_rightLi13").css("color","black");
	$(".classify_rightLi14").css("color","black");
	$(".classify_rightLi15").css("color","black");
	$(".classify_rightLi16").css("color","black");
	$(".classify_rightLi17").css("color","rgb(30,125,215)");
	$(".classify_rightLi18").css("color","black");
	$(".classify_rightLi19").css("color","black");
	$(".classify_rightLi20").css("color","black");
	$(".classify_rightLi21").css("color","black");

	$(".classify_rightLi1").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi3").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi4").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi5").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi6").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi7").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi8").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi9").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi10").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi11").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi12").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi13").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi14").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi15").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi16").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi17").css("border-bottom","1px solid rgb(30,125,215)");
	$(".classify_rightLi18").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi19").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi20").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi21").css("border-bottom","1px solid rgb(216,216,216)");

	$("#brush_classify").css("display","none");
	$(".down_arrow3").css("background-image","url(../images/4topArrow.png)");
	isNone3 = true;
}
function classify_rightLi18() {
	$(".classify_rightLi1").css("color","black");
	$(".classify_rightLi2").css("color","black");
	$(".classify_rightLi3").css("color","black");
	$(".classify_rightLi4").css("color","black");
	$(".classify_rightLi5").css("color","black");
	$(".classify_rightLi6").css("color","black");
	$(".classify_rightLi7").css("color","black");
	$(".classify_rightLi8").css("color","black");
	$(".classify_rightLi9").css("color","black");
	$(".classify_rightLi10").css("color","black");
	$(".classify_rightLi11").css("color","black");
	$(".classify_rightLi12").css("color","black");
	$(".classify_rightLi13").css("color","black");
	$(".classify_rightLi14").css("color","black");
	$(".classify_rightLi15").css("color","black");
	$(".classify_rightLi16").css("color","black");
	$(".classify_rightLi17").css("color","black");
	$(".classify_rightLi18").css("color","rgb(30,125,215)");
	$(".classify_rightLi19").css("color","black");
	$(".classify_rightLi20").css("color","black");
	$(".classify_rightLi21").css("color","black");

	$(".classify_rightLi1").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi3").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi4").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi5").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi6").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi7").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi8").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi9").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi10").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi11").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi12").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi13").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi14").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi15").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi16").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi17").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi18").css("border-bottom","1px solid rgb(30,125,215)");
	$(".classify_rightLi19").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi20").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi21").css("border-bottom","1px solid rgb(216,216,216)");

	$("#brush_classify").css("display","none");
	$(".down_arrow3").css("background-image","url(../images/4topArrow.png)");
	isNone3 = true;
}
function classify_rightLi19() {
	$(".classify_rightLi1").css("color","black");
	$(".classify_rightLi2").css("color","black");
	$(".classify_rightLi3").css("color","black");
	$(".classify_rightLi4").css("color","black");
	$(".classify_rightLi5").css("color","black");
	$(".classify_rightLi6").css("color","black");
	$(".classify_rightLi7").css("color","black");
	$(".classify_rightLi8").css("color","black");
	$(".classify_rightLi9").css("color","black");
	$(".classify_rightLi10").css("color","black");
	$(".classify_rightLi11").css("color","black");
	$(".classify_rightLi12").css("color","black");
	$(".classify_rightLi13").css("color","black");
	$(".classify_rightLi14").css("color","black");
	$(".classify_rightLi15").css("color","black");
	$(".classify_rightLi16").css("color","black");
	$(".classify_rightLi17").css("color","black");
	$(".classify_rightLi18").css("color","black");
	$(".classify_rightLi19").css("color","rgb(30,125,215)");
	$(".classify_rightLi20").css("color","black");
	$(".classify_rightLi21").css("color","black");

	$(".classify_rightLi1").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi3").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi4").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi5").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi6").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi7").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi8").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi9").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi10").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi11").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi12").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi13").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi14").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi15").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi16").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi17").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi18").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi19").css("border-bottom","1px solid rgb(30,125,215)");
	$(".classify_rightLi20").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi21").css("border-bottom","1px solid rgb(216,216,216)");

	$("#brush_classify").css("display","none");
	$(".down_arrow3").css("background-image","url(../images/4topArrow.png)");
	isNone3 = true;
}
function classify_rightLi20() {
	$(".classify_rightLi1").css("color","black");
	$(".classify_rightLi2").css("color","black");
	$(".classify_rightLi3").css("color","black");
	$(".classify_rightLi4").css("color","black");
	$(".classify_rightLi5").css("color","black");
	$(".classify_rightLi6").css("color","black");
	$(".classify_rightLi7").css("color","black");
	$(".classify_rightLi8").css("color","black");
	$(".classify_rightLi9").css("color","black");
	$(".classify_rightLi10").css("color","black");
	$(".classify_rightLi11").css("color","black");
	$(".classify_rightLi12").css("color","black");
	$(".classify_rightLi13").css("color","black");
	$(".classify_rightLi14").css("color","black");
	$(".classify_rightLi15").css("color","black");
	$(".classify_rightLi16").css("color","black");
	$(".classify_rightLi17").css("color","black");
	$(".classify_rightLi18").css("color","black");
	$(".classify_rightLi19").css("color","black");
	$(".classify_rightLi20").css("color","rgb(30,125,215)");
	$(".classify_rightLi21").css("color","black");

	$(".classify_rightLi1").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi3").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi4").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi5").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi6").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi7").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi8").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi9").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi10").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi11").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi12").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi13").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi14").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi15").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi16").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi17").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi18").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi19").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi20").css("border-bottom","1px solid rgb(30,125,215)");
	$(".classify_rightLi21").css("border-bottom","1px solid rgb(216,216,216)");

	$("#brush_classify").css("display","none");
	$(".down_arrow3").css("background-image","url(../images/4topArrow.png)");
	isNone3 = true;
}
function classify_rightLi21() {
	$(".classify_rightLi1").css("color","black");
	$(".classify_rightLi2").css("color","black");
	$(".classify_rightLi3").css("color","black");
	$(".classify_rightLi4").css("color","black");
	$(".classify_rightLi5").css("color","black");
	$(".classify_rightLi6").css("color","black");
	$(".classify_rightLi7").css("color","black");
	$(".classify_rightLi8").css("color","black");
	$(".classify_rightLi9").css("color","black");
	$(".classify_rightLi10").css("color","black");
	$(".classify_rightLi11").css("color","black");
	$(".classify_rightLi12").css("color","black");
	$(".classify_rightLi13").css("color","black");
	$(".classify_rightLi14").css("color","black");
	$(".classify_rightLi15").css("color","black");
	$(".classify_rightLi16").css("color","black");
	$(".classify_rightLi17").css("color","black");
	$(".classify_rightLi18").css("color","black");
	$(".classify_rightLi19").css("color","black");
	$(".classify_rightLi20").css("color","black");
	$(".classify_rightLi21").css("color","rgb(30,125,215)");

	$(".classify_rightLi1").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi2").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi3").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi4").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi5").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi6").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi7").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi8").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi9").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi10").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi11").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi12").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi13").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi14").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi15").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi16").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi17").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi18").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi19").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi20").css("border-bottom","1px solid rgb(216,216,216)");
	$(".classify_rightLi21").css("border-bottom","1px solid rgb(30,125,215)");

	$("#brush_classify").css("display","none");
	$(".down_arrow3").css("background-image","url(../images/4topArrow.png)");
	isNone3 = true;
}