app.config(["$routeProvider",function ($routeProvider) {
            $routeProvider
                .when("/",
                {
                  templateUrl : "AngularApp/Templates/login.html",
                  controller : "loginController"
                })
                .when("/home",
                {
                  templateUrl : "AngularApp/Templates/home.html",
                  controller : "appController"
                })
                .when("/home/violations",
                    {
                        templateUrl : "AngularApp/Templates/violations.html",
                        controller : "violationsController"
                    })
                .otherwise({
                    redirectTo : "/"
                })
        }
]);