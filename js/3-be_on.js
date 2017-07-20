$.ajax({
	url:"../data/3-movie.php?type=willShow",
	success:function(a){
		var obj = JSON.parse(a);
		console.log(obj);
		for ( i = 0; i< 1 ;i++) {
			var li = $("<li></li>");
			var a = $("<a href=''></a>");
			var div = $("<div class='div1'></div>");
			var div1 = $("<div class='div2'></div>");

			var img = $("<img>");
			img.attr("src",obj.attention[i].image);

			var p = $("<p class='p'></p>");
			var p1 = $("<p class='p1'></p>");
			var p2 = $("<p class='p2'></p>");
			var p3 = $("<p class='p3'></p>");
			var p4 = $("<p class='p4'></p>");
			
			p.html(obj.attention[i].title);
			
			var span = $("<span class='span'></span>");
			span.html(obj.attention[i].wantedCount);

			var span1 = $("<span class='span1'>"+" 人想看 - "+"</span>");
			var span5 = $("<span class='span5'></span>")
			span5.html(obj.attention[i].type);

			p2.html("导演："+obj.attention[i].director);
			var span2 = $("<span class='span2'></span>");
			span2.html(obj.attention[i].actor2);
			p3.html("演员："+obj.attention[i].actor1+",");

			var a1 =$("<a href=''></a>");
			var a2 = $("<a href=''></a>");
			var span3 = $("<span class='span3'>"+"超前预售"+"</span>");
			var span4 = $("<span class='span4'>"+"预告前"+"</span>");

			$(".ul").append(li);
			li.append(a);
			li.append(div1);
			a.append(div);
			div.append(img);
			div1.append(p,p1,p2,p3);
			div1.append(p4);
			p1.append(span,span1,span5);
			p3.append(span2);
			p4.append(a1,a2);
			a1.append(span3);
			a2.append(span4);
		}
	}
	
});
$.ajax({
	url:"../data/3-movie.php?type=willShow",
	success:function(a){
		var obj = JSON.parse(a);
		console.log(obj);
		for ( i = 0; i< obj.moviecomings.length ;i++) {
			var li = $("<li></li>");
			var a = $("<a href=''></a>");
			var div = $("<div class='div3'></div>");
			var div1 = $("<div class='div4'></div>");

			var p = $("<p class='p5'></p>");
			var p1 = $("<p class='p6'></p>");
			var p2 = $("<p class='p7'></p>");
			var p3 = $("<p class='p8'></p>");


			p.html(obj.moviecomings[i].title);
			p2.html("导演："+obj.moviecomings[i].director);

			var a1 = $("<a href=''></a>");
			var a2 = $("<a href=''></a>");
			var span = $("<span class='span6'></span>");
			var span1 = $("<span class='span7'></span>"); 
			span.html(obj.moviecomings[i].wantedCount);
			span1.html(" 人想看 -" +obj.moviecomings[i].type);

			


			span2 = $("<span class='span8'>"+"超前预售"+"</span>");
			span3 = $("<span class='span9'>"+"预告片"+"</span>");

			var img = $("<img>");




			img.attr("src",obj.moviecomings[i].image);
			$(".ul1").append(li);
			li.append(a,div1);
			div1.append(p,p1,p2,p3);
			p1.append(span,span1);
			p3.append(a1,a2);
			a1.append(span2);
			a2.append(span3);
			a.append(div);
			div.append(img);
		}
			
	}
	
})


