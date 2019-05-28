<!DOCTYPE html>

<html <?php language_attributes(); ?>>
	<head>
		<meta <?php bloginfo('charset'); ?>>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title><?php wp_title(); ?></title>
		<?php wp_head(); ?>
	</head>
<!--                   |
                       ||
                       ||,
                       |'\
                        |`|
                        | `|
                        '| |.
                         | `L
                         |  |,
                         `|  |.                              _,/7
                          |  `|                       __,---'' /
                          |   `|              __,---'"   ..- ./
                          ||   |      _.--=/'',--=-,,  -    ,/
                          `|   \,/'''`\,     /'   >  \     /'
                           | ,/'  `. .  `\ ,/'   / \  \   /'
                   ___,----Y-'      Y     7'   .'.' `\ \ /'
               _-/''        `\.     .   ,/'    /.'    `\\
           _,-''          ---  \    `  /'    ./.'   __-' "
        _/''     .--            `\    /'     /,'_--'
     ,/''  ..                     `"\_     ./ /='
 .,/'                             .--"\    / /
<------------------,_____      ,/~'  \ | ./ .'
                        `"""""""      `|_/\ /
                                        '  '
 -->
	<body style="background-color:<?php the_field('background'); ?>">
		<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-38170672-2"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', 'UA-38170672-2');
		</script>
