<?php

/* Template Name: CV */

get_header(); ?>

<body class="brown">

	<?php get_template_part( 'partials/primary', 'navigation' ); ?>

	<div class="center">
		<?php
		$image = get_field('portrait');
		if( !empty($image) ): ?>
			<img class="cv-foto" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
		<?php endif; ?>
		<p><?php the_field('portrait_text'); ?></p>

	<?php get_template_part( 'partials/list' ); ?>
	<?php get_footer(); ?>