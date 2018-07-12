app.config(["$routeProvider",function ($routeProvider) {
            $routeProvider
                .when("/",
                {
                  templateUrl : "AngularApp/Templates/login.html",
                  controller : "loginController"
                })
                .when("/university",
                {
                  templateUrl : "AngularApp/Templates/university.html",
                  controller : "universityController"
                })
                .when("/university/edit_university/:University_ID",
                    {
                        templateUrl : "AngularApp/Templates/edit_university.html",
                        controller : "editUniversityController"
                    })
                .otherwise({
                    redirectTo : "/"
                })
        }
]);