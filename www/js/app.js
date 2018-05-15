var module = angular.module('my-app', ['onsen'])
module.controller('AppController', function ($scope) {
	this.load = function (page) {
		splitter.content.load(page)
			.then(function () {
				splitter.left.close()
				initialize()
			})
	}
	$scope.detailPush = function () {
		$scope.navi.pushPage("detail.html")
	}
});

function initialize() {
	var mapOptions = {
		center: new google.maps.LatLng(35.658892, 139.755286),    //地図上で表示させる緯度経度
		zoom: 14,                                                 //地図の倍率
		mapTypeId: google.maps.MapTypeId.ROADMAP                  //地図の種類
	};
	var map = new google.maps.Map(document.getElementById("map_canvas"),
		mapOptions);
}


ons.ready(function () {
	// console.log("Onsen UI is ready!");
	//  navi.on('preshow',function(event){
	//       console.log("Onsen UI is ready!");
	//  })
})
//             var mapOptions = {
//               center: new google.maps.LatLng(35.658892, 139.755286),    //地図上で表示させる緯度経度
//               zoom: 14,                                                 //地図の倍率
//               mapTypeId: google.maps.MapTypeId.ROADMAP                  //地図の種類
//             };
//             var map = new google.maps.Map(documnet.getElementById("map_canvas"),
//                                           mapOptions);
//      });