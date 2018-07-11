app.controller("appController",function ($scope, $http, $location)
{
    $scope.user= JSON.parse(sessionStorage.getItem("userInfo"));

     $scope.users = {
         "username": "jadekola",
         "access_type_id": 1,
         "password": "radmin04"
     };
     var requests =
         {
             "ReaxiumParameters":
                 {
                     "Access":
                         {
                         }
                 }
         };

    function checkUser () {
        if (sessionStorage.getItem("isLoggedIn") == "false"){
            $location.url("/");
        }
    }
    checkUser();

    $scope.showContent = function(){
        $scope.show = !$scope.show;
    };

    $scope.test1 = function () {
        $scope.showTest1 = !$scope.showTest1;
    };

     $scope.violations = function () {
         requests.ReaxiumParameters.Access = $scope.users;
         $http.post("http://34.208.166.161/mobile_citation_cloud/Access/validateAccess", requests )
             .then (function (response) {
                 if (response.data.ReaxiumResponse.code == 0){
                     sessionStorage.setItem("businessInfo", JSON
                         .stringify(response.data.ReaxiumResponse.object[0].AccessInfo.userInfo.business[0]));
                     $location.url("/home/violations");

                 }else {
                     alert(response.data.ReaxiumResponse.message);
                 }
             })
     }
});


