; (function ($) {
    $(document).ready(function () {
        var map_paths = $('.map_area path');
        var map_text = $('.map_area text');
        for (var i = 0; i <= map_paths.length; i++) {
            $(map_paths[i]).click(function () {
                var zip_code = 0+($(this).attr("id"));
                var data = {
                    'action': 'wmp_form_zip1_filter',
                    'zip': zip_code,
                };
                jQuery.post(wmp_object.ajax_url, data, function (response) {
                    $('#wmp_tble_body').html(response.data);
                });
            });
        }
        for (var i = 0; i <= map_text.length; i++) {
            $(map_text[i]).on('click', function () {
                console.log($(this).text());
            });
        }


        // form filter
        $('#wc_map_filter_form').submit(function (e) {
            e.preventDefault();
            var zip = $("#wc_form_zip").val();
            var city = $("#wc_form_city").val();
            var data = {
                'action': 'wmp_form_ajac_filter',
                'city': city,
                'zip': zip,
            };
            // We can also pass the url value separately from ajaxurl for front end AJAX implementations
            jQuery.post(wmp_object.ajax_url, data, function (response) {
                // $('#wmp_tble_body').html('');
                $('#wmp_tble_body').html(response.data);
            });

        });
    })
})(jQuery);