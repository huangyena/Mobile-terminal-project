var swiper = new Swiper(".pic",{
		// pagination:".swiper-pagination",
		 paginationClickable: true,
	     spaceBetween: 30,
	     centeredSlides: true,
	     autoplay: 2000,
	     autoplayDisableOnInteraction: false
	});
// var page;
$.ajax({
	url:"../data/discovery.php?type=getTop100&pageIndex=1&toplistId=2065",
	success:function(data){
	// console.log(data);
			var obj = JSON.parse(data);
			console.log(obj)
			// console.log(obj.topList.summary);
			$(".summary").text(obj.topList.summary);
			console.log(obj.pageCount);
			console.log(obj.movies[0].actor);
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

					var remark = $("<div ></div>");
					remark.html(obj.movies[i].remark);
					// if(remark.text().length>10){
							
					var re = remark.text();
					// console.log(re);
					var mark = re.slice(0,30);
					
					var bor_bottom = $("<div class = 'bor_bottom'></div>")
					var add = $("<br>"+"<span class ='remark'>"+mark+"..."+"</span>")
					// $(".remark").html(mark);
					li.append(num);
					li.append(posterUrl);
					li.append(name_one);
					li.append(nameEn);
					li.append(director);
					li.append(actor);
					li.append(time);
					li.append(add);
					li.append(bor_bottom);
					$(".receive").append(li);
				}
	}
})
$.ajax({
	url:"../data/discovery.php?type=getTop100&pageIndex=2&toplistId=2065",
	success:function(data){
	// console.log(data);
			var obj = JSON.parse(data);
			console.log(obj)
			// console.log(obj.topList.summary);
			$(".summary").text(obj.topList.summary);
			console.log(obj.pageCount);
			console.log(obj.movies[0].actor);
			for (var i = 0; i <41; i++) {
					var lil = $("<li class = 'lil'></li>");
					var num = $("<div class = 'num'></div>");
					num.html(i+21);
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

					var remark = $("<div ></div>");
					remark.html(obj.movies[i].remark);
					// if(remark.text().length>10){
							
					var re = remark.text();
					// console.log(re);
					var mark = re.slice(0,30);
					
					var bor_bottom = $("<div class = 'bor_bottom'></div>")
					var add = $("<br>"+"<span class ='remark'>"+mark+"..."+"</span>")
					// $(".remark").html(mark);
					lil.append(num);
					lil.append(posterUrl);
					lil.append(name_one);
					lil.append(nameEn);
					lil.append(director);
					lil.append(actor);
					lil.append(time);
					lil.append(add);
					lil.append(bor_bottom);
					$(".receive").append(lil);
				}
	}
})
$.ajax({
	url:"../data/discovery.php?type=getTop100&pageIndex=3&toplistId=2065",
	success:function(data){
	// console.log(data);
			var obj = JSON.parse(data);
			console.log(obj)
			// console.log(obj.topList.summary);
			$(".summary").text(obj.topList.summary);
			console.log(obj.pageCount);
			console.log(obj.movies[0].actor);
			for (var i = 0; i <21; i++) {
					var lii = $("<li class = 'lii'></li>");
					var num = $("<div class = 'num'></div>");
					num.html(i+41);
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

					var remark = $("<div ></div>");
					remark.html(obj.movies[i].remark);
					// if(remark.text().length>10){
							
					var re = remark.text();
					// console.log(re);
					var mark = re.slice(0,30);
					
					var bor_bottom = $("<div class = 'bor_bottom'></div>")
					var add = $("<br>"+"<span class ='remark'>"+mark+"..."+"</span>")
					// $(".remark").html(mark);
					lii.append(num);
					lii.append(posterUrl);
					lii.append(name_one);
					lii.append(nameEn);
					lii.append(director);
					lii.append(actor);
					lii.append(time);
					lii.append(add);
					lii.append(bor_bottom);
					$(".receive").append(lii);
				}
	}
})
// function many(){
// 	$(".lil").css("display","block");
// }