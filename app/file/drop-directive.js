(function(){
    angular
        .module("photoSticker")
        .directive("dropzone", dropzone);

    function dropzone(){
        return {
            restrict: 'A',
            link: dropLink
        }
    }

    dropLink.$inject = ["scope","element"];

    function dropLink(scope,element){
        element.bind("dragover", dragover);
        element.bind("dragenter", dragenter);
        element.bind("drop", drop );

        function dragover(e){
            e.stopPropagation();
            e.preventDefault();
        }

        function dragenter(e){
            e.stopPropagation();
            e.preventDefault();
        }

        function drop(e){
            e.stopPropagation();
            e.preventDefault();
            var src = e.dataTransfer.getData("img");

            img = document.createElement("img");
            img.setAttribute("class","stickerpiece");
            img.setAttribute("style", ("top:"+(e.y-50)+";left:"+ (e.x-50)+"px"));
            img.src= src;

            element[0].appendChild(img);
        }
    }
})();