<?php
/**
 * Plugin Name: RussBlock
 * Description: Block for Russ
 * Version: 1.0.0
 * Author: Russ
 *
 * @package russblock
 */

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


// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
