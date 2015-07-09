(function (app) {
    function Stewardess(stname, stsurname) {
        this.stname = stname;
        this.stsurname = stsurname;
        this.stewardessskills = [];
        this.id = 0;
        this.getname = function () {
            return this.stname;
        };
        this.getsurname = function () {
            return this.stsurname;
        };
        this.addSkills = function (skills) {
            this.stewardessskills.push(skills);
        };
    }

    app.Stewardess = Stewardess;
})(window.app);
