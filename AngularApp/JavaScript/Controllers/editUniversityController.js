app.controller("editUniversityController",function ($scope, $http, $location, $routeParams){

    $scope.loading = false;
    $scope.university = {};
    var universityId = $routeParams.University_ID;

    var request =
        {
            "GE3PRequest":
                {
                    "Universities":
                        {
                            "University_ID" : universityId
                        }
                }
        };

    $scope.getElementsOfUniversity = function (){
        $scope.loading = true;
        $http.post("http://localhost/university_cloud/University/getById", request).
            then (function (response) {
            //debugger;
            $scope.loading = false;
            if (response.data.GE3PResponse.code == 0)
            {
               $scope.university = response.data.GE3PResponse.object[0];

            }else

            {console.log(response.data.GE3PResponse.message);

            }
        })
    }

        $scope.getElementsOfUniversity();

    $scope.addUniversity = function ()
        {
            $scope.loading = true;
            request.GE3PRequest.Universities = $scope.university;
            $scope.university = {};
            $http.post("http://localhost/university_cloud/University/addUniversity", request).
            then(function(response)
            {
                $scope.loading = false;
                //debugger;
                if (response.data.GE3PResponse.code == 0)
                {
                    $location.url("/university");
                }else
                {console.log(response.data.GE3PResponse.message);
                }

            });
        }
});