(function () {
    angular
        .module("photoSticker")
        .directive("photoarea", photoDirective);

    function photoDirective(){
        var directive = {
            restrict : 'E',
            templateUrl : '/app/photo/directive.html',
            controller: photoController,
            controllerAs: 'photo',
            bindToController: true,
            replace: true,
            transclude: true
        };
        return directive;
    }

    function photoController(){
        var photo = this;
        photo.img = null;
        photo.clear = clear;

        function clear(){
            photo.img = null;
            var elements = document.getElementsByClassName("stickerpiece");
            for( var i in elements){
                elements[i].remove();
            }
        }

    }

})();

