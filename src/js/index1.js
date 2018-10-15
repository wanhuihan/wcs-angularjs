
import angular from 'angular';
//
// import $ from '../../node_modules/jquery/dist/jquery.min.js';
//
// import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
//
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

var app = angular.module('test',[])

// console.log(app);

console.log(angular);

//  injector module

/*
    injecotr is a object,

        get,
        invoke  //
        annotate // 函数

*/

/*

*/

// 1 angular 三种启动方式

//  angular.module('test', []) 自动启动方式
//  angular.bootstrap(document, ['test']) //手动启动
//  可以启动多个ng-app，不能嵌套， 第一个会自动启动，第二个不会启动，需要手动启动

// 2 绑定jquery
/*
    bindjQuery
    jqLite
*/

// 3 发布内置对象发布到angular上面
/*
    publishExternalAPI
    先把内核Ng开头和内置的指令全部加在进去,
    // 实例化 Module 上有 controller, directive, service 比较重要

*/

// angularInit
/*
    angular.bootstrap  自动启动，如果没有找到Ng-app，则需要自己手动启动

    angular.dobootstrap
    //
        createInjector
            providerInjector
            instranceInjector
    //
        调用$compile来编译指令

*/

// 依赖注入， 注入方式
/*
    推断型注入
    function test($scope) {
        console.log($scope)
    }
    app.controller('$scope', test);

    注入名称必须一致，如果使用代码压缩就不行，如果不压缩的话是可以的
    //

    声明式注入
    function test(a) {
        console.log(a)
    }
    test.$inject = ['scope'];
    app.controller('$scope', test);

    //
    内联是注入
    app.controller('test', ['$scope', function($scope) {

        // fn里面的参数可以改变，不必和前面一样
    }])
    // 压缩不会报错

*/

//  $injector 使用方法
//  用来获得依赖注入，获得service，对象实例，加载模块
// $injector 对象的方法 annotate, invoke,
/*
    app.factory('test', functino() {
        return {
            game: 'ssss'
        }
    })
    // $injector.invoke
    app.controller('aaa', ['$scope','$injector', function($scope, $injector) {
        $injector.invoke(function(test) {
            test.game
        })
    }])
    // $injecotr.annotate 用来分析函数参数，然后实例化
    $injecotr.annotate(function(arg1, arg2) {

    })
*/

// provider 一种设计模式
/*
    ng中的依赖注入是通过Provider 和injector联合机制实现的

    factory 通过 provider 实现
    service通过factory 实现
    value是通过factory实现的

    $injector 会帮助实例化controller


*/
//
