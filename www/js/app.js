var module = angular.module('my-app', ['onsen'])
module.controller('AppController', function ($scope) {
     this.load = function (page) {
          splitter.content.load(page)
               .then(function () {
                    splitter.left.close()      
                    document.addEventListener('DOMContentLoaded', function() {
                               initialize() 
                 }, false);
               })
     }
     $scope.detailPush = function(){
     $scope.navi.pushPage("detail.html")
}
});
  function initialize() {
     var mapOptions = {
          center: new google.maps.LatLng(34.703615, 135.509339),    //地図上で表示させる緯度経度
          zoom: 14,                                                 //地図の倍率
          mapTypeId: google.maps.MapTypeId.ROADMAP                  //地図の種類
     };
     var map = new google.maps.Map(document.getElementById("map_canvas"),
          mapOptions);
          var myLatlng = new google.maps.LatLng(34.703615, 135.509339);
          var marker = new google.maps.Marker({
          position: myLatlng,
          title:"梅田家",
     });
     marker.setMap(map);
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

// var _this;
// ons.bootstrap().controller('HelloController', function($timeout) {
//     _this = this;
//     this.newMail;
//     this.newPassword;
//     this.mail;
//     this.password;
//     this.isLoggedIn;
//     this.$timeout = $timeout;
 
//     // 新規ユーザ登録
//     this.regi = function() {
//       // 新規ユーザーの登録機能
//       firebase.auth().createUserWithEmailAndPassword(this.newMail, this.newPassword).catch(function(error) {
//         alert(error.message);
//       });
//     }
 
//     // ログイン
//     this.login = function() {
//       // 新規ユーザーの登録機能
//       firebase.auth().signInWithEmailAndPassword(this.mail, this.password).catch(function(error) {
//         alert(error.message);
//       });
//     }
 
//     // ログアウト
//     this.logout = function() {
//       firebase.auth().signOut();
//     }
//   });
// ons.ready(function() {
//   // 認証状態変更検知
//   firebase.auth().onAuthStateChanged(function(user) {
//     _this.$timeout(function() {
//       if (user) {
//         // ログイン状態
//         _this.isLoggedIn = true;
//       } else {
//         // ログアウト状態
//         _this.isLoggedIn = false;
//       }
//     })
//   });
// });
// var map;
// var marker;
// function initMap() {
//     if (!navigator.geolocation) {
//         alert('Geolocation APIに対応していません');
//         return false;
//     }
 
//     // 現在地の取得
//     navigator.geolocation.getCurrentPosition(function(position) {
//         // 緯度経度の取得
//         latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
//         // 地図の作成
//         map = new google.maps.Map(document.getElementById('map'), {
//             center: latLng,
//             zoom: 17
//         });
 
//         // マーカーの追加
//         marker = new google.maps.Marker({
//             position: latLng,
//             map: map
//         });
//     }, function() {
//         alert('位置情報取得に失敗しました');
//     });
// }
// document.addEventListener( 'DOMContentLoaded', function() {/* ここにMapのコード */});