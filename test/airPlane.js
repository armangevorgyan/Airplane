(function (app) {
    function Airplane(model, maxpil, minpil, maxfly, minpass, maxpass) {
        this.model = model;
        this.maxpil = maxpil;
        this.minpil = minpil;
        this.maxfly = maxfly;
        this.minpass = minpass;
        this.maxpass = maxpass;
        this.id = 0;
        this.getname = function () {
            return this.model;
        };
        this.getsurname = function () {
            return this.model;
        };
    }

    app.AirPlane = Airplane;
})(window.app);
