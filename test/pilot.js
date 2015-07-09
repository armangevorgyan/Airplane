(function(app) {
    function Pilot(pilotname, pilotsurname) {
        this.pilotname = pilotname;
        this.pilotsurname = pilotsurname;
        this.pilotskills = [];
        this.id = 0;
        this.getname = function () {
            return this.pilotname;
        };
        this.getsurname = function () {
            return this.pilotsurname;
        };
        this.addSkill = function (skill) {
            this.pilotskills.push(skill);
        };
    }
    app.Pilot = Pilot;
})(window.app);
