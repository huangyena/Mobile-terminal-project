$.ajax({
	url:"../data/3-data.php?type=now_list",
	success:function(list){
		/*console.log(list);*/
		var obj = JSON.parse(list);
		/*console.log(obj);*/
	/*s*/
		for (var i = 0;i<4;i++){
			var li = $("<img class= 'img'>");
			li.attr("src",obj.ms[i].img);   //图
/*			console.log(li);
*/			var aa = $("<a href='' class= 'lijie'></a>");
			var em = $("<p>"+obj.ms[i].r+"</p>");


			var fontDiv = $("<div class = 'fontDiv'></div>");//字
			fontDiv.html(obj.ms[i].t);
			/*console.log(fontDiv);*/
			aa.append(li);
			aa.append(fontDiv);
			aa.append(li);
			aa.append(em);
			$(".a0").append(aa);
		}
		for (var i = 4;i<8;i++){
			var li = $("<img class= 'img'>");
			li.attr("src",obj.ms[i].img);
			/*console.log(li);*/
			var aa = $("<a href='' class= 'lijie'></a>");
			var fontDiv = $("<div class = 'fontDiv'></div>");
			var em = $("<p>"+obj.ms[i].r+"</p>");
			fontDiv.html(obj.ms[i].t);
			/*console.log(fontDiv);*/
			aa.append(li);
			aa.append(fontDiv);
			aa.append(em);
			$(".a1").append(aa);
		}
	}

});
$.ajax({
		url:"../data/data.php?type=now_hot",
	success:function(hot){
		/*console.log(hot);*/
		var ho = JSON.parse(hot);
		/*console.log(ho);
*/		for (var i = 0; i<3; i++){
			var img = $("<img class= 'hotPints_img'>");
			img.attr("src",ho.hotPoints[i].img);
			console.log(img);



			var z = $("<p class='z_p'></p>");
			z.html(ho.hotPoints[i].title);
			var z1 = $("<p class='z1_p'></p>");
			z1.html(ho.hotPoints[i].desc);


			var r = $("<p class='r_p'></p>")
			r.html(ho.hotPoints[i].d);

			var ul = $(".hotPints_ul");
			var li = $ ("<li class='hotPints_li'></li>");
			var a = $("<a href=''></a>");
			var div1 = $("<div ></div>");
			var div2 = $("<div ></div>");
			var div3 = $("<div class='wire'></div>");

			ul.append(li);
			li.append(a);
			a.prepend(div1);
			a.append(div2);
			div1.prepend(img);
			div2.append(z,z1,r);
			a.append(div3);
		}

	}
})