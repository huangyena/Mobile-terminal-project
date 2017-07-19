 function fun(){
 	var a2=$("#ul");
 	a2.empty();

 	var a1= $("#a1").val();
 	if (a1.length == 0) {
 		var a = $("#none");
 		return a.css("display","block");
 	}else{
 		var a = $("#none");
 		a.css("display","none");
 	}


 	


 	 	$.ajax({
		url:"../data/3-search.php?keyword="+a1,
		success:function(a){
			var obj = JSON.parse(a);
			console.log(obj);
			

			/*a2.text(a);*/
		
			for(var i = 0;i<=4;i++){

				var type = obj.suggestions[i].type;
				console.log(type);

				if (type==1) {
					var img = $("<img>");
					img.attr("src",obj.suggestions[i].cover);

					var li = $("<li></li>");
					var a = $("<a href=''></a>");
					var div1 = $("<div class='div_img'></div>");
					var div2 = $("<div class='div_name'></div>");
					var name = $("<p class='name'></p>");
					var man = $("<p class='man'></p>");
					var state = $("<p class='state'></p>");


					var span = $("<span></span>");
					span.html(obj.suggestions[i].titlecn);
					var span1 = $("<span></span>")
					span1.html("("+obj.suggestions[i].year+")");
					var span2 = $("<span></span>");
					span2.html("["+obj.suggestions[i].contentType+"]");

					man.html(obj.suggestions[i].titleen);


					var span3 = $("<span></span>");
					span3.html(obj.suggestions[i].contentType+",");
					var span4 = $("<span></span>");
					span4.html(obj.suggestions[i].movieType+",");
					var span5 = $("<span></span>");
					span5.html(obj.suggestions[i].rLocation);

					console.log(img);
					a2.append(li);
					li.append(a);
					a.append(div1,div2);
					div1.append(img);
					div2.append(name,man,state);

					name.append(span);
					name.append(span1);
					name.append(span2);

					state.append(span3);
					state.append(span4);
					state.append(span5);
				}else if(type==2){
					var img = $("<img>");
					img.attr("src",obj.suggestions[i].cover);

					var li = $("<li></li>");
					var a = $("<a href=''></a>");
					var div1 = $("<div class='div_img'></div>");
					var div2 = $("<div class='div_name'></div>");
					var name = $("<p class='name'></p>");
					var site = $("<p class='man'></p>");


					var span = $("<span></span>");
					span.html(obj.suggestions[i].name);
					console.log(span);
					var span1 = $("<span>"+"[影院]"+"</span>");

					site.html(obj.suggestions[i].address);

					a2.append(li);
					li.append(a);
					a.append(div1,div2);
					div1.append(img);
					div2.append(name,site);

					name.append(span);
					name.append(span1);
				}else if(type==3){
					var img = $("<img>");
					img.attr("src",obj.suggestions[i].cover);

					var li = $("<li></li>");
					var a = $("<a href=''></a>");
					var div1 = $("<div class='div_img'></div>");
					var div2 = $("<div class='div_name'></div>");
					var name = $("<p class='name'></p>");
					var man = $("<p class='man'></p>");
					var state = $("<p class='state'></p>");


					var span = $("<span></span>");
					span.html(obj.suggestions[i].titlecn);
					var span1 = $("<span>"+"[影人]"+"</span>")

					man.html(obj.suggestions[i].titleen);

					var span2 = $("<span></span>");
					var span3 = $("<span></span>");
					var span4 = $("<span></span>");
					var span5 = $("<span></span>");

					span2.html(obj.suggestions[i].sex+",");
					span3.append(obj.suggestions[i].birth+",");
					span4.append(obj.suggestions[i].birthLocation+",");
					span5.append(obj.suggestions[i].profession);

					
					console.log(img);
					a2.append(li);
					li.append(a);
					a.append(div1,div2);
					div1.append(img);
					div2.append(name,man,state);

					name.append(span,span1);
					state.append(span2,span3,span4,span5);

				}
			}
			
		}
	})
}