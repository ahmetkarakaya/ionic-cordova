// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
// for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .controller('DeviceController', function ($ionicPlatform, $scope, $cordovaDevice) {
    $ionicPlatform.ready(function () {
      console.log('Device is ready ');
      $scope.$apply(function () {
// sometimes binding does not work! :/
// getting device infor from $cordovaDevice
        //var device = $cordovaDevice.getDevice();
        if(ionic.Platform.isAndroid() ){
          console.log('Android device');
          $scope.manufacturer = $cordovaDevice.getManufacturer();
          $scope.model = $cordovaDevice.getModel();
          $scope.platform = $cordovaDevice.getPlatform();
          $scope.uuid = $cordovaDevice.getUUID();
        }else{
          console.log("Is not Android");
          $scope.manufacturer = 'manufacturer-test';
          $scope.model = 'model-test-3';
        }

        console.log('manufacturer:' + $scope.manufacturer);
        console.log('model:' + $scope.model);
        console.log('platform:' + $scope.platform);
        console.log('uuid:' + $scope.uuid);
      });
    });
  })
