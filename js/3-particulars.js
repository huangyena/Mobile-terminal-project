
$.ajax({
	url:"../data/3-data.php?type=now_list",
	success:function(list){
		var obj = JSON.parse(list);
		// console.log(obj);
		console.log(obj.ms[0].id);
		for (var i = 0; i <obj.ms.length; i++) {
			// console.log(obj.ms[i].id);
			 var array = obj.ms[0].id;
			/*console.log(array);*/
		}


		$.ajax({
			url:"../data/3-buyTicket.php?type=getMovieDetail&mid="+array,
			success:function(a){
				// console.log(a);
				var obj = JSON.parse(a);
				console.log(obj);

				var a = $("<a href=''></a>");
				var a1 = $('<a href=""></a>');

				var img = $("<img/>");
				img.attr("src",obj.image);
				console.log(obj.image);
				
				var p = $("<p class='p1'></p>");
				var p1 = $("<p class='p2'></p>"); 
				p.html(obj.titleCn);
				p1.html(obj.titleEn);

				$(".image").css("background-image","url("+obj.image+")");
				console.log($(".image"));

				var div = $("<div></div>");
				var p2 = $("<p class='p3'></p>");
				var p3 = $("<p class='p4'></p>");
				var p4 = $("<p class='p5'></p>");
				var p5 = $("<p class='p6'></p>");
				var div1 = $("<div class='div1'></div>");
				var div3 = $("<div ></div>");
				var div4 = $("<div ></div>");
				var div5 = $("<div></div>");
				var div6 = $("<div></div>");
				

				var span = $("<span class='span'></span>");
				var span1 = $("<span class='span1'></span>");
				var span2 = $("<span class='span2'></span>");
				var span3 = $("<span class='span3'></span>");
				var span5 = $("<span class='span5'>"+"我想看"+"</span>");
				var span6 = $("<span class='span6'>"+"我要评分"+"</span>");
				var span7 = $("<span class='span7'></span>");
				var img1 = $("<img/>");
				var img2 = $('<img/>');
				var img3 = $("<img/>");
				var img4 = $("<img/>");
				img2.attr("src",obj.director.directorImg);
				img3.attr("src",obj.actorList[0].actorImg);
				img4.attr("src",obj.actorList[0].roleImg);

				p2.html(obj.runTime);
				span.html(obj.type[0]+" / ");
				span1.html(obj.type[1]);
				span2.html(obj.release.date);
				span3.html(obj.release.location+"上映");
				div1.html(obj.rating);
				a1.html(obj.personCount+"位演员");
				

				$(".p7").html("“"+obj.commonSpecial);
				$(".p9").html(obj.content);
				$(".p10").html('<img src="../images/3-尖角上.png" alt="" />')
				$(".h2").html(a1);

				div3.html(obj.director.directorName);
				div4.html(obj.director.directorNameEn);
				div5.html(obj.actorList[0].actor);
				div6.html(obj.actorList[0].actorEn);


				$(".direct").append(img2,div3,div4);
				$(".star").append(img3,div5,div6,img4);
				a1.append(img1);
				$(".cinema").append(a);		
				$(".cinema_text").append(p,p1,div);
				a.append(img);
				div.append(p2,div1,p3,p4,p5);
				p3.append(span,span1);
				p4.append(span2,span3);
				p5.append(span5,span6);


			}
		})	
		
	}
})
// var array = [];
