<?php
/*
 * Plugin Name:       Wc Map Products
 * Plugin URI:        https://thedevnil.com
 * Description:       This enable to add address detals in the product options and show a filter option in frontend to filter product (address) based on zip code, address etc
 * Version:           1.0
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            BHUBON NIL
 * Author URI:        https://thedevnil.com
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Update URI:        https://example.com/my-plugin/
 * Text Domain:       wc-map-products
 * Domain Path:       /languages
 */


require_once plugin_dir_path(__FILE__) . 'lib/cmb2/init.php';
require_once plugin_dir_path(__FILE__) . 'class/WMP_Metaboxes.php';
require_once plugin_dir_path(__FILE__) . 'class/WMP_Works.php';

class wmp_init {
    public function __construct() {
        self::wpm_init_all_classes();
    }

    public function wpm_init_all_classes() {
        add_action('wp_enqueue_scripts', [$this, 'wmp_assets']);
        self::wpm_register_metaboxes();
        self::wpm_works();
    }

    public function wpm_register_metaboxes() {
        new WMP_Metaboxes();
    }
    public function wpm_works() {
        new WMP_Works();
    }

    public function wmp_assets() {
        wp_enqueue_style('wpm-main-style', plugins_url('assets/css/main.css', __FILE__), null, '1.0');
        wp_enqueue_style('wpm-datatable', plugins_url('assets/css/datatables.min.css', __FILE__), null, '1.0');


        wp_enqueue_script('wpm-datatable-js', plugins_url('assets/js/datatables.min.js', __FILE__), ['jquery'], '1.0');
        wp_enqueue_script('wpm-main-script', plugins_url('assets/js/main.js', __FILE__), ['jquery'], '1.0');

        wp_localize_script('wpm-main-script', 'wmp_object', [
            'ajax_url' => admin_url('admin-ajax.php'),
        ]);
    }
}

function wmp_init_class() {
    new wmp_init();
}
wmp_init_class();