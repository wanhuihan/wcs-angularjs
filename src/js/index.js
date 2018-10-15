
import angular from 'angular';
//
// import $ from '../../node_modules/jquery/dist/jquery.min.js';
//
// import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
//
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

var app = angular.module('test',[])

// console.log(angular);

// 百度地图API功能
// var map = new BMap.Map("allmap");
// var point = new BMap.Point(108.95,34.27);
// map.centerAndZoom(point,12);

var geolocation = new BMap.Geolocation();
//
var map = new BMap.Map("allmap");

geolocation.getCurrentPosition(function(a) {
    // alert( + '==>' + )
    // map.centerAndZoom(new BMap.Point(a.longitude,a.latitude),11);
    // map.enableScrollWheelZoom(true);

    map.centerAndZoom(new BMap.Point(a.longitude,a.latitude),20);

    var newP = new BMap.Point(a.longitude,a.latitude)

    var marker = new BMap.Marker(newP);  // 创建标注
        map.addOverlay(marker);              // 将标注添加到地图中
        map.panTo(new_point);

        map.enableScrollWheelZoom(true);
});

// geolocation.getCurrentPosition(function(r){console.log(r.point)
//     if(this.getStatus() == BMAP_STATUS_SUCCESS){
//         var mk = new BMap.Marker(r.point);
//         map.addOverlay(mk);//标出所在地
//         map.panTo(r.point);//地图中心移动
//         //alert('您的位置：'+r.point.lng+','+r.point.lat);
//         var point = new BMap.Point(r.point.lng,r.point.lat);//用所定位的经纬度查找所在地省市街道等信息
//         var gc = new BMap.Geocoder();
//         gc.getLocation(point, function(rs){
//            var addComp = rs.addressComponents; console.log(rs.address);//地址信息
//            // alert(rs.address);//弹出所在地址
//
//         });
//     }else {
//         alert('failed'+this.getStatus());
//     }
// },{enableHighAccuracy: true})
