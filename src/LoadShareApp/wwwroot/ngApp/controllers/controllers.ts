namespace LoadShareApp.Controllers {

    export class HomeController {

        private LoadResource;
        public loads;


        public getLoads() {
            this.loads = this.LoadResource.query()
        }
        constructor(private $resource: angular.resource.IResourceService) {
            this.LoadResource = $resource('/api/loads');
            this.getLoads();
        }


    }

    export class TruckController {
        public message = "Hello from the Truck page!";
        private TruckResource;
        public trucks;

        public getTrucks() {
            this.trucks = this.TruckResource.query()
        }

        constructor($resource: angular.resource.IResourceService) {
            this.TruckResource = $resource('/api/trucks');
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

        constructor(private $resource: angular.resource.IResourceService) {
            this.LoadResource = $resource('/api/loads');
            this.getLoads();
        }
    }
    export class TruckDetailController {
        public message = "Hello from the Truck Detail page!";
        private TruckDetailResource;
        public TruckDetail;
        public truckDetails;

        public getTruckDetails() {
            this.truckDetails = this.TruckDetailResource.query();
        }
        public save() {
            this.TruckDetailResource.save(this.TruckDetail).$promise.then(() => {
                this.TruckDetail = null;
                this.getTruckDetails();
            })
        }

        constructor(private $resource: angular.resource.IResourceService) {
            this.TruckDetailResource = $resource('/api/truckDetails');
            this.getTruckDetails();
        }
    }
    export class LoadDetailController {
        public message = "Hello from the Load Deatails Detail page!";
        private LoadDetailResource;

        public loadDetails;

        public getLoadDetails() {
            this.loadDetails = this.LoadDetailResource.query();
        }

        constructor(private $resource: angular.resource.IResourceService) {
            this.LoadDetailResource = $resource('/api/loadDetails');
            this.getLoadDetails();
        }
    }
    export class AddLoadController {
        public load;
        public LoadResource;

        public save() {
            this.LoadResource.save(this.load).$promise.then(() => {
                this.load = null;
                this.$state.go(`loads`);
            });
        }
        //Post the load after making changes
        public saveLoad() {
            this.LoadResource.save(this.load).$promise.then(() => {
                this.load = null;
                this.$state.go(`loads`);
            })
        }

        constructor(private $resource: angular.resource.IResourceService, private $state: ng.ui.IStateService) {
            this.LoadResource = $resource('/api/loads');
        }
    }
    export class AddTruckController {
        public truck;
        public TruckResource;

        public save() {
            this.TruckResource.save(this.truck).$promise.then(() => {
                this.truck = null;
                this.$state.go(`trucks`);
            });
        }
        //Post the truck after making changes
        public saveTruck() {
            this.TruckResource.save(this.truck).$promise.then(() => {
                this.truck = null;
                this.$state.go(`trucks`);
            })
        }

        constructor(private $resource: angular.resource.IResourceService, private $state: ng.ui.IStateService) {
            this.TruckResource = $resource('/api/trucks');
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
