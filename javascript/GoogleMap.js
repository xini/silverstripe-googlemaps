jQuery(document).ready(function() {
    jQuery('.$MapID').gmap3({
        map:{
            options: {
                center: [$Latitude,$Longitude],
                zoom: $Zoom
            }
        }
    });
});
