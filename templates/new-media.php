<?php

/* Template Name: New Media */

get_header(); ?>
<div style="background-color:<?php the_field('background'); ?>">
	<div style="background-color:<?php the_field('background'); ?>">
		<?php get_template_part( 'partials/primary', 'navigation' ); ?>
		<div class="center-media flex-enable">
			<div>
				<?php the_content(); ?>
			</div>
		</div>
	</div>
</div>
<?php get_footer(); ?>
