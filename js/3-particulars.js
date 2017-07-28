
var array = location.href.split("=")[1];
console.log(array);
// $.ajax({
// 	url:"../data/3-data.php?type=now_list",
// 	success:function(list){
// 		var obj = JSON.parse(list);
// 		// console.log(obj);
// 		console.log(obj.ms[0].id);
// 		for (var i = 0; i <obj.ms.length; i++) {
// 			// console.log(obj.ms[i].id);
// 			 var array = obj.ms[0].id;
// 			/*console.log(array);*/
// 		}
// 
//

		$.ajax({
			url:"../data/3-buyTicket.php?type=getMovieDetail&mid="+array,
			success:function(a){
				// console.log(a);
				var obj = JSON.parse(a);
				console.log(obj);
				/*console.log(a);*/

				var a = $("<a href='prevue.html?movieId="+array+"'></a>");
				var a1 = $('<a href=""></a>');
				var a2 = $('<a href="" ></a>'); 

				var img = $("<img class='a4444'/>");
				img.attr("src",obj.image);
				/*console.log(obj.image);*/
				
				var p = $("<p class='p1'></p>");
				var p1 = $("<p class='p2'></p>"); 
				p.html(obj.titleCn);
				p1.html(obj.titleEn);

				$(".image").css("background-image","url("+obj.image+")");
				/*console.log($(".image"));*/

				var div = $("<div></div>");
				var p2 = $("<p class='p3'></p>");
				var p3 = $("<p class='p4'></p>");
				var p4 = $("<p class='p5'></p>");
				var p5 = $("<p class='p6'></p>");
				var div1 = $("<div class='div1'></div>");
				var div3 = $("<div ></div>");
				var div4 = $("<div ></div>");
				var div5 = $("<div ></div>");
				var div6 = $("<div ></div>");
				var div7 = $("<div ></div>");
				var div8 = $("<div ></div>");
				var div9 = $("<div ></div>");
				var div10 = $("<div ></div>");
				
				
				

				var span = $("<span class='span'></span>");
				var span1 = $("<span class='span1'></span>");
				var span2 = $("<span class='span2'></span>");
				var span3 = $("<span class='span3'></span>");
				var span5 = $("<span class='span5' onclick = 'color()'>"+"我想看"+"</span>");
				var span6 = $("<span class='span6'>"+"我要评分"+"</span>");
				var span7 = $("<span class='span7'></span>");
				var img1 = $("<img src='../images/3-jianjiaoyou.jpg' alt='' />");
				var im = $("<img src='../images/3-jianjiaoyou.jpg' alt='' />");
				var img2 = $('<img/ class="img7">');
				var img3 = $("<img/ class='img1'>");
				var img4 = $("<img/ class='img2'>");
				var img5 = $("<img/ class='img3'>");
				var img6 = $("<img/ class='img4'>");

				img2.attr("src",obj.director.directorImg);
				img3.attr("src",obj.actorList[0].actorImg);
				img4.attr("src",obj.actorList[0].roleImg);
				img5.attr("src",obj.actorList[1].actorImg);
				img6.attr("src",obj.actorList[1].roleImg);

				p2.html(obj.runTime);
				span.html(obj.type[0]+" / ");
				span1.html(obj.type[1]);
				span2.html(obj.release.date);
				span3.html(obj.release.location+"上映");
				div1.html(obj.rating);
				a1.html(obj.personCount+"位演员");

				a2.html(obj.imageCount+"张图片")
				

				if (obj.rating<0) {
					div1.css("display","none");
				}

				$(".p7").html("“"+obj.commonSpecial);
				
				var app = $("<span class = 'app'></span>");
				app.html(obj.content);

				console.log(app.text());
				var span_text = $("<span class = 'span_text' style='display: none;'></span>");
				span_text.html(obj.content);

				// console.log(app.text().slice(0,35));
				console.log(span_text.text());
				var app_context = $("<div class='app_context'></div>");
				app_context.html(app.text().slice(0,35));

				var app_context1 = $("<div class='app_context1'></div>");


				$(".p9").append(app_context);
				$(".p9").append(span_text);
				$(".p10").html('<img src="../images/3-jianjiao.jpg" onclick="addImg()" class="p_img"/>');

				// var isShow = true;
				// function addImg(){
				// 	if(isShow){
				// 		$(".app_context").css("display","none");
				// 		$(".app_context1").html(app.text().slice(0,70));
				// 		isShow = false;
				// 	}else{
				// 		$(".app_context").css("display","none");
				// 		$(".app_context1").html(app.text().slice(0,70));
				// 		isShow = true;
				// 	}
				// }

				$(".p9").append(app_context1)

				$(".h2").html(a1);

				$(".h2_1").html(a2);

				div3.html(obj.director.directorName);
				div4.html(obj.director.directorNameEn);
				div5.html(obj.actorList[0].actor);
				div6.html(obj.actorList[0].actorEn);
				div7.html("饰："+obj.actorList[0].roleName);
				div8.html(obj.actorList[1].actor);
				div9.html(obj.actorList[1].actorEn);
				div10.html("饰："+obj.actorList[1].roleName);
				var div_img = $("<div class='div_img' ></div>");
				div_img.append(img4);
				var div_img1 = $("<div class='div_img1'></div>");
				div_img1.append(img6);
				/*console.log(div_img1);*/

				$(".direct").append(img2,div3,div4);
				$(".star").append(img3,div5,div6,div_img,div7);
				$(".star1").append(img5,div8,div9,div_img1,div10);

				a1.append(img1);
				a2.append(im);

				$(".cinema").append(a);		
				$(".cinema_text").append(p,p1,div);
				a.append(img);
				div.append(p2,div1,p3,p4,p5);
				p3.append(span,span1);
				p4.append(span2,span3);
				p5.append(span5,span6);

				for (var i = 0;i < obj.images.length; i++) {
					var im1 = $("<img src='' alt='' />");
					im1.attr("src",obj.images[i]);
					var li = $("<li></li>");
					li.append(im1);
				/*console.log(li);*/
					$(".ul").append(li);

				}

				}
		});
	
		function color(){
			if ($(".span5").text()=="我想看") {
				$(".span5").text("已想看");
				$(".span5").css("border","1px solid orange");
			}else{
				$(".span5").text("我想看");
				$(".span5").css("border","1px solid rgb(215,215,215)");
			}
		}
		//点击事件
				var isShow = true;
				function addImg(){
					if(isShow){
						$(".span_text").css("display","block");
						$(".app_context").css("display","none");
						$(".p_img").attr("src","../images/3-jianjiaoshang.png");
						isShow = false;
					}else{
						$(".span_text").css("display","none");
						$(".app_context").css("display","block");
						$(".p_img").attr("src","../images/3-jianjiao.jpg");
						isShow = true;
					}
					
					
					
				}

		$.ajax({
			url:"../data/3-buyTicket.php?type=HotLongComments&mid="+array,
			success:function(data){
				// console.log(data);
				var  o =JSON.parse(data);
				/*console.log(o);*/

				var p = $("<p></p>");
				p.html("精选影评("+o.totalCount+")");

				var a = $("<a href=''></a>");
				var img = $("<img src='../images/3-jianjiaoyou.jpg' alt='' />");

				var p1 = $("<p></p>");
				p1.html(o.comments[0].title);
	
				var p2 = $("<p></p>");
				p2.html(o.comments[0].content);
				
				// console.log();
				var p2_content = $("<div class='p2_content'></div>");
				p2_content.html(p2.text().slice(0,50)+"....");
				var b = $("<span></span>");


				a.append(p,img);
				$(".h2_2").append(a);
				$(".h2_3").append(p1);
				$(".hh1").append(p2_content);


							
			}

		})
		var noShow = true;
		function fun(){
			if (noShow) {
				$(".collection").css("background-image","url(../images/3-huangxingxing.png)");
				noShow=false;
			}else{
				$(".collection").css("background-image","url(../images/3-collection.png)");
				noShow=true;
			}


}
$.ajax({
	url:"../data/3-buyTicket.php?type=MovieComments&mid="+array,
		success:function(data){
		// console.log(data);
		var  obj=JSON.parse(data);
		console.log(obj);
		$(".duanping").html("网友短评( "+obj.totalCommentCount+" )");

		

		for (var i = 0;i< obj.cts.length; i++) {
			var li = $("<li></li>");
			$(".ul1").append(li);
			var div = $("<div class='touxiang'></div>");
			var div1 = $("<div class='pinglun'></div>"); 
			var img = $("<img />") ;
			var p = $("<p class='name'></p>");
			var p1 = $("<p></p>");
			
			img.attr("src",obj.cts[i].caimg);
			li.append(div,div1);
			div.append(img);
			
			var span = $("<span class='pingfen'></span>");
			var span1 = $("<span></span>");
			span1.html(obj.cts[i].ca);
			p.append(span);
			span.html(obj.cts[i].cr);
			div1.append(p);
			p.append(span1,span);

			var ce = $("<div class='ce'></div>");
			ce.html(obj.cts[i].ce);
			var add_ce = $("<div class='add_ce' style= 'margin-top:15px;'></div>");
			add_ce.html(ce.text().slice(0,40)+"...")
			p.after(add_ce);


			var bor_bot = $("<div class='bor_bot' style= 'width:95%;border-top:1px solid rgb(215,215,215);margin-top:15px;margin-bottom:15px'></div>");
			li.append(bor_bot);

			var img_hxdbwx = $("<img style='width:10%;height:30%; margin-top:15px;'/>"+"<span style = 'margin-top:20px;'>&nbsp;&nbsp;回复&nbsp;&nbsp;</span>");
			img_hxdbwx.attr("src","../images/ico_reply.png");
			var img_click = $("<img  style='width:10%;height:30%; margin-top:15px;'/>"+"<span  style = 'margin-top:20px;'>&nbsp;&nbsp;点赞</span>");
			img_click.attr("src","../images/ico_praise.png");
			var a_img = $("<a href = 'hxdbwx.html?mid="+array+"' style= 'width:100%;display:flex;justify-content:flex-end'></a>");
			a_img.append(img_hxdbwx);
			a_img.append(img_click)
			console.log(a_img);
			add_ce.after(a_img);

			if (obj.cts[i].cr<0) {
				span.css("display","none");

			}
		
		}


							
	}
})

