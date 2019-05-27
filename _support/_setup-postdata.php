<?php

$post_data = get_post( 1 );

global $post;

$post = $post_data;

setup_postdata($post);

the_title();
the_permalink();
the_content();

wp_reset_postdata();

?>