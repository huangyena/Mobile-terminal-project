$.ajax({
	url:"../data/3-data.php?type=now_list",
	success:function(list){
		/*console.log(list);*/
		var obj = JSON.parse(list);
		
		console.log(obj);
	/*s*/
		// console.log(obj.)
		for (var i = 0;i<4;i++){
			var li = $("<img class= 'img'>");
			var imgUrl = "http://imgproxy.mtime.cn/get.ashx?uri="+encodeURIComponent(obj.ms[i].img)+"&width=130&height=195&clipType=4"

			li.attr("src",imgUrl);   //图
/*			console.log(li);
*/			var aa = $("<a href='' onclick='window.history.back(-1)' class= 'lijie'></a>");
			var em = $("<p style = 'margin-left:7%;margin-top:5px'>"+obj.ms[i].r+"</p>");

			if(em.text()>1){
				aa.append(em);
			}else{
				aa.append(null);
			}

			var fontDiv = $("<div class = 'fontDiv'></div>");//字
			fontDiv.html(obj.ms[i].t);
			/*console.log(fontDiv);*/
			aa.append(li);
			
			aa.append(li);
			aa.append(fontDiv);
			
			$(".a0").append(aa);
		}
		for (var i = 4;i<8;i++){
			var li = $("<img class= 'img'>");
			var imgUrl = "http://imgproxy.mtime.cn/get.ashx?uri="+encodeURIComponent(obj.ms[i].img)+"&width=130&height=195&clipType=4"

			li.attr("src",imgUrl);
			/*console.log(li);*/
			var aa = $("<a href=href='3-particular.html?movieId="+obj.ms[i].id+"' class= 'lijie'></a>");
			var fontDiv = $("<div class = 'fontDiv'></div>");
			var em = $("<p style = 'margin-left:7%;margin-top:5px'>"+obj.ms[i].r+"</p>");
			fontDiv.html(obj.ms[i].t);
			console.log(em);
			if(em.text()>1){
				aa.append(em);
			}else{
				aa.append(null);
			}

			/*console.log(fontDiv);*/
			aa.append(li);
			aa.append(fontDiv);
			// aa.append(em);
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