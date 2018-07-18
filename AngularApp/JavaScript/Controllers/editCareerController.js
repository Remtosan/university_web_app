app.controller("editCareerController",function ($scope, $http, $location, $routeParams){
    $scope.disabled = false;
    $scope.loading = false;
    $scope.career = {};
    var careerId = $routeParams.Career_ID;

    var request =
        {
            "GE3PRequest":
                {
                    "Career":
                        {
                            "Career_ID" : careerId
                        }
                }
        };



    function enableView () {
        //debugger;
        if (sessionStorage.getItem("isInView") == "true"){
            $scope.disabled = true;
        }
    }
    enableView();

    $scope.getElementsOfCareer = function (){
        $scope.loading = true;
        $http.post("http://localhost/university_cloud/Career/getById", request).
        then (function (response) {
            //debugger;
            $scope.loading = false;
            if (response.data.GE3PResponse.code == 0)
            {
                $scope.career = response.data.GE3PResponse.object[0];

            }else

            {console.log(response.data.GE3PResponse.message);

            }
        })
    }

    $scope.getElementsOfCareer();

    $scope.addCareer = function ()
    {
        $scope.loading = true;
        request.GE3PRequest.Career = $scope.career;
        $scope.career = {};
        $http.post("http://localhost/university_cloud/Career/addCareer", request).
        then(function(response)
        {
            $scope.loading = false;
            //debugger;
            if (response.data.GE3PResponse.code == 0)
            {
                $location.url("/university/career");
            }else
            {console.log(response.data.GE3PResponse.message);
            }

        });
    }
});