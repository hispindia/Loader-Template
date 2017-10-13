Loader = (function () {
    var Loader = {
        showLoader: function () {
            var iDiv = document.createElement('div');
            iDiv.id =this.selector='loader-wrapper';
            document.getElementsByTagName('body')[0].appendChild(iDiv);

            var innerDiv = document.createElement('div');
            innerDiv.id = 'loader';

            iDiv.appendChild(innerDiv);
            document.getElementById(this.selector).style.visibility = 'hidden';

            return this;

        },
        hideLoader: function () {
            document.getElementById(this.selector).style.visibility = 'visible';
            return this;
        }

    };


    return Loader;
});

