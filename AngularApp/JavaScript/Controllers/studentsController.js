/**
 * Created by Vongola on 15/07/2018.
 */
app.controller("studentsController",function ($scope, $http, $location, $routeParams){

    $scope.students = [{}];

    $scope.getForm = function () {

        $location.url ("/university/wizardForm");

    }

    var request =
        {
            "GE3PRequest":
                {
                    "Student":
                        {

                        }
                }
        };


    $scope.edit = function (studentId) {

        $location.url ("/university/editStudent/" + studentId);
    }


    //*----- Obtener Todas los Estudiantes -----*//
    function getAll()
    {
        $http.post("http://localhost/university_cloud/Student/getAll", request).
        then(function(response)
        {
            if (response.data.GE3PResponse.code == 0)
            {
                $scope.students = response.data.GE3PResponse.object;
            }else
            {
                console.log(response.data.GE3PResponse.message);
            }
        });
    }
    getAll();

    //*----- Obtener Los Estudiantes por ID -----*//
    $scope.searchById = function ()
    {

        request.GE3PRequest.Student = {"User_ID": $scope.id};

        $http.post("http://localhost/university_cloud/Student/getById", request).
        then(function(response)
        {
            //debugger;
            if (response.data.GE3PResponse.code == 0)
            {
                $scope.students = response.data.GE3PResponse.object;
            }else
            {
                console.log(response.data.GE3PResponse.message);
            }
        });
    }

    //*----- Eliminar Estudiantes -----*//
    $scope.deleteStudent = function (id)
    {
        request.GE3PRequest.Student = {"User_ID": id};

        $http.post("http://localhost/university_cloud/Student/deleteStudent", request).
        then(function(response)
        {
            //debugger;
            if (response.data.GE3PResponse.code == 0)
            {
                getAll();
            }else
            {
                console.log(response.data.GE3PResponse.message);
            }
        });
    }

});