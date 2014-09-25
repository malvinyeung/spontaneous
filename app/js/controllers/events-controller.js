"use strict";

module.exports = function(app){
  app.controller('eventsController', function($scope, $http, $location, auth, $cookies, footer){
    $scope.submitForm = function(){
      if (auth.sendJWT() === 'noauth') return false;
      $scope.event.owner = ($cookies.userName);
      $http({
        method: 'POST',
        url: '/api/v_0_0_1/events',
        data: $scope.event
      })
      .success(function(data){
        $location.path('/home');
        console.log('success');
      })
      .error(function(data){
        console.log('error');
        console.log(data);
      });
    };

    $scope.getEvents = footer.getEvents;
    $scope.newEvent = footer.newEvent;
    $scope.logout = footer.logout;
  });
};
