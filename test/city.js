(function(app) {
    function City(capital, latitude, longitude) {
        this.capital = capital;
        this.latitude = latitude;
        this.longitude = longitude;
        this.id = 0;
        this.getname = function () {
            return this.capital;
        };
    }
    app.City = City;
})(window.app);
