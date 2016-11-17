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
                url: '/truckDetails/:id',
                templateUrl: '/ngApp/views/truckDetails.html',
                controller: LoadShareApp.Controllers.TruckDetailController,
                controllerAs: 'c'
            })
            .state('loadDetails', {
                url: '/loadDetails/:id',
                templateUrl: '/ngApp/views/loadDetails.html',
                controller: LoadShareApp.Controllers.LoadDetailController,
                controllerAs: 'c'

            })
            .state('secret', {
                url: '/secret',
                templateUrl: '/ngApp/views/secret.html',
                controller: LoadShareApp.Controllers.SecretController,
                controllerAs: 'c'
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
            .state('deleteTruck', {
                url: '/deleteTruck/:id',
                templateUrl: '/ngApp/views/deleteTruck.html',
                controller: LoadShareApp.Controllers.DeleteTruckController,
                controllerAs: 'c'
            })
            .state('deleteLoad', {
                url: '/deleteLoad/:id',
                templateUrl: '/ngApp/views/deleteLoad.html',
                controller: LoadShareApp.Controllers.DeleteLoadController,
                controllerAs: 'c'
            })
            .state('editTruck', {
                url: '/editTruck/:id',
                templateUrl: '/ngApp/views/editTruck.html',
                controller: LoadShareApp.Controllers.EditTruckController,
                controllerAs: 'c'
            })
            .state('editLoad', {
                url: '/editLoad/:id',
                templateUrl: '/ngApp/views/editLoad.html',
                controller: LoadShareApp.Controllers.EditLoadController,
                controllerAs: 'c'
            })
            .state('addLoad', {
                url: '/addLoad',
                templateUrl: '/ngApp/views/addLoad.html',
                controller: LoadShareApp.Controllers.AddLoadController,
                controllerAs: 'c'
            })
            .state('addTruck', {
                url: '/addTruck',
                templateUrl: '/ngApp/views/addTruck.html',
                controller: LoadShareApp.Controllers.AddTruckController,
                controllerAs: 'c'
            })
           
            .state('profile', {
                url: '/profile',
                templateUrl: '/ngApp/views/profile.html',
                controller: LoadShareApp.Controllers.ProfileController,
                controllerAs: 'c'
            })



        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/');

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
