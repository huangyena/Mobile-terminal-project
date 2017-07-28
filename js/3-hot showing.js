$.ajax({
	url:"../data/3-movie.php?type=nowMovie",
	success:function(a){
		var obj = JSON.parse(a);
		console.log(obj);
		console.log(obj.ms[0].id)
		for ( i = 0 ; i< obj.ms.length;  i++) {
			console.log(obj.ms[i].id)
			var li = $("<li class='li'></li>");
			var div = $("<div class='div1'></div>");
			var a = $("<a href='3-particulars.html?movieId="+obj.ms[i].id+"' id = 'aaaaa'></a>");
			var div1 = $("<div class='div2'></div>");

			var p = $("<p class='p'></p>");
			var p1 = $("<p class='p1'></p>");
			var p2 =$("<p class='p2'></p>");
			var p3 = $("<p class='p3'></p>");



			var span1 = $("<span class='span2'></span>");
				span1.html(obj.ms[i].r);

			var span = $("<span class='span1'></span>");
			span.html(obj.ms[i].t);
			var r = obj.ms[i].r;
			if(r==-1){
				
				span1.css("display","none");
			}else{
				span1.css("display","inline-block");
			};
			
			p1.html("“"+obj.ms[i].commonSpecial);
			var commonSpecial = (obj.ms[i].commonSpecial);
			if (commonSpecial=="") {
				p1.css("display","none");
			}else{
				p1.css("display","block");
			};


			var span2 = $("<span class='span2'></span>");
			

			var isIMAX3D =  (obj.ms[i].isIMAX3D);
			if (isIMAX3D == true) {
				span2.css("display","inline-block");
			}else{
				span2.css("display","none");
			}

			var span3 = $("<span class='span3'></span>");
			var isDMAX = (obj.ms[i].isDMAX);
			if(isDMAX==true){
				span3.css("display","inline-block");
			}else{
				span3.css("display","none");
			};
			var span4 = $("<span class='span4'></span>")
			var isIMAX = (obj.ms[i].isIMAX);
			if(isIMAX==true){
				span4.css("display","inline-block")
			}else{
				span4.css("display","none")
			}

			var span5 = $("<span class='span5'></span>");
			var span6 = $("<span class='span6'></span>");

			var a1 = $("<a href='shop.html' class=''></a>");
			console.log(a1);
			var span7 = $("<span>"+"购票"+"</span>");

			span5.html(obj.ms[i].cC+"家影院上映");
			span6.html(obj.ms[i].NearestShowtimeCount+"场");

			var img = $("<img src='' alt='' />");
			img.attr("src",obj.ms[i].img);
			/*console.log(img);
			console.log(li);*/
			li.append(div1);
			div1.append(p,p1,p2,p3);
			p.append(span,span1);
			p2.append(span2,span4,span3);
			p3.append(span5,span6,a1);
			a1.append(span7);
			li.prepend(a);
			a.append(div);
			div.append(img);
			$(".ul").append(li);

		}
	}
})