(function () {
    angular
        .module("photoSticker")
        .directive("photo", photoDirective);

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
    }

})();

