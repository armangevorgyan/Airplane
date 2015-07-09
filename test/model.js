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

var airPlanes = [];

function City(capital, latitude, longitude) {
    this.capital = capital;
    this.latitude = latitude;
    this.longitude = longitude;
    this.id = 0;
    this.getname = function () {
        return this.capital;
    };
}


var cities = [];

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

var pilotList = [];

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


var stewardessList = [];

function Flight(airplane, citiesFrom, citiesTo, distance, pilots, stewardess) {
    this.airplane = airplane;
    this.citiesFrom = citiesFrom;
    this.citiesTo = citiesTo;
    this.distance = distance;
    this.pilots = pilots;
    this.Stewardess = stewardess;

}
var flights = [];

function RegisterDependency(htmlElementId, array, listType, labelPropertyName, valuePropertyName) {
    this.htmlElementId = htmlElementId;
    this.array = array;
    this.listType = listType;
    this.labelPropertyName = labelPropertyName;
    this.valuePropertyName = valuePropertyName;

    this.init = function () {

        var htmlElement = document.getElementById(this.htmlElementId);

        while (htmlElement.children.length > 1) {
            htmlElement.removeChild(htmlElement.children[1]);
        }

        for (var i = 0; i < this.array.length; i++) {
            var oneElement = document.createElement(this.listType);
            oneElement.label = this.array[i][this.labelPropertyName];
            oneElement.value = this.array[i][this.valuePropertyName];
            htmlElement.appendChild(oneElement);
        }
    };
}



