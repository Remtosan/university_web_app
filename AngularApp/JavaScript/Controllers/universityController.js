/**
 * Created by Vongola on 05/07/2018.
 */
app.controller("universityController",function ($scope, $http, $location)
{
        $scope.universities = [{}];
        $scope.universities2 = {};

        var request =
            {
                "GE3PRequest":
                    {
                        "Universities":
                            {

                            }
                    }
            };


        $scope.edit = function (universityId) {

                $location.url ("/university/edit_university/" + universityId);
        }



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

