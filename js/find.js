var app = angular.module("app",[]);
app.controller("a",function($scope,$http){
	$scope.newArray = [];
	$http({
		url:"../data/时光网data.php?type=newsList",
		method:"get"
	}).then(function(data){
		$scope.newArray = data.data.newsList;
		console.log($scope.newArray);
		console.log("===========");
	},function(err){
		console.log("fyugkkl");
	})
})
