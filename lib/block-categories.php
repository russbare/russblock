<?php

namespace russblock;

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
