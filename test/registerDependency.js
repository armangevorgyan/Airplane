(function(app){
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

            for (var i = 0; i < array.length; i++) {
                var oneElement = document.createElement(this.listType);
                oneElement.label = array[i][this.labelPropertyName];
                oneElement.value = array[i][this.valuePropertyName];
                htmlElement.appendChild(oneElement);
            }
        };
    }
    app.RegisterDependency = RegisterDependency;
})(window.app);
