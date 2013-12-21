var HelloApp = angular.module("HelloApp", []);

HelloApp.controller("HelloController", function ($scope){

	$scope.mesage = "";

	var eb = new vertx.EventBus("http://10.0.0.160:8877/eventbus");
	eb.onopen = function(){
		eb.registerHandler("hello.event", function(message){ 
			$scope.message = message;
			$scope.$apply('message')
			console.log(message);
		});
	};


	$scope.save = function(){
		eb.send("save.message", "hello");
		console.log("save...");
	};
});