(function(){
    angular
        .module("photoSticker")
        .directive("fileread", fileread);

    function fileread(){
        return {
            scope:{
                fileread:"="
            },
            link: linkFileRead
        }
    }

    function linkFileRead(scope,element,attributes){
        element.bind("change", fileChange );

        function fileChange(changeEvent){
            var reader = new FileReader();

            reader.onload = function(e){
                scope.$apply( function() {
                    scope.fileread = e.target.result;
                });
            };

            reader.readAsDataURL(changeEvent.target.files[0]);
        }
    }
})();