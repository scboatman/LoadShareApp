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

        //Load Modal Contrroller
        public loadModal(loadId) {
            this.$uibModal.open({
                templateUrl: '/ngApp/views/modals/loadModal.html',
                controller: LoadShareApp.Controllers.LoadModalController,
                controllerAs: 'c',
                resolve: {
                    loadId: () => loadId
                },
                size: 'lg'
            });
        }
        //end Load MOdal Controller
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
        //TruckModal>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        public truckModal(truckId) {
            this.$uibModal.open({
                templateUrl: '/ngApp/views/modals/truckModal.html',
                controller: LoadShareApp.Controllers.TruckModalController,
                controllerAs: 'c',
                resolve: {
                    truckId: () => truckId
                },
                size: 'lg'
            });
        }
        //End TruckModal>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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


        //Post the load from TruckDetails Page after making changes
        private LoadResource;
        public load;
        public saveLoad() {
            this.LoadResource.save(this.load).$promise.then(() => {
                this.load = null;
                this.$state.go(`truckDetails`);
            })
        }

        //Load Modal Contrroller
        public loadModal(loadId) {
            this.$uibModal.open({
                templateUrl: '/ngApp/views/modals/loadModal.html',
                controller: LoadShareApp.Controllers.LoadModalController,
                controllerAs: 'c',
                resolve: {
                    loadId: () => loadId
                },
                size: 'lg'
            });
        }
        //end Load MOdal Controller
        constructor(private $resource: angular.resource.IResourceService,
            public $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService,
            private $uibModal: angular.ui.bootstrap.IModalService) {//LoadMOdal logic
            this.TruckDetailResource = this.$resource('/api/trucks/:id');
            this.getTruck($stateParams["id"]);
            this.LoadResource = $resource('/api/loads/:id');
            

        }
    }
    export class LoadDetailController {
        public LoadResource;
        public load;
        public getLoad(id: number) {
            this.load = this.LoadResource.get({ id: id });

        }
        //Post the truck after making changes
        private TruckResource;
        public truck;
        
        public saveTruck() {
            this.TruckResource.save(this.truck).$promise.then(() => {
                this.truck = null;
                this.$state.go(`loadDetails`);
            })
        }
       

        public save() {
            this.LoadResource.save(this.load).$promise.then(() => {
                this.load = null;
                this.getLoad(this.load);
            })
        }
        //TruckModal>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        public truckModal(truckId) {
            this.$uibModal.open({
                templateUrl: '/ngApp/views/modals/truckModal.html',
                controller: LoadShareApp.Controllers.TruckModalController,
                controllerAs: 'c',
                resolve: {
                    truckId: () => truckId
                },
                size: 'lg'
            });
        }
        //End TruckModal>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        constructor(private $resource: angular.resource.IResourceService,
            public $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService,
            private $uibModal: angular.ui.bootstrap.IModalService) {//TruckModal>>>>>>>>>>>>>>>>>>>>
            this.LoadResource = this.$resource('/api/loads/:id');
            this.getLoad($stateParams["id"]);
            this.TruckResource = $resource('/api/trucks/:id');
            
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
    export class TruckModalController {
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
                this.$state.go(`loadDetails`);
            })
        }
        //////TruckModal>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        public ok() {
            this.$uibModalInstance.close();
        }
        constructor(
            private $resource: angular.resource.IResourceService,
            public $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService,
            private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) {///////TruckMOdal Logic
            this.TruckResource = $resource('/api/trucks');
        }
    }
    
    export class LoadModalController {
        public load;
        public Loads;
        public LoadResource;
        public save() {
            this.LoadResource.save(this.load).$promise.then(() => {
                this.load = null;
                this.$state.go('home');
            });
        }
        ///LoadModal>>>>>>>>>>>>>>>>
        public ok() {
            this.$uibModalInstance.close();
        }
        //Post the movie after making changes
        public saveLoad() {
            this.LoadResource.save(this.load).$promise.then(() => {
                this.load = null;
                this.$state.go(`truckDetails`);
            })
        }
        
        constructor(
            private $resource: angular.resource.IResourceService,
            public $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService,
            private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) {
            this.LoadResource = $resource('/api/loads');
        }



    }
    export class LocationsController {
        public locations;
        public LocationResource;
        public LoadResource;
        public loads;
        public getLocations() {
            this.locations = this.LocationResource.query();
            console.log(this.locations);            
           
        }


        constructor(private $resource: angular.resource.IResourceService) {
            this.LocationResource = this.$resource('/api/locations');
            this.getLocations();
            
            //$http.get('/api/secrets').then((results) => {
            //    this.locations = results.data;
            //});
        }
    }
    export class ProfileController {

    }

}







     //public $uibModal: angular.ui.bootstrap.IModalService,
                    //private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) {