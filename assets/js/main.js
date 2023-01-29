; (function ($) {
    $(document).ready(function () {

        // datatable
        $('#wc_map_datatable').DataTable();

        // hide variation notice
        $('#variation_wrapper_close').click(function () {
            jQuery('.variation_info').css('display', 'none');
            jQuery('.variation_info p').text('');
        });

        // others

        var map_paths = $('.map_area path');
        var map_text = $('.map_area text');
        for (var i = 0; i <= map_paths.length; i++) {
            $(map_paths[i]).click(function () {
                // alert($(this).attr("id"));
                var table_body = $('#wmp_tble_body');
                table_body.html('<div class="lds-facebook"><div></div><div></div><div></div></div>');
                var zip_code = 0 + ($(this).attr("id"));
                var data = {
                    'action': 'wmp_form_zip1_filter',
                    'zip': zip_code,
                };
                jQuery.post(wmp_object.ajax_url, data, function (response) {
                    table_body.html('');
                    $('.product_area').html(response.data);
                    $('#wc_map_datatable').DataTable();
                });
            });
        }
        for (var i = 0; i <= map_text.length; i++) {
            $(map_text[i]).on('click', function () {
                var table_body = $('#wmp_tble_body');
                table_body.html('<div class="lds-facebook"><div></div><div></div><div></div></div>');
                var zip_code = ($(this).text());
                var data = {
                    'action': 'wmp_form_zip1_filter',
                    'zip': zip_code,
                };
                jQuery.post(wmp_object.ajax_url, data, function (response) {
                    table_body.html('');
                    $('.product_area').html(response.data);
                    $('#wc_map_datatable').DataTable();
                });
            });
        }


        // form filter
        $('#wc_map_filter_form').submit(function (e) {
            e.preventDefault();
            var table_body = $('#wmp_tble_body');
            table_body.html('<div class="lds-facebook"><div></div><div></div><div></div></div>');
            var zip = $("#wc_form_zip").val();
            var city = $("#wc_form_city").val();
            var data = {
                'action': 'wmp_form_ajac_filter',
                'city': city,
                'zip': zip,
            };
            // We can also pass the url value separately from ajaxurl for front end AJAX implementations
            jQuery.post(wmp_object.ajax_url, data, function (response) {
                table_body.html('');
                $('.product_area').html(response.data);
                $('#wc_map_datatable').DataTable();
            });

        });
    });

})(jQuery);

function variation_change(me) {
    // var selected_value = (jQuery(me).find(":selected").val());
    var selected_value = (jQuery(me).val());
    var selected_product = (jQuery("option:selected", me).attr("data-pid"));
    var selected_count = (jQuery("option:selected", me).attr("data-count"));


    var data = {
        'action': 'wmp_variation_change',
        'variation_id': selected_value,
        'selected_count': selected_count,
    };
    jQuery.post(wmp_object.ajax_url, data, function (response) {
        // console.log(response.price);
        // console.log(selected_product);
        // console.log(jQuery(`#product_${selected_product}`));
        // jQuery(`#${selected_product}`).html(response.price);
        jQuery(`#producttr_${selected_product} span#${selected_product}`).html(response.price);



        jQuery(`#producttr_${selected_product} .button_wrap`).html(response.button);
        if (response.staus == 1) {
            jQuery(`#producttr_${selected_product} a.button`).attr('data-product_id', response.variation_id);
        }
        jQuery('.variation_info p').text(response.variation_info);
        jQuery('.variation_info').css('display', 'block');

    });
}