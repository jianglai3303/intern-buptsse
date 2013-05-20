
(function (data, $) {

    $("#dashboard .sidebar ul li").removeClass('active');
    $("#dashboard .sidebar ul li#nav-wish").addClass('active');
    $("#task-panel").children().remove();

    if(data.phase == 2){
        $.get('/ui/dashboard/wish.js', function (code) {
            $view = $(eval(code)(data));
            getView($view);
        });

        var getView = function ($view) {
            $view.appendTo("#task-panel");
        };
    }

});
