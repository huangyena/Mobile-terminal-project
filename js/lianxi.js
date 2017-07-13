$.ajax({
	url:"../data/data.php?type=now_list",
	success:function(data){
		/*console.log(data);*/
		var obj = JSON.parse(data);
		console.log(obj);
		console.log(obj.ms[0].t);
		for (var i = 0;i<4;i++){
			var li = $("<img class= 'img'>");
			li.attr("src",obj.ms[i].img);   //图
/*			console.log(li);
*/			var aa = $("<a href='' class= 'lijie'></a>");


			var fontDiv = $("<div class = 'fontDiv'></div>");//字
			fontDiv.html(obj.ms[i].t);
			/*console.log(fontDiv);*/
			aa.append(li);
			aa.append(fontDiv);
			$(".a0").append(aa);
		}
		for (var i = 4;i<8;i++){
			var li = $("<img class= 'img'>");
			li.attr("src",obj.ms[i].img);
			console.log(li);
			var aa = $("<a href='' class= 'lijie'></a>");
			var fontDiv = $("<div class = 'fontDiv'></div>");
			fontDiv.html(obj.ms[i].t);
			console.log(fontDiv);
			aa.append(li);
			aa.append(fontDiv);
			$(".a1").append(aa);
		}
	}
})