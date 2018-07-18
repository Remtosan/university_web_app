/**
 * Created by Vongola on 15/07/2018.
 */
app.controller("careerController",function ($scope, $http, $location, $routeParams){

    $scope.careers = [{}];

    $scope.getForm = function () {

        $location.url ("/university/wizardForm");

    }

    var request =
        {
            "GE3PRequest":
                {
                    "Career":
                        {

                        }
                }
        };


    $scope.edit = function (careerId) {

        $location.url ("/university/editCareer/" + careerId);
    }

    $scope.view = function (careerId) {
        //debugger;
        sessionStorage.setItem("isInView", true);
        $location.url ("/university/editCareer/" + careerId);
    }




    //*----- Obtener Todas las Carreras -----*//
    function getAll()
    {
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
    getAll();

    //*----- Obtener Las Carreras por ID -----*//
    $scope.searchById = function ()
    {

        request.GE3PRequest.Career = {"Career_ID": $scope.id};

        $http.post("http://localhost/university_cloud/Career/getById", request).
        then(function(response)
        {
            //debugger;
            if (response.data.GE3PResponse.code == 0)
            {
                $scope.careers = response.data.GE3PResponse.object;
            }else
            {
                console.log(response.data.GE3PResponse.message);
            }
        });
    }

    //*----- Eliminar Carreras -----*//
    $scope.deleteCareer = function (id)
    {
        request.GE3PRequest.Career = {"Career_ID": id};
        if (confirm("Esta Seguro de Querer Eliminar la Carrera?")) {
            $http.post("http://localhost/university_cloud/Career/deleteCareer", request).
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


    }


});