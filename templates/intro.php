<?php

/* Template Name: Intro */

get_header(); ?>

<div style="background-color:<?php the_field('background'); ?>">
	<div class="container flex-enable">
		<header class="header-box flex-enable">
			<div >
				<div class="flex-enable container">
					<h2 id="messenger"><?php the_field('greeting'); ?></h2>
					<div class="transparent">
						<h2>Labas</h2>
					</div>
				</div>
				<?php the_field('intro_text'); ?>
				<?php
					$args =[
						'menu_class' => 'nav',
						'container' => false,
						'theme_location' => 'intro-navigation',
					];
					wp_nav_menu($args);
				?>
</div>
<?php get_footer(); ?>
