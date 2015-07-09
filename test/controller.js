(function(app) {
    function Controller() {

    }

    Controller.prototype.workerSetForEdit = function(arg, workerList, selectedWorkerList, i) {

        var editTd = document.getElementsByClassName("editTd")[i];

        var selectWorkerIndex = document.getElementsByClassName(arg)[0].options.selectedIndex;
        var selectedWorker = workerList[selectWorkerIndex - 1];
        selectedWorkerList.push(selectedWorker);


        editTd.innerHTML = selectedWorker.getsurname();

        console.log(selectedWorker.maxpass);
        console.log(selectedWorker.id);
    };
    Controller.prototype.takePlaneForEdit = function() {
        var plane = document.getElementsByClassName("airplaneEdit")[0].options.selectedIndex;
        var planeModel = app.airPlanes[plane - 1];
        var editPlaneArray = document.getElementsByClassName("takePlane1");

        editPlaneArray[0].value = planeModel.model;
        editPlaneArray[1].value = planeModel.maxfly;
        editPlaneArray[2].value = planeModel.maxpil;
        editPlaneArray[3].value = planeModel.minpil;
        editPlaneArray[4].value = planeModel.maxpass;
        editPlaneArray[5].value = planeModel.minpass;
        document.getElementsByClassName("editAirplaneBlank")[0].style.display = "block";
    };
    Controller.prototype.takeChangedPlane = function() {
        var editedPlaneArray = document.getElementsByClassName("takePlane1");

        var model = editedPlaneArray[0].value;
        for (var i = 1; i < editedPlaneArray.length; i++) {
            if (!editedPlaneArray[i].value.match(/^\d+$/)) {
                alert(editedPlaneArray[i].value + " Not a Number");
                return false;
            }
        }

        var maxfly = editedPlaneArray[1].value;
        var maxpilot = editedPlaneArray[2].value;
        var minpilot = editedPlaneArray[3].value;
        var maxpass = editedPlaneArray[4].value;
        var minpass = editedPlaneArray[5].value;

        var newModel = new app.AirPlane(model, maxpilot, minpilot, maxfly, minpass, maxpass);
        var editPlaneIndex = document.getElementsByClassName("airplaneEdit")[0].options.selectedIndex;
        var plane = app.airPlanes[editPlaneIndex - 1];
        newModel.id = plane.id;
        console.log(newModel.id);
        console.log(editPlaneIndex);
        app.airPlanes[editPlaneIndex - 1] = newModel;

    };
    Controller.prototype.takePilotForEdit = function() {
        var pilot = document.getElementsByClassName("pilotEdit")[0].options.selectedIndex;
        var selectedPilot = app.pilotList[pilot - 1];
        var inputPilot = document.getElementsByClassName("takePilot");
        inputPilot[0].value = selectedPilot.getname();
        inputPilot[1].value = selectedPilot.getsurname();


    };
    Controller.prototype.takeChangedPilot = function() {
        var pilot = document.getElementsByClassName("pilotEdit")[0].options.selectedIndex;
        var selectedPilot = app.pilotList[pilot - 1];
        var pilotParam = document.getElementsByClassName("takePilot");
        for (var j = 0; j < pilotParam.length; j++) {
            if (pilotParam[j].value.match(/^[A-Za-z\s]{2,}$/)) {
                var pilotname = pilotParam[0].value;
                var pilotsurname = pilotParam[1].value;
            }
            else {
                alert(pilotParam[j].value + " NOt a String");
                return false;
            }
        }

        var newPilotObj = new app.Pilot(pilotname, pilotsurname);
        newPilotObj.id = selectedPilot.id;
        app.pilotList[pilot - 1] = newPilotObj;

        var checkboxesForm = document.getElementsByClassName("checkboxSkills")[1];
        var checkboxes = checkboxesForm.getElementsByClassName("airPlaneModel");
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                newPilotObj.addSkill(checkboxes[i].value);
            }
        }
    };

    Controller.prototype.fly = function(clone, selectedPilotsList, selectedStewardessList) {
        var selectedPlaneIndex = document.getElementsByClassName("plane")[0].options.selectedIndex;
        var selectedPlane = app.airPlanes[selectedPlaneIndex - 1];

        var selectedFirstCityIndex = document.getElementsByClassName("citiesFrom")[0].options.selectedIndex;
        var selectedFirstCity = app.cities[selectedFirstCityIndex - 1];

        var selectedSecondCityIndex = document.getElementsByClassName("citiesTo")[0].options.selectedIndex;
        var selectedSecondCity = app.cities[selectedSecondCityIndex - 1];

        var selectefPilotIndex = clone.getElementsByClassName("pilotID")[0].options.selectedIndex;
        var selectedPilot = app.pilotList[selectefPilotIndex - 1];

        console.log(selectedPilotsList);
        var selectefStewardessIndex = clone.getElementsByClassName("StewardessID")[0].options.selectedIndex;
        var selectedStewardess = app.stewardessList[selectefStewardessIndex - 1];


        var validMaxPilots = false;
        if (selectedPlane.maxpil >= selectedPilotsList.length) {
            validMaxPilots = true;
        }

        var distanceCities = clone.getElementsByClassName("choice1")[1].innerText;
        alert(distanceCities);
        var validDistance = false;
        if (parseFloat(selectedPlane.maxfly) >= parseFloat(distanceCities)) {
            validDistance = true;
        }
        var validSkill = false;

        for (var j = 0; j < selectedPilotsList.length; j++) {
            if (selectedPilotsList[j].pilotskills.indexOf(selectedPlane.model) >= 0) {
                validSkill = true;
                break;
            }
        }

        if (validMaxPilots && validDistance && validSkill) {
            alert("Checked");
        }
        else {
            alert("Checking Failed");
        }
        var flyPropertiesObject = new app.Flight(selectedPlane, selectedFirstCity, selectedSecondCity, distanceCities, selectedPilotsList, selectedStewardessList);
        app.flights.push(flyPropertiesObject);
        console.log(app.flights);
    };
    Controller.prototype.addAirplanes = function() {

        var addAirplaneParam = document.getElementsByClassName("takePlane");

        var model = addAirplaneParam[0].value;

        for (var i = 1; i < addAirplaneParam.length; i++) {
            if (addAirplaneParam[i].value.match(/^\d+$/)) {
                var maxfly = addAirplaneParam[1].value;
                var maxpil = addAirplaneParam[2].value;
                var minpil = addAirplaneParam[3].value;
                var maxpass = addAirplaneParam[4].value;
                var minpass = addAirplaneParam[5].value;

            }
            else {
                alert(addAirplaneParam[i].value + " Not a Number");
                return false;

            }
        }
        var newAirplane = new app.AirPlane(model, maxpil, minpil, maxfly, minpass, maxpass);

        app.airPlanes.push(newAirplane);
        if (app.airPlanes.length === 1) {
            newAirplane.id = 0;
        } else {
            newAirplane.id = app.airPlanes[app.airPlanes.length - 2].id + 1;
        }
        console.log(newAirplane);


    };
    Controller.prototype.addCity = function() {
        var cityParam = document.getElementsByClassName("takeCity");
        if (cityParam[0].value.match(/^[A-Za-z\s]{3,}$/)) {
            var capital = cityParam[0].value;

        }
        else {
            alert(cityParam[0].value + " Not a String");
            return false;
        }
        for (var i = 1; i < cityParam.length; i++) {
            if (cityParam[i].value.match(/^\d+(\.\d+)?$/)) {

                var latitude = parseFloat(cityParam[1].value);
                var longitude = parseFloat(cityParam[2].value);
            }
            else {
                alert(cityParam[i].value + " Not a Number");
                return false;

            }
        }

        var newCity = new app.City(capital, latitude, longitude);
        app.cities.push(newCity);
        if (app.cities.length === 1) {
            newCity.id = 0;
        } else {
            newCity.id = app.cities[app.cities.length - 2].id + 1;
        }

        console.log(newCity);
    };
    Controller.prototype.addPilots = function() {
        var addPilotParam = document.getElementsByClassName("addPilot");
        for (var j = 0; j < addPilotParam.length; j++) {
            if (addPilotParam[j].value.match(/^[A-Za-z\s]{2,}$/)) {
                var pilotname = addPilotParam[0].value;
                var pilotsurname = addPilotParam[1].value;
            }
            else {
                alert(addPilotParam[j].value + " Not a String");
                return false;
            }
        }

        var newPilot = new app.Pilot(pilotname, pilotsurname);

        var checkboxes = document.getElementsByClassName("airPlaneModel");
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                newPilot.addSkill(checkboxes[i].value);

            }
        }
        app.pilotList.push(newPilot);
        if (app.pilotList.length === 1) {
            newPilot.id = 0;
        } else {
            newPilot.id = app.pilotList[app.pilotList.length - 2].id + 1;
        }
        console.log(newPilot);
    };
    Controller.prototype.addStewardess = function() {
        var addStewardessParam = document.getElementsByClassName("addStewardess");
        for (var i = 0; i < addStewardessParam.length; i++) {
            if (addStewardessParam[i].value.match(/^[A-Za-z\s]{2,}$/)) {
                var stname = addStewardessParam[0].value;
                var stsurname = addStewardessParam[1].value;
            }
            else {
                alert(addStewardessParam[i].value + " Not a String");
                return false;
            }
        }

        var newStewardess = new app.Stewardess(stname, stsurname);

        app.stewardessList.push(newStewardess);
        if (app.stewardessList.length === 1) {
            newStewardess.id = 0;
        } else {
            newStewardess.id = app.stewardessList[app.stewardessList.length - 2].id + 1;
        }
        console.log(newStewardess);
    };
    Controller.prototype.calculate = function(lat1, lon1, lat2, lon2, clone) {
        var radLat1 = lat1 * ( Math.PI / 180 );
        var radLon1 = lon1 * ( Math.PI / 180 );
        var radLat2 = lat2 * ( Math.PI / 180 );
        var radLon2 = lon2 * ( Math.PI / 180 );
        var earthRadius = 6372.795;
        var radLonDif = radLon2 - radLon1;
        var atan2top = Math.sqrt(Math.pow(Math.cos(radLat2) * Math.sin(radLonDif), 2) + Math.pow(Math.cos(radLat1) * Math.sin(radLat2) - Math.sin(radLat1) * Math.cos(radLat2) * Math.cos(radLonDif), 2));
        var atan2bottom = Math.sin(radLat1) * Math.sin(radLat2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radLonDif);
        var deltaAngle = Math.atan2(atan2top, atan2bottom);
        var distance = earthRadius * deltaAngle;

        var td1 = document.createElement("TD");
        td1.className = "choice1";
        var t1 = document.createTextNode(distance.toFixed(4) + " Km");
        td1.appendChild(t1);
        clone.getElementsByClassName("trID")[0].appendChild(td1);
    };
    Controller.prototype.add = function() {

        var selectedPlaneIndex = document.getElementsByClassName("plane")[0].options.selectedIndex;
        var selectedPlane = app.airPlanes[selectedPlaneIndex - 1];

        var selectedFirstCityIndex = document.getElementsByClassName("citiesFrom")[0].options.selectedIndex;
        var selectedFirstCity = app.cities[selectedFirstCityIndex - 1];

        var selectedSecondCityIndex = document.getElementsByClassName("citiesTo")[0].options.selectedIndex;
        var selectedSecondCity = app.cities[selectedSecondCityIndex - 1];

        var selectedPilotsList = [];
        var selectedStewardessList = [];


        var choice = document.createTextNode("AirPlane Model - " + selectedPlane.model + "\n" + "From: " + selectedFirstCity.capital + "\n" + "To: " + selectedSecondCity.capital);

        var blank = document.getElementsByClassName("Blank")[0];
        var blankClone = blank.cloneNode(true);
        blankClone.style.display = "block";
        var clone = document.getElementsByClassName("body")[0].appendChild(blankClone);
        clone.getElementsByClassName("choice")[0].appendChild(choice);
        app.controller.calculate(selectedFirstCity.latitude, selectedFirstCity.longitude, selectedSecondCity.latitude, selectedSecondCity.longitude, clone);
        clone.getElementsByClassName("pilotID")[0].onchange = function () {
            app.view.workerSet(clone, "pilotID", app.pilotList, selectedPilotsList, 0);
        };
        clone.getElementsByClassName("StewardessID")[0].onchange = function () {
            app.view.workerSet(clone, "StewardessID", app.stewardessList, selectedStewardessList, 1);
        };
        clone.getElementsByClassName("pass")[0].onchange = function () {
            app.view.getText(clone);
        };
        clone.getElementsByClassName("fly")[0].onclick = function () {
            app.controller.fly(clone, selectedPilotsList, selectedStewardessList);
        };

    };
    Controller.prototype.start = function() {

        document.getElementsByClassName("update")[0].onclick = function () {
            app.view.update();
        };

        document.getElementById("add").addEventListener("click", app.controller.add);
        document.getElementsByClassName("addPlane")[0].addEventListener("click", function () {
            app.controller.addAirplanes();
            app.view.checkBoxView();
        });
        document.getElementsByClassName("addCity")[0].addEventListener("click", function () {
            app.controller.addCity();

        });
        document.getElementsByClassName("submitPilot")[0].onclick = function () {
            app.controller.addPilots();
        };
        document.getElementsByClassName("submitStew")[0].onclick = function () {
            app.controller.addStewardess();
        };
        var selectedPilotsList = [];
        var selectedStewardessList = [];
        var selectedAirPlaneList = [];
        document.getElementsByClassName("pilotEdit")[0].onchange = function () {
            app.controller.workerSetForEdit("pilotEdit", app.pilotList, selectedPilotsList, 0);
        };
        document.getElementsByClassName("stewardessEdit")[0].onchange = function () {
            app.controller.workerSetForEdit("stewardessEdit", app.stewardessList, selectedStewardessList, 1);
        };
        document.getElementsByClassName("airplaneEdit")[0].onchange = function () {
            app.controller.workerSetForEdit("airplaneEdit", app.airPlanes, selectedAirPlaneList, 2);
        };
        document.getElementsByClassName("changePlane")[0].onclick = function () {
            app.controller.takePlaneForEdit();
        };
        document.getElementsByClassName("changePlane1")[0].onclick = function () {
            app.controller.takeChangedPlane();
            app.view.editedCheckBoxView();


        };
        document.getElementsByClassName("changePilot")[0].onclick = function () {
            app.controller.takePilotForEdit();
        };
        document.getElementsByClassName("takeChangePilot")[0].onclick = function () {
            app.controller.takeChangedPilot();


        };

    };
    app.controller = new Controller();

})(window.app);
