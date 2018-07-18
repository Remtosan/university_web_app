app.controller("AddFormController",function ($scope, $http, $location, $routeParams){
    $scope.careers= [];
    $scope.university = {};
    var request =
        {
            "GE3PRequest":
                {

                }
        };

    function getAllCareers()
    {
        request.GE3PRequest.Career= {};
        $http.post("http://localhost/university_cloud/Career/getAll", request).
        then(function(response)
        {
            if (response.data.GE3PResponse.code == 0)
            {
                $scope.careers = response.data.GE3PResponse.object;
            }else
            {
                console.log(response.data.GE3PResponse.message);
            }
        });
    }
    getAllCareers();


    $scope.addUniversity = function ()
    {
        $scope.loading = true;
        request.GE3PRequest = {};
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