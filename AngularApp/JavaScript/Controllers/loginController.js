app.controller("loginController",function ($scope, $http, $location)
{
    sessionStorage.setItem("isLoggedIn", false);
    $scope.user = {"access_type_id": 1};
    var request =
        {
            "ReaxiumParameters":
                {
                    "Access":
                        {
                        }
                }
        };

    $scope.loginUser = function () {
        $scope.show = true;
        request.ReaxiumParameters.Access = $scope.user;
        $http.post("http://34.208.166.161/mobile_citation_cloud/Access/validateAccess", request )
            .then (function (response) {
                if (response.data.ReaxiumResponse.code == 0){
                    alert("Logueado");
                    sessionStorage.setItem("isLoggedIn", true);
                    sessionStorage.setItem("userInfo", JSON
                        .stringify(response.data.ReaxiumResponse.object[0].AccessInfo.userInfo));
                    $location.url("/home");
                }else {
                   alert(response.data.ReaxiumResponse.message);
                    $scope.show = false;
                }
            })
    }
});