<?php
/**
 * Plugin Name: RussBlock
 * Description: Block for Russ
 * Version: 1.0.0
 * Author: Russ
 *
 * @package russblock
 */

 // Exit if accessed directly.
 if ( ! defined( 'ABSPATH' ) ) {
 	exit;
 }

// Add Russblock Category
 function russblock_block_categories( $categories, $post ) {
     return array_merge(
         $categories,
         array(
             array(
                 'slug' => 'russblock',
                 'title' => __( 'Russ Blocks', 'russblock' ),
             ),
         )
     );
 }

add_filter( 'block_categories', 'russblock_block_categories', 10, 2 );

// Register blocks
function russblock_plugin_editor_scripts() {

    // Enqueue block editor JS
    wp_register_script(
        'russblock/editor-scripts', //namespace
        plugins_url( 'build/index.build.js', __FILE__ ), //js built by webpack
        [ 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n' ], //dependencies
        filemtime( plugin_dir_path( __FILE__ ) . 'build/index.build.js' ) //uses last update as version number
    );

    // Enqueue block editor styles
    wp_register_style(
        'russblock/editor-styles',
        plugins_url( 'src/editor.css', __FILE__ ),
        [ 'wp-edit-blocks' ],
        filemtime( plugin_dir_path( __FILE__ ) . 'src/editor.css' )
    );

    wp_register_style(
        'russblock/stylesheets',
        plugins_url( 'src/view.css', __FILE__ ),
        [ 'wp-edit-blocks' ],
        filemtime( plugin_dir_path( __FILE__ ) . 'src/view.css' )
    );

    register_block_type('russblock/block-library', array(
        'editor_script' => 'russblock/editor-scripts',
        'editor_style' => 'russblock/editor-styles',
        'style' => 'russblock/stylesheets'
    ));

}
// Hook the enqueue functions into the editor
add_action( 'init', 'russblock_plugin_editor_scripts' );


/**
 * Enqueue view scripts
 */
function russblock_plugin_view_scripts() {
    if ( is_admin() ) {
        return;
    }
    wp_enqueue_script(
		    'russblock/view-scripts',
		     plugins_url( 'build/view.build.js', __FILE__ ),
        [ 'wp-element' ],
        filemtime( plugin_dir_path( __FILE__ ) . 'build/view.build.js' ),
        true
    );
}
add_action( 'wp_enqueue_scripts', 'russblock_plugin_view_scripts', 1 );

/** old enqueue method
 * function russblock_hero_editor_assets() {
 *     wp_enqueue_script(
 *         'russblock/hero',
 *         plugins_url( 'build/index.build.js', __FILE__ ),
 *         array( 'wp-blocks', 'wp-element', 'wp-editor' )
 *     );
 *     wp_enqueue_style(
 *          'russblock/hero-editor-style',
 *          plugins_url( 'src/editor.css', __FILE__ ),
 *          array( 'wp-edit-blocks' )
 *     );
 *};
 *
 * add_action( 'enqueue_block_editor_assets', 'russblock_hero_editor_assets');
 *
 * function russblock_hero_assets() {
 *     wp_enqueue_style(
 * 		     'russblock/hero',
 *         plugins_url( 'src/view.css', __FILE__ ),
 *         array( 'wp-edit-blocks' )
 * 	);
 * }
 * add_action( 'enqueue_block_assets', 'russblock_hero_assets' );
*/


// Add align wide support
function russblock_add_wide_align() {
  add_theme_support( 'align-wide' );
}
add_action( 'after_setup_theme', 'russblock_add_wide_align' );
