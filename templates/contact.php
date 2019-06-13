<?php

/* Template Name: Contact */

get_header(); ?>

<div style="background-color:<?php the_field('background'); ?>">
	<?php get_template_part( 'partials/primary', 'navigation' ); ?>
	<div class="center-contact">
		<!-- test -->
		
			<p id="messenger" class="something"><?php the_field('message'); ?></p>
			<div class="transparent">
				<p class="something"><?php the_field('message'); ?></p>
			</div>

		<!-- test -->
		<!-- <p id="messenger" class="something"><?php the_field('message'); ?></p> -->
		<p class="email"><?php the_field('email'); ?></p>

		<?php echo do_shortcode(get_field('contact_form_shortcode')); ?>

		<div class="social flex-enable">
			<?php if( have_rows('social_repeater') ): ?>
				<?php while ( have_rows('social_repeater') ) : the_row();?>
					<?php the_sub_field('event_name'); ?>
						<a class="flex-enable" href="<?php the_sub_field('social_link'); ?>" target="_blank">
							<?php the_sub_field('icon'); ?>
							<div class="transparent">
								<?php the_sub_field('icon'); ?>
							</div>
						</a>
				<?php endwhile; ?>
			<?php endif; ?>
		</div>
	</div>
</div>
<?php get_footer(); ?>
