; (function ($) {
    $(document).ready(function () {
        var map_paths = $('.map_area path');
        var map_text = $('.map_area text');
        for (var i = 0; i <= map_paths.length; i++) {
            $(map_paths[i]).click(function () {
                console.log($(this).attr("id"));
                // console.log(i);
            });
        }
        for(var i = 0; i<=map_text.length;i++){
            $(map_text[i]).on('click',function(){
                console.log($(this).text());
            });
        }
    })
})(jQuery);