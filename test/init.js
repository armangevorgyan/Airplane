(function (window) {
    function App() {

    }

    App.prototype.init = function () {
        this.airPlanes = [];
        this.cities = [];
        this.pilotList = [];
        this.stewardessList = [];
        this.flights = [];
        this.dependencies = [];
        this.view.init();
        this.controller.start();
    };
    window.app = new App();
    window.onload = function () {
        window.app.init();
    };

})(window);


