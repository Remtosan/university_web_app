app.controller("appController",function ($scope, $http, $location)
{

    function checkUser () {
        if (sessionStorage.getItem("isLoggedIn") == "false"){
            $location.url("/");
        }
    }
    checkUser();

     $scope.violations = function () {
         $location.url("/home/university");
     }


});


