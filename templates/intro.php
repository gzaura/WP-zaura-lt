<?php

/* Template Name: Intro */

get_header(); ?>

<body class="brown">
	<div class="container flex-enable">
		<header class="header-box flex-enable">
			<div >
				<div class="flex-enable container">
					<h2 id="messenger"><?php the_field('greeting'); ?></h2>
					<div class="transparent">
						<h2>Labas</h2>
					</div>
				</div>
				<p><?php the_field('intro_text'); ?></p>
				<?php
					$args =[
						'menu_class' => 'nav',
						'container' => false,
						'theme_location' => 'intro-navigation',
					];
					wp_nav_menu($args);
				?>

<?php get_footer(); ?>
