<?php

class WMP_Metaboxes {
    public function __construct() {
        add_action('cmb2_admin_init', [$this, 'wmp_cmb2_init']);
    }
    public function wmp_cmb2_init() {
        $cmb = new_cmb2_box(array(
            'id'            => 'wmp_address_metabox',
            'title'         => __('Address Data', 'wc-map-products'),
            'object_types'  => array('product',),
            'context'       => 'normal',
            'priority'      => 'high',
            'show_names'    => true,
        ));
        $cmb->add_field(array(
            'name'       => __('Zip/Post Code', 'wc-map-products'),
            'desc'       => __('Enter Zip/Post Code Here', 'wc-map-products'),
            'id'         => 'wmp_product_zip_code',
            'type'       => 'text',
            'show_on_cb' => 'cmb2_hide_if_no_cats',
        ));
        $cmb->add_field(array(
            'name'       => __('City/Place', 'wc-map-products'),
            'desc'       => __('Enter City/Place Here', 'wc-map-products'),
            'id'         => 'wmp_product_city',
            'type'       => 'text',
            'show_on_cb' => 'cmb2_hide_if_no_cats',
        ));
        $cmb->add_field(array(
            'name'       => __('PV Plant Size', 'wc-map-products'),
            'desc'       => __('Enter PV Plant Size Here', 'wc-map-products'),
            'id'         => 'wmp_product_pv_plant_size',
            'type'       => 'text',
            'show_on_cb' => 'cmb2_hide_if_no_cats',
        ));
        $cmb->add_field(array(
            'name'       => __('PV Plant Value', 'wc-map-products'),
            'desc'       => __('Enter PV Plant Value Here', 'wc-map-products'),
            'id'         => 'wmp_product_pv_plant_value',
            'type'       => 'text',
            'show_on_cb' => 'cmb2_hide_if_no_cats',
        ));
    }
}
