namespace LoadShareApp.Controllers {

    export class HomeController {

        public message = "Hello from the Load page!";
        private LoadResource;
        public loads;

        private TruckResource;
        public trucks;

        public getTrucks() {
            this.trucks = this.TruckResource.query();

        }

        public getLoads() {
            this.loads = this.LoadResource.query();
        }


        constructor(private $resource: angular.resource.IResourceService,
            public $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService) {
            this.LoadResource = $resource('/api/loads/:id');
            this.getLoads();
            this.TruckResource = $resource('/api/trucks/:id');
            this.getTrucks();
        }
    }

    export class TruckController {
        public message = "Hello from the Truck page!";
        private TruckResource;
        public trucks;

        public getTrucks() {
            this.trucks = this.TruckResource.query();

        }

        //controller for post Truck modal
        addLoadModal(load) {
            this.$uibModal.open({

                templateUrl: '/ngapp/views/modals/createLoad.html',
                controller: LoadShareApp.Controllers.AddLoadController,
                controllerAs: 'c',
                resolve: {
                    load: () => load
                },
                size: 'lg'
            }).closed.then(() => {

            });
        }
        public getTruck(id: number) {
            this.trucks = this.TruckResource.get({ id: id });
        }

        constructor($resource: angular.resource.IResourceService,
            public $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService,
            public $uibModal: angular.ui.bootstrap.IModalService) {
            this.TruckResource = $resource('/api/trucks/:id');
            this.getTrucks();

        }
    }

    export class LoadController {
        public message = "Hello from the Load page!";
        private LoadResource;
        public loads;

        public getLoads() {
            this.loads = this.LoadResource.query()
        }
        //controller for post Load modal
        addTruckModal(load) {
            this.$uibModal.open({

                templateUrl: '/ngapp/views/loadDetails.html',
                controller: 'AddLoadController',
                controllerAs: 'c',
                resolve: {
                    load: () => load
                },
                size: 'lg'
            }).closed.then(() => {
                this.getLoads();
            });
        }

        constructor(private $resource: angular.resource.IResourceService,
            public $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService,
            public $uibModal: angular.ui.bootstrap.IModalService) {
            this.LoadResource = $resource('/api/loads');
            this.getLoads();
        }
    }

    export class TruckDetailController {
        public message = "Hello from the Truck Detail page!";
        private TruckDetailResource;

        public truck;
        public getTruck(id: number) {
            this.truck = this.TruckDetailResource.get({ id: id });
            console.log(this.truck);
        }


        public save() {
            this.TruckDetailResource.save(this.truck).$promise.then(() => {
                console.log(this.truck);
                this.truck = null;
                this.$state.go('truckDetails');
            })
        }

        constructor(private $resource: angular.resource.IResourceService,
            public $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService) {
            this.TruckDetailResource = this.$resource('/api/trucks/:id');
            this.getTruck($stateParams["id"]);

        }
    }
    export class LoadDetailController {
        public LoadDetailResource;
        public load;
        public getLoad(id: number) {
            this.load = this.LoadDetailResource.get({ id: id });

        }

        public save() {
            this.LoadDetailResource.save(this.load).$promise.then(() => {
                this.load = null;
                this.getLoad(this.load);
            })
        }

        constructor(private $resource: angular.resource.IResourceService,
            public $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService) {
            this.LoadDetailResource = this.$resource('/api/loads/:id');
            this.getLoad($stateParams["id"]);

        }
    }
    export class AddLoadController {
        public load;
        public LoadResource;
        public save() {
            this.LoadResource.save(this.load).$promise.then(() => {
                this.load = null;
                this.$state.go('home');
            });
        }

        //Post the movie after making changes
        public saveLoad() {
            this.LoadResource.save(this.load).$promise.then(() => {
                this.load = null;
                this.$state.go(`home`);
            })
        }
        constructor(
            private $resource: angular.resource.IResourceService,
            public $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService) {
            this.LoadResource = $resource('/api/loads');
        }



    }


    export class AddTruckController {
        public truck;
        public TruckResource;

        public save() {
        this.TruckResource.save(this.truck).$promise.then(() => {
            this.truck = null;
            this.$state.go('home');
        });
    }
        

        //Post the truck after making changes
        public saveTruck() {
            this.TruckResource.save(this.truck).$promise.then(() => {
                this.truck = null;
                this.$state.go(`home`);
            })
        }

        constructor(
            private $resource: angular.resource.IResourceService,
            public $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService) {
            this.TruckResource = $resource('/api/trucks');
        }
    }

    export class DeleteTruckController {
        public truck;
        public TruckResource;

        public getTruck(id: number) {
            this.truck = this.TruckResource.get({ id: id });
            console.log(this.truck.id);
        }
        public deleteTruck() {
            this.TruckResource.delete({ id: this.truck.id }).$promise.then(() => {
                this.truck = null;
                this.$state.go(`home`);
            })
        }

        constructor(private $resource: angular.resource.IResourceService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService) {

            this.TruckResource = $resource(`/api/trucks/:id`);
            this.getTruck($stateParams[`id`]);
        }
    }
    export class DeleteLoadController {
        public load;
        public LoadResource;

        public getLoad(id: number) {
            this.load = this.LoadResource.get({ id: id });
            console.log(this.load.id);
        }
        public deleteLoad() {
            this.LoadResource.delete({ id: this.load.id }).$promise.then(() => {
                this.load = null;
                this.$state.go(`home`);
            })
        }

        constructor(private $resource: angular.resource.IResourceService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService) {

            this.LoadResource = $resource(`/api/loads/:id`);
            this.getLoad($stateParams[`id`]);
        }
    }
    export class EditLoadController {
        public TruckController;
        public LoadController;
        public load;
        public LoadResource
        public getLoad(id: number) {
            this.load = this.LoadResource.get({ id: id })
        }
        constructor(
            private $resource: angular.resource.IResourceService,
            public $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService) {

            this.LoadResource = this.$resource(`/api/loads/:id`);
            this.getLoad($stateParams[`id`]);
        }
        public save() {
            this.LoadResource.save(this.load).$promise.then(() => {
                this.load = null;
                this.$state.go('home');
            })
        }
    }
    export class EditTruckController {
        public LoadController;
        public truck;
        public TruckResource
        public getTruck(id: number) {
            this.truck = this.TruckResource.get({ id: id })
        }
        constructor(
            private $resource: angular.resource.IResourceService,
            public $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService) {

            this.TruckResource = this.$resource(`/api/trucks/:id`);
            this.getTruck($stateParams[`id`]);
        }
        public save() {
            this.TruckResource.save(this.truck).$promise.then(() => {
                this.truck = null;
                this.$state.go('home');
            })
        }
    }
    export class SecretController {
        public secrets;

        constructor($http: ng.IHttpService) {
            $http.get('/api/secrets').then((results) => {
                this.secrets = results.data;
            });
        }
    }
}






     //public $uibModal: angular.ui.bootstrap.IModalService,
                    //private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) {