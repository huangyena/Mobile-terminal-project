$.ajax({
	url:"../data/3-movie.php?type=nowMovie",
	success:function(a){
		var obj = JSON.parse(a);
		console.log(obj);

		for ( i = 0 ; i< obj.ms.length;  i++) {
			var li = $("<li class='li'></li>");
			var div = $("<div class='div1'></div>");
			var div1 = $("<div class='div2'></div>");

			var p = $("<p></p>");
			var p1 = $("<p></p>");
			var p2 =$("<p></p>");


			var img = $("<img src='' alt='' />");
			img.attr("src",obj.ms[i].img);
			console.log(img);
			console.log(li);
			li.append(div1);
			li.prepend(div);
			div.append(img);
			$(".ul").append(li);

		}
	}
})