
(function (data, $) {

    $('#content').children().remove();

    $.get('/view/login.js', function (code) {
        $view = $(eval(code)());
        getView($view);
    }); 

    function getRole(username, password) {
        if (username == "lxyxynt" && password == "123456")
            return "student";
        if (username == "admin" && password == "admin")
            return "admin";
        if (username == "student" && password == "student")
            return "student";
        if (username == "professor" && password == "professor")
            return "professor";
        return null;
    }

    var getView = function ($view) {
        $view.children('form').submit(function () {
            //data.role = $('.username input').val();
            data.role = getRole($('.username input').val(), 
                $('.password input').val());
            
            console.log(data.role);
            window.location.hash = "#dashboard";
            return false;
        });
        $view.appendTo("#content");
    };

});
