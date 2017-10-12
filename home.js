window.Loader = (function () {


    var Loader = {
        showLoader: function (selector) {
            document.getElementById(selector).style.visibility = 'visible';


        },
        hideLoader:function(selector){
            document.getElementById(selector).style.visibility = 'hidden';

        }
    };

    return Loader;
}());


/*

Loader.prototype.hideLoader=function(){
    document.getElementById(selector).style.visibility = 'hidden';

}

*/
