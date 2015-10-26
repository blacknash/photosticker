(function () {
    angular
        .module("photoSticker")
        .directive("stickerarea", stickerDirective);

    function stickerDirective(){
        var directive = {
            restrict : 'E',
            templateUrl : '/app/sticker/directive.html',
            controller: stickerController,
            controllerAs: 'sticker',
            bindToController: true,
            replace: true,
            transclude: true
        };
        return directive;
    }

    function stickerController(){
        var sticker = this;
        sticker.collection = [];
        sticker.new = newSticker;
        sticker.delete = deleteSticker;

        function deleteSticker(element){
            var index = sticker.collection.indexOf(element);
            sticker.collection.splice(index,1);
        }

        function newSticker(){
            sticker.collection.push(sticker.item);
            sticker.item = null;
            document.getElementById("close-modal").click();
        }
    }

})();

