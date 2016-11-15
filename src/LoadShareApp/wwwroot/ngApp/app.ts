namespace LoadShareApp {

    angular.module('LoadShareApp', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
         .state('home', {
            url: '/',
            templateUrl: '/ngApp/views/home.html',
            controller: LoadShareApp.Controllers.HomeController,
            controllerAs: 'c'
        })
            .state('trucks', {
                url: '/trucks',
                templateUrl: '/ngApp/views/trucks.html',
                controller: LoadShareApp.Controllers.TruckController,
                controllerAs: 'c'
            })
            .state('loads', {
                url: '/loads',
                templateUrl: '/ngApp/views/loads.html',
                controller: LoadShareApp.Controllers.LoadController,
                controllerAs: 'c'
            })
            .state('truckDetails', {
                url: '/truckDetails',
                templateUrl: '/ngApp/views/truckDetails.html',
                controller: LoadShareApp.Controllers.TruckDetailController,
                controllerAs: 'c'
            })
            .state('loadDetails', {
                url: '/loadDetails',
                templateUrl: '/ngApp/views/loadDetails.html',
                controller: LoadShareApp.Controllers.LoadDetailController,
                controllerAs: 'c'

            })
            .state('secret', {
                url: '/secret',
                templateUrl: '/ngApp/views/secret.html',
                controller: LoadShareApp.Controllers.SecretController,
                controllerAs: 'controller'
            })
            .state('login', {
                url: '/login',
                templateUrl: '/ngApp/views/login.html',
                controller: LoadShareApp.Controllers.LoginController,
                controllerAs: 'controller'
            })
            .state('register', {
                url: '/register',
                templateUrl: '/ngApp/views/register.html',
                controller: LoadShareApp.Controllers.RegisterController,
                controllerAs: 'controller'
            })
            .state('externalRegister', {
                url: '/externalRegister',
                templateUrl: '/ngApp/views/externalRegister.html',
                controller: LoadShareApp.Controllers.ExternalRegisterController,
                controllerAs: 'controller'
            }) 
           

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

    
    angular.module('LoadShareApp').factory('authInterceptor', (
        $q: ng.IQService,
        $window: ng.IWindowService,
        $location: ng.ILocationService
    ) =>
        ({
            request: function (config) {
                config.headers = config.headers || {};
                config.headers['X-Requested-With'] = 'XMLHttpRequest';
                return config;
            },
            responseError: function (rejection) {
                if (rejection.status === 401 || rejection.status === 403) {
                    $location.path('/login');
                }
                return $q.reject(rejection);
            }
        })
    );

    angular.module('LoadShareApp').config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });

    

}
