(function(app) {
    function Flight(airplane, citiesFrom, citiesTo, distance, pilots, stewardess) {
        this.dsf = airplane;
        this.citiesFrom = citiesFrom;
        this.citiesTo = citiesTo;
        this.distance = distance;
        this.pilots = pilots;
        this.Stewardess = stewardess;

    }
    app.Flight = Flight;
})(window.app);
