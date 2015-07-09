(function(app){
    function View() {
    }
    View.prototype.init = function(){
        var airPlaneDropDown = new app.RegisterDependency("plane", app.airPlanes, "option", "model", "id");
        var citiesFromDropDown = new app.RegisterDependency("citiesFrom", app.cities, "option", "capital", "id");
        var citiesToDropDown = new app.RegisterDependency("citiesTo", app.cities, "option", "capital", "id");
        var pilotDropDown = new app.RegisterDependency("pilotID", app.pilotList, "option", "pilotsurname", "id");
        var stewardessDropDown = new app.RegisterDependency("StewardessID", app.stewardessList, "option", "stsurname", "id");
        var pilotEditDropDown = new app.RegisterDependency("pilotEdit", app.pilotList, "option", "pilotsurname", "id");
        var airPlaneEditDropDown = new app.RegisterDependency("airplaneEdit", app.airPlanes, "option", "model", "id");
        app.dependencies.push(airPlaneDropDown);
        app.dependencies.push(citiesFromDropDown);
        app.dependencies.push(citiesToDropDown);
        app.dependencies.push(pilotDropDown);
        app.dependencies.push(stewardessDropDown);
        app.dependencies.push(pilotEditDropDown);
        app.dependencies.push(airPlaneEditDropDown);
        this.observeObj(app.airPlanes);
        this.observeObj(app.cities);
        this.observeObj(app.pilotList);
        this.observeObj(app.stewardessList);

    };
View.prototype.observeObj = function(arr) {
    Array.observe(arr, function(changes){
        changes.forEach(function(change){
            console.log(change.type);
            app.view.update();
        })
    });
};

    var clones = document.getElementsByClassName("Blank");

    View.prototype.initDropDownsUpdateLists = function(arr, classname) {
        for (var i = 1; i < clones.length; i++) {
            var updateLists = clones[i].getElementsByClassName(classname)[0];
            for (var k = 0; k < arr.length; k++) {
                updateLists.options[k + 1] = new Option(arr[k].getname(), k + 1);
            }
        }
    };
    View.prototype.update = function() {

        app.view.initDropDownsUpdateLists(app.pilotList, "pilotID");
        app.view.initDropDownsUpdateLists(app.stewardessList, "StewardessID");
        app.view.addElements();

    };

    View.prototype.workerSet = function(clone, className, workerList, selectedWorkerList, i) {
        var getNames = document.createElement("TR");
        var names = clone.getElementsByClassName("workerNames")[i].appendChild(getNames);

        var selectWorkerIndex = clone.getElementsByClassName(className)[0].options.selectedIndex;
        var selectedWorker = workerList[selectWorkerIndex - 1];
        selectedWorkerList.push(selectedWorker);
        var workerNameColumn = document.createElement("TD");
        var workerNameText = document.createTextNode(selectedWorker.getsurname());
        names.appendChild(workerNameColumn).appendChild(workerNameText);
        console.log(selectedWorker.pilotskills);
    };

    View.prototype.getText = function(clone) {
        var createPassTr = document.createElement("TR");
        var setPassTr = clone.getElementsByClassName("workerNames")[2].appendChild(createPassTr);
        var getPassNames = clone.getElementsByClassName("pass")[0].value;
        var createPassText = document.createTextNode(getPassNames);
        var createPassTd = document.createElement("TD").appendChild(createPassText);
        setPassTr.appendChild(createPassTd);
    };

    View.prototype.checkBoxView = function() {

        var checkBox = document.getElementsByClassName("checkboxSkills")[0];
        var checkBoxForEdit = document.getElementsByClassName("checkboxSkills")[1];
        var checkBoxArray = checkBox.children;
        var oldcheckBoxAmount = checkBoxArray.length;
        var checkBoxForEditArray = checkBoxForEdit.children;
        var oldcheckBoxForEditAmount = checkBoxForEditArray.length;
        for (var j = 0; j < oldcheckBoxAmount; j++) {
            checkBox.removeChild(checkBoxArray[0]);
            checkBoxForEdit.removeChild(checkBoxForEditArray[0]);
        }
        for (var i = 0; i < app.airPlanes.length; i++) {
            var checkboxSkills = document.createElement("INPUT");
            checkboxSkills.type = "checkbox";
            checkboxSkills.value = app.airPlanes[i].model;
            checkboxSkills.className = "airPlaneModel";
            var checkboxSkillsForEdit = document.createElement("INPUT");
            checkboxSkillsForEdit.type = "checkbox";
            checkboxSkillsForEdit.value = app.airPlanes[i].model;
            checkboxSkillsForEdit.className = "airPlaneModel1";
            var span = document.createElement("span");
            span.className = "modelSpan";
            var spanText = document.createTextNode(app.airPlanes[i].model);
            var spanForEdit = document.createElement("span");
            spanForEdit.className = "modelSpanEdit";
            var spanTextForEdit = document.createTextNode(app.airPlanes[i].model);


            spanForEdit.appendChild(spanTextForEdit);
            span.appendChild(spanText);
            checkBox.appendChild(checkboxSkills);
            checkBox.appendChild(span);
            checkBoxForEdit.appendChild(checkboxSkillsForEdit);
            checkBoxForEdit.appendChild(spanForEdit);
        }
    };


    View.prototype.addElements = function() {

        for (var i = 0; i < app.dependencies.length; i++) {
            app.dependencies[i].init();

        }
    };
    View.prototype.editedCheckBoxView = function() {
        var checkBoxSkillsArray = document.getElementsByClassName("checkboxSkills")[0];
        var checkBoxSkillsForEditArray = document.getElementsByClassName("checkboxSkills")[1];
        for (var i = 0; i < checkBoxSkillsArray.length; i++) {
            var spanLabel = checkBoxSkillsArray.getElementsByClassName("modelSpan");
            spanLabel[i].innerHTML = app.airPlanes[i].model;
            var editSpanLabel = checkBoxSkillsForEditArray.getElementsByClassName("modelSpanEdit");
            editSpanLabel[i].innerHTML = app.airPlanes[i].model;
        }
    };




    app.view = new View();
})(window.app);

