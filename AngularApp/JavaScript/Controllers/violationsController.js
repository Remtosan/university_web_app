/**
 * Created by Vongola on 05/07/2018.
 */
app.controller("violationsController",function ($scope, $http, $location)
{

    $scope.newOne= JSON.parse(sessionStorage.getItem("businessInfo"));

});
