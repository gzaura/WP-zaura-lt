<?php

$page = (get_query_var('paged')) ? get_query_var('paged') : 1;

$my_query = new WP_Query(array(
	'post_type' => 'POSTTYPE',
	'posts_per_page' => get_option('posts_per_page'),
	'orderby' => 'menu_order',
	'order' => 'DESC',
	'paged' => $page,
));

if ( $my_query->have_posts() ) :

?>

<?php $i = 1; while ($my_query->have_posts()) : $my_query->the_post(); ?>

<?php echo $post->ID; ?>
<?php the_title(); ?>
<?php the_content(); ?>

<?php $i++; endwhile; ?>

<?php if( $my_query->max_num_pages > 1 ): ?>

	<?php /* use navigation here */ ?>

<?php endif; ?>

<?php wp_reset_postdata(); unset($my_query); ?>

<?php endif; ?>