
app.controller("AddStudentFormController",function ($scope, $http, $location, $routeParams){

    $scope.student = {};
    var request =
        {
            "GE3PRequest":
                {
                    "Student":
                        {

                        }
                }
        };


    $scope.addStudent = function ()
    {
        $scope.loading = true;
        request.GE3PRequest.Student = $scope.student;
        $scope.student = {};
        $http.post("http://localhost/university_cloud/Student/addStudent", request).
        then(function(response)
        {
            $scope.loading = false;
            //debugger;
            if (response.data.GE3PResponse.code == 0)
            {
                $location.url("/university/students");
            }else
            {console.log(response.data.GE3PResponse.message);
            }

        });
    }


});