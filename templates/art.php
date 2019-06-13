<?php

/* Template Name: Art */

get_header(); ?>
<div style="background-color:<?php the_field('background'); ?>">
		<?php get_template_part( 'partials/primary', 'navigation' ); ?>
		<h2 class="art-heading" id="paintings">Paintings</h2>

		<p class="p-text"><?php the_field('paintings_text'); ?></p>

		<div class="imglist center-art grid ">

			<!-- kvieciam acf galerija -->

			<?php
			$images = get_field('paintings');
			if( $images ): ?>
			<?php foreach( $images as $image ): ?>
			                <a href="<?php echo $image['url']; ?>" class="grid-item" data-fancybox="images" data-caption="<?php echo $image['caption']; ?>">
			                     <img src="<?php echo $image['sizes']['thumbnail']; ?>" alt="<?php echo $image['alt']; ?>" /></a>
			        <?php endforeach; ?>
			<?php endif; ?>

			<!-- kvieciam acf galerija END -->

		</div>

		<h2 id="drawings" class="art-heading">Drawings</h2>

		<p class="p-text"><?php the_field('drawings_text'); ?></p>

		<div class="imglist center-art grid bottom-padding">

			<!-- kvieciam acf galerija -->

			<?php
			$images = get_field('drawings');
			if( $images ): ?>
			        <?php foreach( $images as $image ): ?>
			                <a href="<?php echo $image['url']; ?>" class="grid-item" data-fancybox="images" data-caption="<?php echo $image['caption']; ?>">
			                     <img src="<?php echo $image['sizes']['thumbnail']; ?>" alt="<?php echo $image['alt']; ?>" /></a>
			        <?php endforeach; ?>
			<?php endif; ?>

			<!-- kvieciam acf galerija END -->

		</div>

		<div class="art-nav flex-enable">
			<a class= "fixed-paintings" href="#paintings">Paintings</a>
			<a class= "fixed-drawings" href="#drawings">Drawings</a>
		</div>
</div>
<?php get_footer(); ?>
