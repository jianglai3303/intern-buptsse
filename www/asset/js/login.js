
(function (data, $) {

    $('#content').children().remove();

    $.get('/ui/login.js', function (code) {
        $view = $(eval(code)());
        getView($view);
    }); 

    var getView = function ($view) {
        $view.children('form').submit(function () {
            data.role = $('.username input').val();
            console.log(data.role);
            window.location.hash = "#dashboard";
            return false;
        });
        $view.appendTo("#content");
    };

});
