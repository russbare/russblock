<?php
/**
 * Plugin Name: RussBlock
 * Description: Block for Russ
 * Version: 1.0.0
 * Author: Russ
 *
 * @package russblock
 */

 function my_plugin_block_categories( $categories, $post ) {
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
 add_filter( 'block_categories', 'my_plugin_block_categories', 10, 2 );

 function russblock_hero_editor_assets() {
     wp_enqueue_script(
         'russblock/hero',
         plugins_url( 'build/index.build.js', __FILE__ ),
         array( 'wp-blocks', 'wp-element', 'wp-editor' )
     );
     wp_enqueue_style(
          'russblock/hero-editor-style',
          plugins_url( 'src/editor.css', __FILE__ ),
          array( 'wp-edit-blocks' )
     );
 };

 add_action( 'enqueue_block_editor_assets', 'russblock_hero_editor_assets');

 function russblock_hero_assets() {
     wp_enqueue_style(
 		     'russblock/hero',
         plugins_url( 'src/view.css', __FILE__ ),
         array( 'wp-edit-blocks' )
 	);
 }
 add_action( 'enqueue_block_assets', 'russblock_hero_assets' );


function russblock_add_wide_align() {
  add_theme_support( 'align-wide' );
}
add_action( 'after_setup_theme', 'russblock_add_wide_align' );

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
