(function(){
    angular
        .module("photoSticker")
        .directive("dragfile", dragFile);

    function dragFile(){
        return {
            restrict: 'A',
            link: dragFileLink
        }
    }

    dragFileLink.$inject = ["scope","element"];

    function dragFileLink(scope,element){
        element.bind('dragstart', function(e) {
            e.dataTransfer.setData("img", e.target.src);
        });

    }
})();