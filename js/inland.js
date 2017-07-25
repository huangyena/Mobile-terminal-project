$.ajax({
	url:"../data/discovery.php?type=getTop100&pageIndex=1&toplistId=2020",
	success:function(data){
		// console.log(data);
		var obj = JSON.parse(data);
		console.log(obj);
		console.log(obj.topList.summary);
		$(".summary").html(obj.topList.summary);
		var bor_bottom = $("<div class = 'bor-bottom'></div>");
		console.log(bor_bottom)
		$(".summary").append(bor_bottom);

		for (var i = 0; i <100; i++) {
					var li = $("<li class = 'li'></li>");
					var num = $("<div class = 'num'></div>");
					num.html(i+1);
					var posterUrl = $("<img class = 'posterUrl' />");
					posterUrl.attr("src",obj.movies[i].posterUrl);

					var name_one = $("<div class = 'name_one'></div>");
					name_one.html(obj.movies[i].name);	

					var nameEn = $("<div class = 'nameEn'></div>");
					nameEn.html(obj.movies[i].nameEn);
					var actor = $("<span class = 'actor'></span>");
					actor.html("主演："+obj.movies[i].actor);

					var director= $("<span class = 'director'></span>"+"<br>");
					director.html("导演："+obj.movies[i].director);

					var time = $("<span class = 'releaseDate'></span>");

					time.html(obj.movies[i].releaseDate+ "&nbsp;"+obj.movies[i].releaseLocation );
					// $(".releaseDate").html();
						var remark = ("<div class = 'remark'>"+obj.movies[i].weekBoxOffice+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+obj.movies[i].totalBoxOffice+"</div>");
					
					var bor_bottom = $("<div class = 'bor_bottom'></div>")
				
					li.append(num);
					li.append(posterUrl);
					li.append(name_one);
					li.append(nameEn);
					li.append(director);
					li.append(actor);
					li.append(time);
					li.append(remark);
					li.append(bor_bottom);
					$(".receive").append(li);
				}
	}
})