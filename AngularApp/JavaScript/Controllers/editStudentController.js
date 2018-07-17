app.controller("editStudentController",function ($scope, $http, $location, $routeParams){

    $scope.loading = false;
    $scope.user = {};
    var studentId = $routeParams.User_ID;

    var request =
        {
            "GE3PRequest":
                {
                    "Student":
                        {
                            "User_ID" : studentId
                        }
                }
        };

    $scope.getElementsOfUniversity = function (){
        $scope.loading = true;
        $http.post("http://localhost/university_cloud/Student/getById", request).
        then (function (response) {
            //debugger;
            $scope.loading = false;
            if (response.data.GE3PResponse.code == 0)
            {
                $scope.user = response.data.GE3PResponse.object[0];

            }else

            {console.log(response.data.GE3PResponse.message);

            }
        })
    }

    $scope.getElementsOfUniversity();

    $scope.addStudent = function ()
    {
        $scope.loading = true;
        request.GE3PRequest.Student = $scope.user;
        $scope.user = {};
        $http.post("http://localhost/university_cloud/Student/addStudent", request).
        then(function(response)
        {
            $scope.loading = false;
            debugger;
            if (response.data.GE3PResponse.code == 0)
            {
                $location.url("university/students");
            }else
            {console.log(response.data.GE3PResponse.message);
            }

        });
    }
});