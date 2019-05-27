<div class="toggle"><a><i class="fas fa-bars"></i></a></div>
<div class="menu">
	<?php
		$args =[
			'menu_class' => 'nav',
			'container' => false,
			'theme_location' => 'primary-navigation',
		];
		wp_nav_menu($args);
	?>
</div>
