<?php

/* Template Name: New Media */

get_header(); ?>

<body class="brown">
	<?php get_template_part( 'partials/primary', 'navigation' ); ?>
	<div class="center-media flex-enable">
		<div>
			<?php the_content() ?>
		</div>
	</div>

<?php get_footer(); ?>
