/**
 * Created by Vongola on 05/07/2018.
 */
app.controller("universityController",function ($scope, $http, $location)
{
        $scope.universities = [{}];
        $scope.universities2 = {};

    $scope.getForm = function () {

        $location.url ("/university/wizardForm");

    }

        var request =
            {
                "GE3PRequest":
                    {
                        "Universities":
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



    $scope.edit = function (universityId) {

                $location.url ("/university/edit_university/" + universityId);
        }


        //*----- Obtener Todas las Universidades -----*//
        function getAll()
        {
            $http.post("http://localhost/university_cloud/University/getAll", request).
            then(function(response)
            {
                if (response.data.GE3PResponse.code == 0)
                {
                    $scope.universities = response.data.GE3PResponse.object;
                }else
                {
                    console.log(response.data.GE3PResponse.message);
                }
            });
        }
        getAll();

        //*----- Obtener Las Universidades por ID -----*//
        $scope.searchById = function ()
        {

            request.GE3PRequest.Universities = {"University_ID": $scope.id};

            $http.post("http://localhost/university_cloud/University/getById", request).
            then(function(response)
            {
                //debugger;
                if (response.data.GE3PResponse.code == 0)
                {
                    $scope.universities = response.data.GE3PResponse.object;
                }else
                {
                    console.log(response.data.GE3PResponse.message);
                }
            });
        }

        //*----- Eliminar Universidades -----*//
        $scope.deleteUniversity = function (id)
        {
            request.GE3PRequest.Universities = {"University_ID": id};

            $http.post("http://localhost/university_cloud/University/deleteUniversity", request).
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

