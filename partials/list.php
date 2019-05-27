<?php if( have_rows('cv_lists_repeater') ): ?>
	<?php while ( have_rows('cv_lists_repeater') ) : the_row();?>
		<h2><?php the_sub_field('event_name'); ?></h2>
		<div class="center-ul">
				<?php the_sub_field('event'); ?>
		</div>
	<?php endwhile; ?>
<?php endif; ?>
