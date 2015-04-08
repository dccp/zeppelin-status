function updateStatus() {
    var list = [];
    for (var i = 0; i <= config.devices; i++) {
        list.push(i);
    }
    $.each(list, function () {
        var zep = this;
        var port = config.portStart + (zep-1);
        $.ajax({
            url: config.host + ':' + port,
            success: function() {
                console.log('this shouldn\'t happen!');
            },
        }).always(function (xhr) {
            zepp = $('#zep'+zep);
            zepp.css('color', '#f74b4b');
            zepp.text('☒');
            switch(xhr.status){
                case 405:
                    zepp.css('color', '#7bcc3a');
                    zepp.text('☑');
            }
        });
    });
}
